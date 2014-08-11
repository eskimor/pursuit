module Main where

import Data.Array
import Data.Maybe
import Data.Either
import Data.Tuple
import Data.Foreign
import Data.Foldable
import Data.Traversable

import Control.Monad.Eff
import Control.Monad.Eff.DOM
import Control.Monad.Eff.AJAX

import qualified Data.String as S
import qualified Data.Trie as T

data Entry = Entry String String String

instance readForeignEntry :: ReadForeign Entry where
  read = Entry <$> prop "module" <*> prop "name" <*> prop "detail"

getQuery :: forall eff. Eff (dom :: DOM | eff) String
getQuery = do
  Just searchInput <- querySelector "#searchInput"
  query <- getValue searchInput

  return $ case parseForeign read query of
    Right s -> s
    Left _ -> ""

runSearch :: T.Trie [Entry] -> String -> Maybe [Entry]
runSearch trie "" = Nothing
runSearch trie query = do
  rest <- T.lookupAll (S.toLower query) trie
  let arr = snd <$> T.toArray rest
  return (concat arr)

search :: forall eff. T.Trie [Entry] -> Eff (dom :: DOM | eff) Unit
search trie = do
  query <- getQuery

  maybeEl <- querySelector "#searchResults"  
  
  case maybeEl of
    Nothing -> error "#searchResults not found"
    Just searchResults -> do
      setInnerHTML "" searchResults

      case runSearch trie query of
        Nothing -> return unit 
        Just results -> do
          foreachE (take 20 results) $ \(Entry moduleName name detail) -> do
            div <- createElement "div"
        
            createElement "h2" 
	      >>= setText name 
              >>= flip appendChild div
            createElement "div" 
	      >>= setText moduleName
              >>= flip appendChild div
            createElement "pre" 
	      >>= setText detail 
              >>= flip appendChild div
        
            div `appendChild` searchResults
            return unit
 
foreign import error 
  "function error(msg) {\
  \  throw new Error(msg);\
  \}":: forall a. String -> a

insertEntry :: T.Trie [Entry] -> Entry -> T.Trie [Entry]
insertEntry trie e@(Entry _ name _) = foldl insertSuffix trie (suffixesOf (S.toLower name) [])
  where
  insertSuffix :: T.Trie [Entry] -> String -> T.Trie [Entry]
  insertSuffix trie s = T.insertWith (cons e) s trie
  cons :: Entry -> Maybe [Entry] -> [Entry]
  cons e Nothing = [e]
  cons e (Just es) = e : es
  suffixesOf :: String -> [String] -> [String]
  suffixesOf "" acc = acc
  suffixesOf s  acc = suffixesOf (S.drop 1 s) (s : acc)

buildTrie :: String -> T.Trie [Entry]
buildTrie json = case parseJSON json of
  Left err -> error err
  Right arr -> foldl insertEntry T.empty (arr :: [Entry])

main :: Eff (dom :: DOM, xhr :: XHR) Unit
main = do
  get "data.json" $ \json -> do
    maybeEl <- querySelector "#searchInput"
   
    case maybeEl of
      Nothing -> error "#searchInput not found"
      Just searchInput -> do
        let trie = buildTrie json
        for ["keyup", "change"] $ \evt -> 
	  addEventListener evt (search trie) searchInput
        return unit   

