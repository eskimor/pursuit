var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var Unit = {
        create: function (value) {
            return value;
        }
    };
    function LT() {

    };
    LT.value = new LT();
    function GT() {

    };
    GT.value = new GT();
    function EQ() {

    };
    EQ.value = new EQ();
    function Semigroupoid($less$less$less) {
        this["<<<"] = $less$less$less;
    };
    function Category(__superclass_Prelude$dotSemigroupoid_0, id) {
        this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
        this.id = id;
    };
    function Show(show) {
        this.show = show;
    };
    function Functor($less$dollar$greater) {
        this["<$>"] = $less$dollar$greater;
    };
    function Apply($less$times$greater, __superclass_Prelude$dotFunctor_0) {
        this["<*>"] = $less$times$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    function Applicative(__superclass_Prelude$dotApply_0, pure) {
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
        this.pure = pure;
    };
    function Bind($greater$greater$eq, __superclass_Prelude$dotApply_0) {
        this[">>="] = $greater$greater$eq;
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    };
    function Monad(__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
        this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
    };
    function Num($percent, $times, $plus, $minus, $div, negate) {
        this["%"] = $percent;
        this["*"] = $times;
        this["+"] = $plus;
        this["-"] = $minus;
        this["/"] = $div;
        this.negate = negate;
    };
    function Eq($div$eq, $eq$eq) {
        this["/="] = $div$eq;
        this["=="] = $eq$eq;
    };
    function Ord(__superclass_Prelude$dotEq_0, compare) {
        this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
        this.compare = compare;
    };
    function BoolLike($amp$amp, not, $bar$bar) {
        this["&&"] = $amp$amp;
        this.not = not;
        this["||"] = $bar$bar;
    };
    function Semigroup($less$greater) {
        this["<>"] = $less$greater;
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showNumberImpl(n) {  return n.toString();};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function unsafeCompareImpl(lt) {  return function (eq) {    return function (gt) {      return function (x) {        return function (y) {          return x < y ? lt : x > y ? gt : eq;        };      };    };  };};
    function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
    function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
    function boolNot(b) {  return !b;};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $colon = cons;
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $amp$amp = function (dict) {
        return dict["&&"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
    var unit = {};
    var showNumber = function (_) {
        return new Show(showNumberImpl);
    };
    var show = function (dict) {
        return dict.show;
    };
    var semigroupoidArr = function (_) {
        return new Semigroupoid(function (f) {
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        });
    };
    var semigroupString = function (_) {
        return new Semigroup(concatString);
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_4) {
        return pure(__dict_Monad_4["__superclass_Prelude.Applicative_0"]({}));
    };
    var numNumber = function (_) {
        return new Num(numMod, numMul, numAdd, numSub, numDiv, numNegate);
    };
    var liftA1 = function (__dict_Applicative_6) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_6["__superclass_Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqString = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordString = function (_) {
        return new Ord(function (__1) {
            return eqString({});
        }, unsafeCompare);
    };
    var eqNumber = function (_) {
        return new Eq(refIneq, refEq);
    };
    var ordNumber = function (_) {
        return new Ord(function (__1) {
            return eqNumber({});
        }, unsafeCompare);
    };
    var compare = function (dict) {
        return dict.compare;
    };
    var $less = function (__dict_Ord_10) {
        return function (a1) {
            return function (a2) {
                var _337 = compare(__dict_Ord_10)(a1)(a2);
                if (_337 instanceof LT) {
                    return true;
                };
                return false;
            };
        };
    };
    var $less$eq = function (__dict_Ord_11) {
        return function (a1) {
            return function (a2) {
                var _338 = compare(__dict_Ord_11)(a1)(a2);
                if (_338 instanceof GT) {
                    return false;
                };
                return true;
            };
        };
    };
    var $greater$eq = function (__dict_Ord_13) {
        return function (a1) {
            return function (a2) {
                var _339 = compare(__dict_Ord_13)(a1)(a2);
                if (_339 instanceof LT) {
                    return false;
                };
                return true;
            };
        };
    };
    var categoryArr = function (_) {
        return new Category(function (__1) {
            return semigroupoidArr({});
        }, function (x) {
            return x;
        });
    };
    var boolLikeBoolean = function (_) {
        return new BoolLike(boolAnd, boolNot, boolOr);
    };
    var ap = function (__dict_Monad_14) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_14)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        Semigroup: Semigroup, 
        BoolLike: BoolLike, 
        Ord: Ord, 
        Eq: Eq, 
        Num: Num, 
        Monad: Monad, 
        Bind: Bind, 
        Applicative: Applicative, 
        Apply: Apply, 
        Functor: Functor, 
        Show: Show, 
        Category: Category, 
        Semigroupoid: Semigroupoid, 
        unit: unit, 
        "++": $plus$plus, 
        "<>": $less$greater, 
        "&&": $amp$amp, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        "<": $less, 
        compare: compare, 
        refIneq: refIneq, 
        refEq: refEq, 
        "==": $eq$eq, 
        "+": $plus, 
        ap: ap, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "$": $dollar, 
        id: id, 
        "<<<": $less$less$less, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showNumber: showNumber, 
        numNumber: numNumber, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        ordNumber: ordNumber, 
        ordString: ordString, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupString: semigroupString
    };
})();
var PS = PS || {};
PS.Data_String = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function charAt(i) {  return function(s) {    return s.charAt(i);   };};
    function length(s) {  return s.length;};
    function drop(n) {  return function(s) {    return s.substr(n);  };};
    function toLower(s) {  return s.toLowerCase();};
    return {
        toLower: toLower, 
        drop: drop, 
        length: length, 
        charAt: charAt
    };
})();
var PS = PS || {};
PS.Data_Maybe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Nothing() {

    };
    Nothing.value = new Nothing();
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    var maybe = function (_51) {
        return function (_52) {
            return function (_53) {
                if (_53 instanceof Nothing) {
                    return _51;
                };
                if (_53 instanceof Just) {
                    return _52(_53.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var functorMaybe = function (_) {
        return new Prelude.Functor(function (_54) {
            return function (_55) {
                if (_55 instanceof Just) {
                    return new Just(_54(_55.value0));
                };
                return Nothing.value;
            };
        });
    };
    var fromMaybe = function (a) {
        return maybe(a)(Prelude.id(Prelude.categoryArr({})));
    };
    var applyMaybe = function (_) {
        return new Prelude.Apply(function (_56) {
            return function (_57) {
                if (_56 instanceof Just) {
                    return Prelude["<$>"](functorMaybe({}))(_56.value0)(_57);
                };
                if (_56 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorMaybe({});
        });
    };
    var bindMaybe = function (_) {
        return new Prelude.Bind(function (_60) {
            return function (_61) {
                if (_60 instanceof Just) {
                    return _61(_60.value0);
                };
                if (_60 instanceof Nothing) {
                    return Nothing.value;
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return applyMaybe({});
        });
    };
    var applicativeMaybe = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyMaybe({});
        }, Just.create);
    };
    var monadMaybe = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeMaybe({});
        }, function (__1) {
            return bindMaybe({});
        });
    };
    return {
        Nothing: Nothing, 
        Just: Just, 
        fromMaybe: fromMaybe, 
        maybe: maybe, 
        functorMaybe: functorMaybe, 
        applyMaybe: applyMaybe, 
        applicativeMaybe: applicativeMaybe, 
        bindMaybe: bindMaybe, 
        monadMaybe: monadMaybe
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function runFn2(fn) {  return function(a) {    return function(b) {      return fn(a, b);    };  };};
    function runFn3(fn) {  return function(a) {    return function(b) {      return function(c) {        return fn(a, b, c);      };    };  };};
    function runFn4(fn) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return fn(a, b, c, d);        };      };    };  };};
    return {
        runFn4: runFn4, 
        runFn3: runFn3, 
        runFn2: runFn2
    };
})();
var PS = PS || {};
PS.Data_Either = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function Left(value0) {
        this.value0 = value0;
    };
    Left.create = function (value0) {
        return new Left(value0);
    };
    function Right(value0) {
        this.value0 = value0;
    };
    Right.create = function (value0) {
        return new Right(value0);
    };
    var functorEither = function (_) {
        return new Prelude.Functor(function (_76) {
            return function (_77) {
                if (_77 instanceof Left) {
                    return new Left(_77.value0);
                };
                if (_77 instanceof Right) {
                    return new Right(_76(_77.value0));
                };
                throw new Error("Failed pattern match");
            };
        });
    };
    var either = function (_73) {
        return function (_74) {
            return function (_75) {
                if (_75 instanceof Left) {
                    return _73(_75.value0);
                };
                if (_75 instanceof Right) {
                    return _74(_75.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    var applyEither = function (_) {
        return new Prelude.Apply(function (_78) {
            return function (_79) {
                if (_78 instanceof Left) {
                    return new Left(_78.value0);
                };
                if (_78 instanceof Right) {
                    return Prelude["<$>"](functorEither({}))(_78.value0)(_79);
                };
                throw new Error("Failed pattern match");
            };
        }, function (__1) {
            return functorEither({});
        });
    };
    var bindEither = function (_) {
        return new Prelude.Bind(either(function (e) {
            return function (__1) {
                return new Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        }), function (__1) {
            return applyEither({});
        });
    };
    var applicativeEither = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEither({});
        }, Right.create);
    };
    return {
        Left: Left, 
        Right: Right, 
        either: either, 
        functorEither: functorEither, 
        applyEither: applyEither, 
        applicativeEither: applicativeEither, 
        bindEither: bindEither
    };
})();
var PS = PS || {};
PS.Data_Array = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function length (xs) {  return xs.length;};
    function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
    function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
    function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
    function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
    function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
    function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
    function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
    var take = function (n) {
        return slice(0)(n);
    };
    var semigroupArray = function (_) {
        return new Prelude.Semigroup(append);
    };
    var functorArray = function (_) {
        return new Prelude.Functor(map);
    };
    return {
        zipWith: zipWith, 
        range: range, 
        concatMap: concatMap, 
        take: take, 
        concat: concat, 
        append: append, 
        length: length, 
        map: map, 
        functorArray: functorArray, 
        semigroupArray: semigroupArray
    };
})();
var PS = PS || {};
PS.Data_Monoid = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var mempty = function (dict) {
        return dict.mempty;
    };
    return {
        mempty: mempty
    };
})();
var PS = PS || {};
PS.Data_Tuple = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    function Tuple(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Tuple.create = function (value0) {
        return function (value1) {
            return new Tuple(value0, value1);
        };
    };
    var zip = Data_Array.zipWith(Tuple.create);
    var snd = function (_178) {
        return _178.value1;
    };
    return {
        Tuple: Tuple, 
        zip: zip, 
        snd: snd
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    function foreachE(as) {  return function(f) {    return function() {      for (var i = 0; i < as.length; i++) {        f(as[i])();      }    };  };};
    var applicativeEff = function (_) {
        return new Prelude.Applicative(function (__1) {
            return applyEff({});
        }, returnE);
    };
    var applyEff = function (_) {
        return new Prelude.Apply(Prelude.ap(monadEff({})), function (__1) {
            return functorEff({});
        });
    };
    var monadEff = function (_) {
        return new Prelude.Monad(function (__1) {
            return applicativeEff({});
        }, function (__1) {
            return bindEff({});
        });
    };
    var bindEff = function (_) {
        return new Prelude.Bind(bindE, function (__1) {
            return applyEff({});
        });
    };
    var functorEff = function (_) {
        return new Prelude.Functor(Prelude.liftA1(applicativeEff({})));
    };
    return {
        foreachE: foreachE, 
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_AJAX = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function get(uri) {  return function(k) {    return function() {      var req = new XMLHttpRequest();      req.onreadystatechange = function() {        if (req.readyState === 4 && req.status === 200) {          k(req.responseText)();        }      };      req.open('GET', uri, true);      req.send();    };  };};
    return {
        get: get
    };
})();
var PS = PS || {};
PS.Data_Foldable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    function Foldable(foldMap, foldl, foldr) {
        this.foldMap = foldMap;
        this.foldl = foldl;
        this.foldr = foldr;
    };
    function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
    function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
    var foldr = function (dict) {
        return dict.foldr;
    };
    var foldl = function (dict) {
        return dict.foldl;
    };
    var foldableArray = function (_) {
        return new Foldable(function (__dict_Monoid_86) {
            return function (f) {
                return function (xs) {
                    return foldr(foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<>"](__dict_Monoid_86["__superclass_Prelude.Semigroup_0"]({}))(f(x))(acc);
                        };
                    })(Data_Monoid.mempty(__dict_Monoid_86))(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldlArray(f)(z)(xs);
                };
            };
        }, function (f) {
            return function (z) {
                return function (xs) {
                    return foldrArray(f)(z)(xs);
                };
            };
        });
    };
    return {
        Foldable: Foldable, 
        foldlArray: foldlArray, 
        foldrArray: foldrArray, 
        foldl: foldl, 
        foldr: foldr, 
        foldableArray: foldableArray
    };
})();
var PS = PS || {};
PS.Data_Map = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Maybe = PS.Data_Maybe;
    function Leaf() {

    };
    Leaf.value = new Leaf();
    function Two(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    Two.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new Two(value0, value1, value2, value3);
                };
            };
        };
    };
    function Three(value0, value1, value2, value3, value4, value5, value6) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
        this.value6 = value6;
    };
    Three.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return function (value6) {
                                return new Three(value0, value1, value2, value3, value4, value5, value6);
                            };
                        };
                    };
                };
            };
        };
    };
    function TwoLeft(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoLeft(value0, value1, value2);
            };
        };
    };
    function TwoRight(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TwoRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TwoRight(value0, value1, value2);
            };
        };
    };
    function ThreeLeft(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeLeft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeLeft(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function ThreeMiddle(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeMiddle.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeMiddle(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function ThreeRight(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
    };
    ThreeRight.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return function (value5) {
                            return new ThreeRight(value0, value1, value2, value3, value4, value5);
                        };
                    };
                };
            };
        };
    };
    function KickUp(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    KickUp.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new KickUp(value0, value1, value2, value3);
                };
            };
        };
    };
    var toList = function (_244) {
        if (_244 instanceof Leaf) {
            return [  ];
        };
        if (_244 instanceof Two) {
            return Prelude["++"](Data_Array.semigroupArray({}))(toList(_244.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_244.value1, _244.value2) ])(toList(_244.value3)));
        };
        if (_244 instanceof Three) {
            return Prelude["++"](Data_Array.semigroupArray({}))(toList(_244.value0))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_244.value1, _244.value2) ])(Prelude["++"](Data_Array.semigroupArray({}))(toList(_244.value3))(Prelude["++"](Data_Array.semigroupArray({}))([ new Data_Tuple.Tuple(_244.value4, _244.value5) ])(toList(_244.value6)))));
        };
        throw new Error("Failed pattern match");
    };
    var lookup = function (__copy___dict_Ord_103) {
        return function (__copy__240) {
            return function (__copy__241) {
                var __dict_Ord_103 = __copy___dict_Ord_103;
                var _240 = __copy__240;
                var _241 = __copy__241;
                tco: while (true) {
                    if (_241 instanceof Leaf) {
                        return Data_Maybe.Nothing.value;
                    };
                    if (_241 instanceof Two && Prelude["=="](__dict_Ord_103["__superclass_Prelude.Eq_0"]({}))(_240)(_241.value1)) {
                        return new Data_Maybe.Just(_241.value2);
                    };
                    if (_241 instanceof Two && Prelude["<"](__dict_Ord_103)(_240)(_241.value1)) {
                        var __tco___dict_Ord_103 = __dict_Ord_103;
                        var __tco__240 = _240;
                        var __tco__241 = _241.value0;
                        __dict_Ord_103 = __tco___dict_Ord_103;
                        _240 = __tco__240;
                        _241 = __tco__241;
                        continue tco;
                    };
                    if (_241 instanceof Two) {
                        var __tco___dict_Ord_103 = __dict_Ord_103;
                        var __tco__240 = _240;
                        var __tco__241 = _241.value3;
                        __dict_Ord_103 = __tco___dict_Ord_103;
                        _240 = __tco__240;
                        _241 = __tco__241;
                        continue tco;
                    };
                    if (_241 instanceof Three && Prelude["=="](__dict_Ord_103["__superclass_Prelude.Eq_0"]({}))(_240)(_241.value1)) {
                        return new Data_Maybe.Just(_241.value2);
                    };
                    if (_241 instanceof Three && Prelude["=="](__dict_Ord_103["__superclass_Prelude.Eq_0"]({}))(_240)(_241.value4)) {
                        return new Data_Maybe.Just(_241.value5);
                    };
                    if (_241 instanceof Three && Prelude["<"](__dict_Ord_103)(_240)(_241.value1)) {
                        var __tco___dict_Ord_103 = __dict_Ord_103;
                        var __tco__240 = _240;
                        var __tco__241 = _241.value0;
                        __dict_Ord_103 = __tco___dict_Ord_103;
                        _240 = __tco__240;
                        _241 = __tco__241;
                        continue tco;
                    };
                    if (_241 instanceof Three && Prelude["<"](__dict_Ord_103)(_241.value1)(_240) && Prelude["<="](__dict_Ord_103)(_240)(_241.value4)) {
                        var __tco___dict_Ord_103 = __dict_Ord_103;
                        var __tco__240 = _240;
                        var __tco__241 = _241.value3;
                        __dict_Ord_103 = __tco___dict_Ord_103;
                        _240 = __tco__240;
                        _241 = __tco__241;
                        continue tco;
                    };
                    if (_241 instanceof Three) {
                        var __tco___dict_Ord_103 = __dict_Ord_103;
                        var __tco__240 = _240;
                        var __tco__241 = _241.value6;
                        __dict_Ord_103 = __tco___dict_Ord_103;
                        _240 = __tco__240;
                        _241 = __tco__241;
                        continue tco;
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var fromZipper = function (__copy___dict_Ord_105) {
        return function (__copy__242) {
            return function (__copy__243) {
                var __dict_Ord_105 = __copy___dict_Ord_105;
                var _242 = __copy__242;
                var _243 = __copy__243;
                tco: while (true) {
                    if (_242.length === 0) {
                        return _243;
                    };
                    if (_242.length > 0) {
                        var _435 = _242.slice(1);
                        if (_242[0] instanceof TwoLeft) {
                            var __tco___dict_Ord_105 = __dict_Ord_105;
                            var __tco__243 = new Two(_243, (_242[0]).value0, (_242[0]).value1, (_242[0]).value2);
                            __dict_Ord_105 = __tco___dict_Ord_105;
                            _242 = _435;
                            _243 = __tco__243;
                            continue tco;
                        };
                    };
                    if (_242.length > 0) {
                        var _440 = _242.slice(1);
                        if (_242[0] instanceof TwoRight) {
                            var __tco___dict_Ord_105 = __dict_Ord_105;
                            var __tco__243 = new Two((_242[0]).value0, (_242[0]).value1, (_242[0]).value2, _243);
                            __dict_Ord_105 = __tco___dict_Ord_105;
                            _242 = _440;
                            _243 = __tco__243;
                            continue tco;
                        };
                    };
                    if (_242.length > 0) {
                        var _445 = _242.slice(1);
                        if (_242[0] instanceof ThreeLeft) {
                            var __tco___dict_Ord_105 = __dict_Ord_105;
                            var __tco__243 = new Three(_243, (_242[0]).value0, (_242[0]).value1, (_242[0]).value2, (_242[0]).value3, (_242[0]).value4, (_242[0]).value5);
                            __dict_Ord_105 = __tco___dict_Ord_105;
                            _242 = _445;
                            _243 = __tco__243;
                            continue tco;
                        };
                    };
                    if (_242.length > 0) {
                        var _453 = _242.slice(1);
                        if (_242[0] instanceof ThreeMiddle) {
                            var __tco___dict_Ord_105 = __dict_Ord_105;
                            var __tco__243 = new Three((_242[0]).value0, (_242[0]).value1, (_242[0]).value2, _243, (_242[0]).value3, (_242[0]).value4, (_242[0]).value5);
                            __dict_Ord_105 = __tco___dict_Ord_105;
                            _242 = _453;
                            _243 = __tco__243;
                            continue tco;
                        };
                    };
                    if (_242.length > 0) {
                        var _461 = _242.slice(1);
                        if (_242[0] instanceof ThreeRight) {
                            var __tco___dict_Ord_105 = __dict_Ord_105;
                            var __tco__243 = new Three((_242[0]).value0, (_242[0]).value1, (_242[0]).value2, (_242[0]).value3, (_242[0]).value4, (_242[0]).value5, _243);
                            __dict_Ord_105 = __tco___dict_Ord_105;
                            _242 = _461;
                            _243 = __tco__243;
                            continue tco;
                        };
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    var insert = function (__dict_Ord_106) {
        var up = function (__copy___dict_Ord_107) {
            return function (__copy__254) {
                return function (__copy__255) {
                    var __dict_Ord_107 = __copy___dict_Ord_107;
                    var _254 = __copy__254;
                    var _255 = __copy__255;
                    tco: while (true) {
                        if (_254.length === 0) {
                            return new Two(_255.value0, _255.value1, _255.value2, _255.value3);
                        };
                        if (_254.length > 0) {
                            var _479 = _254.slice(1);
                            if (_254[0] instanceof TwoLeft) {
                                return fromZipper(__dict_Ord_107)(_479)(new Three(_255.value0, _255.value1, _255.value2, _255.value3, (_254[0]).value0, (_254[0]).value1, (_254[0]).value2));
                            };
                        };
                        if (_254.length > 0) {
                            var _488 = _254.slice(1);
                            if (_254[0] instanceof TwoRight) {
                                return fromZipper(__dict_Ord_107)(_488)(new Three((_254[0]).value0, (_254[0]).value1, (_254[0]).value2, _255.value0, _255.value1, _255.value2, _255.value3));
                            };
                        };
                        if (_254.length > 0) {
                            var _497 = _254.slice(1);
                            if (_254[0] instanceof ThreeLeft) {
                                var __tco___dict_Ord_107 = __dict_Ord_107;
                                var __tco__255 = new KickUp(new Two(_255.value0, _255.value1, _255.value2, _255.value3), (_254[0]).value0, (_254[0]).value1, new Two((_254[0]).value2, (_254[0]).value3, (_254[0]).value4, (_254[0]).value5));
                                __dict_Ord_107 = __tco___dict_Ord_107;
                                _254 = _497;
                                _255 = __tco__255;
                                continue tco;
                            };
                        };
                        if (_254.length > 0) {
                            var _509 = _254.slice(1);
                            if (_254[0] instanceof ThreeMiddle) {
                                var __tco___dict_Ord_107 = __dict_Ord_107;
                                var __tco__255 = new KickUp(new Two((_254[0]).value0, (_254[0]).value1, (_254[0]).value2, _255.value0), _255.value1, _255.value2, new Two(_255.value3, (_254[0]).value3, (_254[0]).value4, (_254[0]).value5));
                                __dict_Ord_107 = __tco___dict_Ord_107;
                                _254 = _509;
                                _255 = __tco__255;
                                continue tco;
                            };
                        };
                        if (_254.length > 0) {
                            var _521 = _254.slice(1);
                            if (_254[0] instanceof ThreeRight) {
                                var __tco___dict_Ord_107 = __dict_Ord_107;
                                var __tco__255 = new KickUp(new Two((_254[0]).value0, (_254[0]).value1, (_254[0]).value2, (_254[0]).value3), (_254[0]).value4, (_254[0]).value5, new Two(_255.value0, _255.value1, _255.value2, _255.value3));
                                __dict_Ord_107 = __tco___dict_Ord_107;
                                _254 = _521;
                                _255 = __tco__255;
                                continue tco;
                            };
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var down = function (__copy___dict_Ord_108) {
            return function (__copy__250) {
                return function (__copy__251) {
                    return function (__copy__252) {
                        return function (__copy__253) {
                            var __dict_Ord_108 = __copy___dict_Ord_108;
                            var _250 = __copy__250;
                            var _251 = __copy__251;
                            var _252 = __copy__252;
                            var _253 = __copy__253;
                            tco: while (true) {
                                if (_253 instanceof Leaf) {
                                    return up(__dict_Ord_108)(_250)(new KickUp(Leaf.value, _251, _252, Leaf.value));
                                };
                                if (_253 instanceof Two && Prelude["=="](__dict_Ord_108["__superclass_Prelude.Eq_0"]({}))(_251)(_253.value1)) {
                                    return fromZipper(__dict_Ord_108)(_250)(new Two(_253.value0, _251, _252, _253.value3));
                                };
                                if (_253 instanceof Two && Prelude["<"](__dict_Ord_108)(_251)(_253.value1)) {
                                    var __tco___dict_Ord_108 = __dict_Ord_108;
                                    var __tco__250 = Prelude[":"](new TwoLeft(_253.value1, _253.value2, _253.value3))(_250);
                                    var __tco__251 = _251;
                                    var __tco__252 = _252;
                                    var __tco__253 = _253.value0;
                                    __dict_Ord_108 = __tco___dict_Ord_108;
                                    _250 = __tco__250;
                                    _251 = __tco__251;
                                    _252 = __tco__252;
                                    _253 = __tco__253;
                                    continue tco;
                                };
                                if (_253 instanceof Two) {
                                    var __tco___dict_Ord_108 = __dict_Ord_108;
                                    var __tco__250 = Prelude[":"](new TwoRight(_253.value0, _253.value1, _253.value2))(_250);
                                    var __tco__251 = _251;
                                    var __tco__252 = _252;
                                    var __tco__253 = _253.value3;
                                    __dict_Ord_108 = __tco___dict_Ord_108;
                                    _250 = __tco__250;
                                    _251 = __tco__251;
                                    _252 = __tco__252;
                                    _253 = __tco__253;
                                    continue tco;
                                };
                                if (_253 instanceof Three && Prelude["=="](__dict_Ord_108["__superclass_Prelude.Eq_0"]({}))(_251)(_253.value1)) {
                                    return fromZipper(__dict_Ord_108)(_250)(new Three(_253.value0, _251, _252, _253.value3, _253.value4, _253.value5, _253.value6));
                                };
                                if (_253 instanceof Three && Prelude["=="](__dict_Ord_108["__superclass_Prelude.Eq_0"]({}))(_251)(_253.value4)) {
                                    return fromZipper(__dict_Ord_108)(_250)(new Three(_253.value0, _253.value1, _253.value2, _253.value3, _251, _252, _253.value6));
                                };
                                if (_253 instanceof Three && Prelude["<"](__dict_Ord_108)(_251)(_253.value1)) {
                                    var __tco___dict_Ord_108 = __dict_Ord_108;
                                    var __tco__250 = Prelude[":"](new ThreeLeft(_253.value1, _253.value2, _253.value3, _253.value4, _253.value5, _253.value6))(_250);
                                    var __tco__251 = _251;
                                    var __tco__252 = _252;
                                    var __tco__253 = _253.value0;
                                    __dict_Ord_108 = __tco___dict_Ord_108;
                                    _250 = __tco__250;
                                    _251 = __tco__251;
                                    _252 = __tco__252;
                                    _253 = __tco__253;
                                    continue tco;
                                };
                                if (_253 instanceof Three && Prelude["<"](__dict_Ord_108)(_253.value1)(_251) && Prelude["<="](__dict_Ord_108)(_251)(_253.value4)) {
                                    var __tco___dict_Ord_108 = __dict_Ord_108;
                                    var __tco__250 = Prelude[":"](new ThreeMiddle(_253.value0, _253.value1, _253.value2, _253.value4, _253.value5, _253.value6))(_250);
                                    var __tco__251 = _251;
                                    var __tco__252 = _252;
                                    var __tco__253 = _253.value3;
                                    __dict_Ord_108 = __tco___dict_Ord_108;
                                    _250 = __tco__250;
                                    _251 = __tco__251;
                                    _252 = __tco__252;
                                    _253 = __tco__253;
                                    continue tco;
                                };
                                if (_253 instanceof Three) {
                                    var __tco___dict_Ord_108 = __dict_Ord_108;
                                    var __tco__250 = Prelude[":"](new ThreeRight(_253.value0, _253.value1, _253.value2, _253.value3, _253.value4, _253.value5))(_250);
                                    var __tco__251 = _251;
                                    var __tco__252 = _252;
                                    var __tco__253 = _253.value6;
                                    __dict_Ord_108 = __tco___dict_Ord_108;
                                    _250 = __tco__250;
                                    _251 = __tco__251;
                                    _252 = __tco__252;
                                    _253 = __tco__253;
                                    continue tco;
                                };
                                throw new Error("Failed pattern match");
                            };
                        };
                    };
                };
            };
        };
        return down(__dict_Ord_106)([  ]);
    };
    var empty = Leaf.value;
    var $$delete = function (__dict_Ord_114) {
        var up = function (__copy___dict_Ord_115) {
            return function (__copy__259) {
                return function (__copy__260) {
                    var __dict_Ord_115 = __copy___dict_Ord_115;
                    var _259 = __copy__259;
                    var _260 = __copy__260;
                    tco: while (true) {
                        if (_259.length === 0) {
                            return _260;
                        };
                        if (_259.length > 0) {
                            var _582 = _259.slice(1);
                            if (_259[0] instanceof TwoLeft && (_259[0]).value2 instanceof Leaf && _260 instanceof Leaf) {
                                return fromZipper(__dict_Ord_115)(_582)(new Two(Leaf.value, (_259[0]).value0, (_259[0]).value1, Leaf.value));
                            };
                        };
                        if (_259.length > 0) {
                            var _587 = _259.slice(1);
                            if (_259[0] instanceof TwoRight && (_259[0]).value0 instanceof Leaf && _260 instanceof Leaf) {
                                return fromZipper(__dict_Ord_115)(_587)(new Two(Leaf.value, (_259[0]).value1, (_259[0]).value2, Leaf.value));
                            };
                        };
                        if (_259.length > 0) {
                            var _592 = _259.slice(1);
                            if (_259[0] instanceof TwoLeft && (_259[0]).value2 instanceof Two) {
                                var __tco___dict_Ord_115 = __dict_Ord_115;
                                var __tco__260 = new Three(_260, (_259[0]).value0, (_259[0]).value1, (_259[0]).value2.value0, (_259[0]).value2.value1, (_259[0]).value2.value2, (_259[0]).value2.value3);
                                __dict_Ord_115 = __tco___dict_Ord_115;
                                _259 = _592;
                                _260 = __tco__260;
                                continue tco;
                            };
                        };
                        if (_259.length > 0) {
                            var _601 = _259.slice(1);
                            if (_259[0] instanceof TwoRight && (_259[0]).value0 instanceof Two) {
                                var __tco___dict_Ord_115 = __dict_Ord_115;
                                var __tco__260 = new Three((_259[0]).value0.value0, (_259[0]).value0.value1, (_259[0]).value0.value2, (_259[0]).value0.value3, (_259[0]).value1, (_259[0]).value2, _260);
                                __dict_Ord_115 = __tco___dict_Ord_115;
                                _259 = _601;
                                _260 = __tco__260;
                                continue tco;
                            };
                        };
                        if (_259.length > 0) {
                            var _610 = _259.slice(1);
                            if (_259[0] instanceof TwoLeft && (_259[0]).value2 instanceof Three) {
                                return fromZipper(__dict_Ord_115)(_610)(new Two(new Two(_260, (_259[0]).value0, (_259[0]).value1, (_259[0]).value2.value0), (_259[0]).value2.value1, (_259[0]).value2.value2, new Two((_259[0]).value2.value3, (_259[0]).value2.value4, (_259[0]).value2.value5, (_259[0]).value2.value6)));
                            };
                        };
                        if (_259.length > 0) {
                            var _622 = _259.slice(1);
                            if (_259[0] instanceof TwoRight && (_259[0]).value0 instanceof Three) {
                                return fromZipper(__dict_Ord_115)(_622)(new Two(new Two((_259[0]).value0.value0, (_259[0]).value0.value1, (_259[0]).value0.value2, (_259[0]).value0.value3), (_259[0]).value0.value4, (_259[0]).value0.value5, new Two((_259[0]).value0.value6, (_259[0]).value1, (_259[0]).value2, _260)));
                            };
                        };
                        if (_259.length > 0) {
                            var _634 = _259.slice(1);
                            if (_259[0] instanceof ThreeLeft && (_259[0]).value2 instanceof Leaf && (_259[0]).value5 instanceof Leaf && _260 instanceof Leaf) {
                                return fromZipper(__dict_Ord_115)(_634)(new Three(Leaf.value, (_259[0]).value0, (_259[0]).value1, Leaf.value, (_259[0]).value3, (_259[0]).value4, Leaf.value));
                            };
                        };
                        if (_259.length > 0) {
                            var _642 = _259.slice(1);
                            if (_259[0] instanceof ThreeMiddle && (_259[0]).value0 instanceof Leaf && (_259[0]).value5 instanceof Leaf && _260 instanceof Leaf) {
                                return fromZipper(__dict_Ord_115)(_642)(new Three(Leaf.value, (_259[0]).value1, (_259[0]).value2, Leaf.value, (_259[0]).value3, (_259[0]).value4, Leaf.value));
                            };
                        };
                        if (_259.length > 0) {
                            var _650 = _259.slice(1);
                            if (_259[0] instanceof ThreeRight && (_259[0]).value0 instanceof Leaf && (_259[0]).value3 instanceof Leaf && _260 instanceof Leaf) {
                                return fromZipper(__dict_Ord_115)(_650)(new Three(Leaf.value, (_259[0]).value1, (_259[0]).value2, Leaf.value, (_259[0]).value4, (_259[0]).value5, Leaf.value));
                            };
                        };
                        if (_259.length > 0) {
                            var _658 = _259.slice(1);
                            if (_259[0] instanceof ThreeLeft && (_259[0]).value2 instanceof Two) {
                                return fromZipper(__dict_Ord_115)(_658)(new Two(new Three(_260, (_259[0]).value0, (_259[0]).value1, (_259[0]).value2.value0, (_259[0]).value2.value1, (_259[0]).value2.value2, (_259[0]).value2.value3), (_259[0]).value3, (_259[0]).value4, (_259[0]).value5));
                            };
                        };
                        if (_259.length > 0) {
                            var _670 = _259.slice(1);
                            if (_259[0] instanceof ThreeMiddle && (_259[0]).value0 instanceof Two) {
                                return fromZipper(__dict_Ord_115)(_670)(new Two(new Three((_259[0]).value0.value0, (_259[0]).value0.value1, (_259[0]).value0.value2, (_259[0]).value0.value3, (_259[0]).value1, (_259[0]).value2, _260), (_259[0]).value3, (_259[0]).value4, (_259[0]).value5));
                            };
                        };
                        if (_259.length > 0) {
                            var _682 = _259.slice(1);
                            if (_259[0] instanceof ThreeMiddle && (_259[0]).value5 instanceof Two) {
                                return fromZipper(__dict_Ord_115)(_682)(new Two((_259[0]).value0, (_259[0]).value1, (_259[0]).value2, new Three(_260, (_259[0]).value3, (_259[0]).value4, (_259[0]).value5.value0, (_259[0]).value5.value1, (_259[0]).value5.value2, (_259[0]).value5.value3)));
                            };
                        };
                        if (_259.length > 0) {
                            var _694 = _259.slice(1);
                            if (_259[0] instanceof ThreeRight && (_259[0]).value3 instanceof Two) {
                                return fromZipper(__dict_Ord_115)(_694)(new Two((_259[0]).value0, (_259[0]).value1, (_259[0]).value2, new Three((_259[0]).value3.value0, (_259[0]).value3.value1, (_259[0]).value3.value2, (_259[0]).value3.value3, (_259[0]).value4, (_259[0]).value5, _260)));
                            };
                        };
                        if (_259.length > 0) {
                            var _706 = _259.slice(1);
                            if (_259[0] instanceof ThreeLeft && (_259[0]).value2 instanceof Three) {
                                return fromZipper(__dict_Ord_115)(_706)(new Three(new Two(_260, (_259[0]).value0, (_259[0]).value1, (_259[0]).value2.value0), (_259[0]).value2.value1, (_259[0]).value2.value2, new Two((_259[0]).value2.value3, (_259[0]).value2.value4, (_259[0]).value2.value5, (_259[0]).value2.value6), (_259[0]).value3, (_259[0]).value4, (_259[0]).value5));
                            };
                        };
                        if (_259.length > 0) {
                            var _721 = _259.slice(1);
                            if (_259[0] instanceof ThreeMiddle && (_259[0]).value0 instanceof Three) {
                                return fromZipper(__dict_Ord_115)(_721)(new Three(new Two((_259[0]).value0.value0, (_259[0]).value0.value1, (_259[0]).value0.value2, (_259[0]).value0.value3), (_259[0]).value0.value4, (_259[0]).value0.value5, new Two((_259[0]).value0.value6, (_259[0]).value1, (_259[0]).value2, _260), (_259[0]).value3, (_259[0]).value4, (_259[0]).value5));
                            };
                        };
                        if (_259.length > 0) {
                            var _736 = _259.slice(1);
                            if (_259[0] instanceof ThreeMiddle && (_259[0]).value5 instanceof Three) {
                                return fromZipper(__dict_Ord_115)(_736)(new Three((_259[0]).value0, (_259[0]).value1, (_259[0]).value2, new Two(_260, (_259[0]).value3, (_259[0]).value4, (_259[0]).value5.value0), (_259[0]).value5.value1, (_259[0]).value5.value2, new Two((_259[0]).value5.value3, (_259[0]).value5.value4, (_259[0]).value5.value5, (_259[0]).value5.value6)));
                            };
                        };
                        if (_259.length > 0) {
                            var _751 = _259.slice(1);
                            if (_259[0] instanceof ThreeRight && (_259[0]).value3 instanceof Three) {
                                return fromZipper(__dict_Ord_115)(_751)(new Three((_259[0]).value0, (_259[0]).value1, (_259[0]).value2, new Two((_259[0]).value3.value0, (_259[0]).value3.value1, (_259[0]).value3.value2, (_259[0]).value3.value3), (_259[0]).value3.value4, (_259[0]).value3.value5, new Two((_259[0]).value3.value6, (_259[0]).value4, (_259[0]).value5, _260)));
                            };
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var removeMaxNode = function (__copy___dict_Ord_116) {
            return function (__copy__262) {
                return function (__copy__263) {
                    var __dict_Ord_116 = __copy___dict_Ord_116;
                    var _262 = __copy__262;
                    var _263 = __copy__263;
                    tco: while (true) {
                        if (_263 instanceof Two && _263.value0 instanceof Leaf && _263.value3 instanceof Leaf) {
                            return up(__dict_Ord_116)(_262)(Leaf.value);
                        };
                        if (_263 instanceof Two) {
                            var __tco___dict_Ord_116 = __dict_Ord_116;
                            var __tco__262 = Prelude[":"](new TwoRight(_263.value0, _263.value1, _263.value2))(_262);
                            var __tco__263 = _263.value3;
                            __dict_Ord_116 = __tco___dict_Ord_116;
                            _262 = __tco__262;
                            _263 = __tco__263;
                            continue tco;
                        };
                        if (_263 instanceof Three && _263.value0 instanceof Leaf && _263.value3 instanceof Leaf && _263.value6 instanceof Leaf) {
                            return up(__dict_Ord_116)(Prelude[":"](new TwoRight(Leaf.value, _263.value1, _263.value2))(_262))(Leaf.value);
                        };
                        if (_263 instanceof Three) {
                            var __tco___dict_Ord_116 = __dict_Ord_116;
                            var __tco__262 = Prelude[":"](new ThreeRight(_263.value0, _263.value1, _263.value2, _263.value3, _263.value4, _263.value5))(_262);
                            var __tco__263 = _263.value6;
                            __dict_Ord_116 = __tco___dict_Ord_116;
                            _262 = __tco__262;
                            _263 = __tco__263;
                            continue tco;
                        };
                        throw new Error("Failed pattern match");
                    };
                };
            };
        };
        var maxNode = function (__copy___dict_Ord_117) {
            return function (__copy__261) {
                var __dict_Ord_117 = __copy___dict_Ord_117;
                var _261 = __copy__261;
                tco: while (true) {
                    if (_261 instanceof Two && _261.value3 instanceof Leaf) {
                        return {
                            key: _261.value1, 
                            value: _261.value2
                        };
                    };
                    if (_261 instanceof Two) {
                        var __tco___dict_Ord_117 = __dict_Ord_117;
                        var __tco__261 = _261.value3;
                        __dict_Ord_117 = __tco___dict_Ord_117;
                        _261 = __tco__261;
                        continue tco;
                    };
                    if (_261 instanceof Three && _261.value6 instanceof Leaf) {
                        return {
                            key: _261.value4, 
                            value: _261.value5
                        };
                    };
                    if (_261 instanceof Three) {
                        var __tco___dict_Ord_117 = __dict_Ord_117;
                        var __tco__261 = _261.value6;
                        __dict_Ord_117 = __tco___dict_Ord_117;
                        _261 = __tco__261;
                        continue tco;
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
        var down = function (__copy___dict_Ord_118) {
            return function (__copy__256) {
                return function (__copy__257) {
                    return function (__copy__258) {
                        var __dict_Ord_118 = __copy___dict_Ord_118;
                        var _256 = __copy__256;
                        var _257 = __copy__257;
                        var _258 = __copy__258;
                        tco: while (true) {
                            if (_258 instanceof Leaf) {
                                return fromZipper(__dict_Ord_118)(_256)(Leaf.value);
                            };
                            if (_258 instanceof Two && _258.value0 instanceof Leaf && _258.value3 instanceof Leaf && Prelude["=="](__dict_Ord_118["__superclass_Prelude.Eq_0"]({}))(_257)(_258.value1)) {
                                return up(__dict_Ord_118)(_256)(Leaf.value);
                            };
                            if (_258 instanceof Two && Prelude["=="](__dict_Ord_118["__superclass_Prelude.Eq_0"]({}))(_257)(_258.value1)) {
                                var max = maxNode(__dict_Ord_118)(_258.value0);
                                return removeMaxNode(__dict_Ord_118)(Prelude[":"](new TwoLeft(max.key, max.value, _258.value3))(_256))(_258.value0);
                            };
                            if (_258 instanceof Two && Prelude["<"](__dict_Ord_118)(_257)(_258.value1)) {
                                var __tco___dict_Ord_118 = __dict_Ord_118;
                                var __tco__256 = Prelude[":"](new TwoLeft(_258.value1, _258.value2, _258.value3))(_256);
                                var __tco__257 = _257;
                                var __tco__258 = _258.value0;
                                __dict_Ord_118 = __tco___dict_Ord_118;
                                _256 = __tco__256;
                                _257 = __tco__257;
                                _258 = __tco__258;
                                continue tco;
                            };
                            if (_258 instanceof Two) {
                                var __tco___dict_Ord_118 = __dict_Ord_118;
                                var __tco__256 = Prelude[":"](new TwoRight(_258.value0, _258.value1, _258.value2))(_256);
                                var __tco__257 = _257;
                                var __tco__258 = _258.value3;
                                __dict_Ord_118 = __tco___dict_Ord_118;
                                _256 = __tco__256;
                                _257 = __tco__257;
                                _258 = __tco__258;
                                continue tco;
                            };
                            if (_258 instanceof Three && _258.value0 instanceof Leaf && _258.value3 instanceof Leaf && _258.value6 instanceof Leaf && Prelude["=="](__dict_Ord_118["__superclass_Prelude.Eq_0"]({}))(_257)(_258.value1)) {
                                return fromZipper(__dict_Ord_118)(_256)(new Two(Leaf.value, _258.value4, _258.value5, Leaf.value));
                            };
                            if (_258 instanceof Three && _258.value0 instanceof Leaf && _258.value3 instanceof Leaf && _258.value6 instanceof Leaf && Prelude["=="](__dict_Ord_118["__superclass_Prelude.Eq_0"]({}))(_257)(_258.value4)) {
                                return fromZipper(__dict_Ord_118)(_256)(new Two(Leaf.value, _258.value1, _258.value2, Leaf.value));
                            };
                            if (_258 instanceof Three && Prelude["=="](__dict_Ord_118["__superclass_Prelude.Eq_0"]({}))(_257)(_258.value1)) {
                                var max = maxNode(__dict_Ord_118)(_258.value0);
                                return removeMaxNode(__dict_Ord_118)(Prelude[":"](new ThreeLeft(max.key, max.value, _258.value3, _258.value4, _258.value5, _258.value6))(_256))(_258.value0);
                            };
                            if (_258 instanceof Three && Prelude["=="](__dict_Ord_118["__superclass_Prelude.Eq_0"]({}))(_257)(_258.value4)) {
                                var max = maxNode(__dict_Ord_118)(_258.value3);
                                return removeMaxNode(__dict_Ord_118)(Prelude[":"](new ThreeMiddle(_258.value0, _258.value1, _258.value2, max.key, max.value, _258.value6))(_256))(_258.value3);
                            };
                            if (_258 instanceof Three && Prelude["<"](__dict_Ord_118)(_257)(_258.value1)) {
                                var __tco___dict_Ord_118 = __dict_Ord_118;
                                var __tco__256 = Prelude[":"](new ThreeLeft(_258.value1, _258.value2, _258.value3, _258.value4, _258.value5, _258.value6))(_256);
                                var __tco__257 = _257;
                                var __tco__258 = _258.value0;
                                __dict_Ord_118 = __tco___dict_Ord_118;
                                _256 = __tco__256;
                                _257 = __tco__257;
                                _258 = __tco__258;
                                continue tco;
                            };
                            if (_258 instanceof Three && Prelude["<"](__dict_Ord_118)(_258.value1)(_257) && Prelude["<"](__dict_Ord_118)(_257)(_258.value4)) {
                                var __tco___dict_Ord_118 = __dict_Ord_118;
                                var __tco__256 = Prelude[":"](new ThreeMiddle(_258.value0, _258.value1, _258.value2, _258.value4, _258.value5, _258.value6))(_256);
                                var __tco__257 = _257;
                                var __tco__258 = _258.value3;
                                __dict_Ord_118 = __tco___dict_Ord_118;
                                _256 = __tco__256;
                                _257 = __tco__257;
                                _258 = __tco__258;
                                continue tco;
                            };
                            if (_258 instanceof Three) {
                                var __tco___dict_Ord_118 = __dict_Ord_118;
                                var __tco__256 = Prelude[":"](new ThreeRight(_258.value0, _258.value1, _258.value2, _258.value3, _258.value4, _258.value5))(_256);
                                var __tco__257 = _257;
                                var __tco__258 = _258.value6;
                                __dict_Ord_118 = __tco___dict_Ord_118;
                                _256 = __tco__256;
                                _257 = __tco__257;
                                _258 = __tco__258;
                                continue tco;
                            };
                            throw new Error("Failed pattern match");
                        };
                    };
                };
            };
        };
        return down(__dict_Ord_114)([  ]);
    };
    var alter = function (__dict_Ord_119) {
        return function (f) {
            return function (k) {
                return function (m) {
                    var _880 = f(lookup(__dict_Ord_119)(k)(m));
                    if (_880 instanceof Data_Maybe.Nothing) {
                        return $$delete(__dict_Ord_119)(k)(m);
                    };
                    if (_880 instanceof Data_Maybe.Just) {
                        return insert(__dict_Ord_119)(k)(_880.value0)(m);
                    };
                    throw new Error("Failed pattern match");
                };
            };
        };
    };
    return {
        alter: alter, 
        "delete": $$delete, 
        toList: toList, 
        lookup: lookup, 
        insert: insert, 
        empty: empty
    };
})();
var PS = PS || {};
PS.Data_Trie = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Map = PS.Data_Map;
    var Data_String = PS.Data_String;
    function Trie(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Trie.create = function (value0) {
        return function (value1) {
            return new Trie(value0, value1);
        };
    };
    var toArray = (function () {
        var go = function (_266) {
            return function (_267) {
                return Prelude["<>"](Data_Array.semigroupArray({}))(Data_Maybe.maybe([  ])(function (a$prime) {
                    return [ new Data_Tuple.Tuple(_266, a$prime) ];
                })(_267.value0))(Data_Array.concatMap(function (_264) {
                    return go(_266 + _264.value0)(_264.value1);
                })(Data_Map.toList(_267.value1)));
            };
        };
        return go("");
    })();
    var lookupAll = function (s) {
        var go = function (_270) {
            return function (_271) {
                if (_270 >= Data_String.length(s)) {
                    return new Data_Maybe.Just(_271);
                };
                return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Map.lookup(Prelude.ordString({}))(Data_String.charAt(_270)(s))(_271.value1))(function (_5) {
                    return go(_270 + 1)(_5);
                });
            };
        };
        return go(0);
    };
    var empty = new Trie(Data_Maybe.Nothing.value, Data_Map.empty);
    var insertWith = function (f) {
        return function (s) {
            var go = function (_268) {
                return function (_269) {
                    if (_268 >= Data_String.length(s)) {
                        return new Trie(new Data_Maybe.Just(f(_269.value0)), _269.value1);
                    };
                    return new Trie(_269.value0, Data_Map.alter(Prelude.ordString({}))(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe.Just.create)(Prelude["<<<"](Prelude.semigroupoidArr({}))(go(_268 + 1))(Data_Maybe.fromMaybe(empty))))(Data_String.charAt(_268)(s))(_269.value1));
                };
            };
            return go(0);
        };
    };
    return {
        Trie: Trie, 
        lookupAll: lookupAll, 
        insertWith: insertWith, 
        empty: empty, 
        toArray: toArray
    };
})();
var PS = PS || {};
PS.Data_Traversable = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Array = PS.Data_Array;
    var Data_Foldable = PS.Data_Foldable;
    function Traversable(__superclass_Data$dotFoldable$dotFoldable_1, __superclass_Prelude$dotFunctor_0, sequence, traverse) {
        this["__superclass_Data.Foldable.Foldable_1"] = __superclass_Data$dotFoldable$dotFoldable_1;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
        this.sequence = sequence;
        this.traverse = traverse;
    };
    var traverse = function (dict) {
        return dict.traverse;
    };
    var sequence = function (dict) {
        return dict.sequence;
    };
    var traversableArray = function (_) {
        return new Traversable(function (__1) {
            return Data_Foldable.foldableArray({});
        }, function (__1) {
            return Data_Array.functorArray({});
        }, function (__dict_Applicative_139) {
            return function (_289) {
                if (_289.length === 0) {
                    return Prelude.pure(__dict_Applicative_139)([  ]);
                };
                if (_289.length > 0) {
                    var _904 = _289.slice(1);
                    return Prelude["<*>"](__dict_Applicative_139["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_139["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_289[0]))(sequence(traversableArray({}))(__dict_Applicative_139)(_904));
                };
                throw new Error("Failed pattern match");
            };
        }, function (__dict_Applicative_138) {
            return function (_287) {
                return function (_288) {
                    if (_288.length === 0) {
                        return Prelude.pure(__dict_Applicative_138)([  ]);
                    };
                    if (_288.length > 0) {
                        var _908 = _288.slice(1);
                        return Prelude["<*>"](__dict_Applicative_138["__superclass_Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_138["__superclass_Prelude.Apply_0"]({}))["__superclass_Prelude.Functor_0"]({}))(Prelude[":"])(_287(_288[0])))(traverse(traversableArray({}))(__dict_Applicative_138)(_287)(_908));
                    };
                    throw new Error("Failed pattern match");
                };
            };
        });
    };
    var $$for = function (__dict_Applicative_141) {
        return function (__dict_Traversable_142) {
            return function (x) {
                return function (f) {
                    return traverse(__dict_Traversable_142)(__dict_Applicative_141)(f)(x);
                };
            };
        };
    };
    return {
        Traversable: Traversable, 
        "for": $$for, 
        sequence: sequence, 
        traverse: traverse, 
        traversableArray: traversableArray
    };
})();
var PS = PS || {};
PS.Data_Foreign = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Data_Either = PS.Data_Either;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Traversable = PS.Data_Traversable;
    var Data_Array = PS.Data_Array;
    function ForeignParser(value0) {
        this.value0 = value0;
    };
    ForeignParser.create = function (value0) {
        return new ForeignParser(value0);
    };
    function ReadForeign(read) {
        this.read = read;
    };
    function fromStringImpl(left, right, str) {   try {     return right(JSON.parse(str));   } catch (e) {     return left(e.toString());   } };
    function readPrimTypeImpl(left, right, typeName, value) {   if (toString.call(value) == '[object ' + typeName + ']') {     return right(value);  }   return left('Value is not a ' + typeName + ''); };
    function readPropImpl(k, obj) {     return obj == undefined ? undefined : obj[k];};
    var readPrimType = function (ty) {
        return function (x) {
            return readPrimTypeImpl(Data_Either.Left.create, Data_Either.Right.create, ty, x);
        };
    };
    var readString = function (_) {
        return new ReadForeign(ForeignParser.create(readPrimType("String")));
    };
    var read = function (dict) {
        return dict.read;
    };
    var parseForeign = function (_302) {
        return function (_303) {
            return _302.value0(_303);
        };
    };
    var functorForeignParser = function (_) {
        return new Prelude.Functor(function (_304) {
            return function (_305) {
                return new ForeignParser(function (x) {
                    return Prelude["<$>"](Data_Either.functorEither({}))(_304)(_305.value0(x));
                });
            };
        });
    };
    var fromString = function (s) {
        return fromStringImpl(Data_Either.Left.create, Data_Either.Right.create, s);
    };
    var parseJSON = function (__dict_ReadForeign_147) {
        return function (json) {
            return Prelude[">>="](Data_Either.bindEither({}))(fromString(json))(parseForeign(read(__dict_ReadForeign_147)));
        };
    };
    var applyForeignParser = function (_) {
        return new Prelude.Apply(function (_308) {
            return function (_309) {
                return new ForeignParser(function (x) {
                    var _917 = _308.value0(x);
                    if (_917 instanceof Data_Either.Left) {
                        return new Data_Either.Left(_917.value0);
                    };
                    if (_917 instanceof Data_Either.Right) {
                        return Prelude["<$>"](Data_Either.functorEither({}))(_917.value0)(_309.value0(x));
                    };
                    throw new Error("Failed pattern match");
                });
            };
        }, function (__1) {
            return functorForeignParser({});
        });
    };
    var bindForeignParser = function (_) {
        return new Prelude.Bind(function (_306) {
            return function (_307) {
                return new ForeignParser(function (x) {
                    var _924 = _306.value0(x);
                    if (_924 instanceof Data_Either.Left) {
                        return new Data_Either.Left(_924.value0);
                    };
                    if (_924 instanceof Data_Either.Right) {
                        return parseForeign(_307(_924.value0))(x);
                    };
                    throw new Error("Failed pattern match");
                });
            };
        }, function (__1) {
            return applyForeignParser({});
        });
    };
    var prop = function (__dict_ReadForeign_143) {
        return function (p) {
            return Prelude[">>="](bindForeignParser({}))(new ForeignParser(function (x) {
                return Data_Either.Right.create(readPropImpl$prime(p)(x));
            }))(function (x) {
                return new ForeignParser(function (_) {
                    var _928 = parseForeign(read(__dict_ReadForeign_143))(x);
                    if (_928 instanceof Data_Either.Right) {
                        return new Data_Either.Right(_928.value0);
                    };
                    if (_928 instanceof Data_Either.Left) {
                        return Data_Either.Left.create("Error reading property '" + p + "':\n" + _928.value0);
                    };
                    throw new Error("Failed pattern match");
                });
            });
        };
    };
    var readPropImpl$prime = function (prop_1) {
        return function (x) {
            return readPropImpl(prop_1, x);
        };
    };
    var readArray = function (__dict_ReadForeign_144) {
        return new ReadForeign((function () {
            var arrayItem = function (_310) {
                var _932 = parseForeign(read(__dict_ReadForeign_144))(_310.value1);
                if (_932 instanceof Data_Either.Right) {
                    return new Data_Either.Right(_932.value0);
                };
                if (_932 instanceof Data_Either.Left) {
                    return Data_Either.Left.create("Error reading item at index " + Prelude.show(Prelude.showNumber({}))(_310.value0) + ":\n" + _932.value0);
                };
                throw new Error("Failed pattern match");
            };
            return Prelude[">>="](bindForeignParser({}))(ForeignParser.create(readPrimType("Array")))(function (xs) {
                return new ForeignParser(function (_) {
                    return Data_Traversable.traverse(Data_Traversable.traversableArray({}))(Data_Either.applicativeEither({}))(arrayItem)(Data_Tuple.zip(Data_Array.range(0)(Data_Array.length(xs)))(xs));
                });
            });
        })());
    };
    return {
        ForeignParser: ForeignParser, 
        ReadForeign: ReadForeign, 
        prop: prop, 
        read: read, 
        parseJSON: parseJSON, 
        parseForeign: parseForeign, 
        functorForeignParser: functorForeignParser, 
        bindForeignParser: bindForeignParser, 
        applyForeignParser: applyForeignParser, 
        readString: readString, 
        readArray: readArray
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_DOM = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Function = PS.Data_Function;
    var Data_Maybe = PS.Data_Maybe;
    function createElement(name) {  return function() {    return document.createElement(name);  };};
    function querySelectorImpl(r, f, s) {  return function() {    var result = document.querySelector(s);    return result ? f(result) : r;  };};
    function appendChild(child) {  return function(node) {    return function() {      node.appendChild(child);      return node;    };  };};
    function setText(text) {  return function(node) {    return function() {      node.textContent = text;      return node;    };  };};
    function getValue(node) {  return function() {    return node.value;  };};
    function setInnerHTML(html) {  return function(node) {    return function() {      node.innerHTML = html;      return node;    };  };};
    function addEventListener(name) {  return function(handler) {    return function(node) {      return function() {        node.addEventListener(name, function(e) {          handler();        });      };    };  };};
    var querySelector = function (s) {
        return querySelectorImpl(Data_Maybe.Nothing.value, Data_Maybe.Just.create, s);
    };
    return {
        addEventListener: addEventListener, 
        setInnerHTML: setInnerHTML, 
        getValue: getValue, 
        setText: setText, 
        appendChild: appendChild, 
        querySelector: querySelector, 
        querySelectorImpl: querySelectorImpl, 
        createElement: createElement
    };
})();
var PS = PS || {};
PS.Main = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Maybe = PS.Data_Maybe;
    var Data_Trie = PS.Data_Trie;
    var Data_String = PS.Data_String;
    var Data_Array = PS.Data_Array;
    var Data_Tuple = PS.Data_Tuple;
    var Data_Foreign = PS.Data_Foreign;
    var Data_Foldable = PS.Data_Foldable;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Eff_DOM = PS.Control_Monad_Eff_DOM;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Eff_AJAX = PS.Control_Monad_Eff_AJAX;
    var Data_Traversable = PS.Data_Traversable;
    function Entry(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Entry.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Entry(value0, value1, value2);
            };
        };
    };
    function error(msg) {  throw new Error(msg);};
    var runSearch = function (_329) {
        return function (_330) {
            if (_330 === "") {
                return Data_Maybe.Nothing.value;
            };
            return Prelude[">>="](Data_Maybe.bindMaybe({}))(Data_Trie.lookupAll(Data_String.toLower(_330))(_329))(function (_25) {
                var arr = Prelude["<$>"](Data_Array.functorArray({}))(Data_Tuple.snd)(Data_Trie.toArray(_25));
                return Prelude["return"](Data_Maybe.monadMaybe({}))(Data_Array.concat(arr));
            });
        };
    };
    var readForeignEntry = function (_) {
        return new Data_Foreign.ReadForeign(Prelude["<*>"](Data_Foreign.applyForeignParser({}))(Prelude["<*>"](Data_Foreign.applyForeignParser({}))(Prelude["<$>"](Data_Foreign.functorForeignParser({}))(Entry.create)(Data_Foreign.prop(Data_Foreign.readString({}))("module")))(Data_Foreign.prop(Data_Foreign.readString({}))("name")))(Data_Foreign.prop(Data_Foreign.readString({}))("detail")));
    };
    var insertEntry = function (_331) {
        return function (_332) {
            var suffixesOf = function (__copy__335) {
                return function (__copy__336) {
                    var _335 = __copy__335;
                    var _336 = __copy__336;
                    tco: while (true) {
                        if (_335 === "") {
                            return _336;
                        };
                        var __tco__335 = Data_String.drop(1)(_335);
                        var __tco__336 = Prelude[":"](_335)(_336);
                        _335 = __tco__335;
                        _336 = __tco__336;
                        continue tco;
                    };
                };
            };
            var cons = function (_333) {
                return function (_334) {
                    if (_334 instanceof Data_Maybe.Nothing) {
                        return [ _333 ];
                    };
                    if (_334 instanceof Data_Maybe.Just) {
                        return Prelude[":"](_333)(_334.value0);
                    };
                    throw new Error("Failed pattern match");
                };
            };
            var insertSuffix = function (trie_1) {
                return function (s) {
                    return Data_Trie.insertWith(cons(_332))(s)(trie_1);
                };
            };
            return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(insertSuffix)(_331)(suffixesOf(Data_String.toLower(_332.value1))([  ]));
        };
    };
    var getQuery = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_Eff_DOM.querySelector("#searchInput"))(function (_24) {
        if (_24 instanceof Data_Maybe.Just) {
            return function __do() {
                var _23 = Control_Monad_Eff_DOM.getValue(_24.value0)();
                var _952 = Data_Foreign.parseForeign(Data_Foreign.read(Data_Foreign.readString({})))(_23);
                if (_952 instanceof Data_Either.Right) {
                    return _952.value0;
                };
                if (_952 instanceof Data_Either.Left) {
                    return "";
                };
                throw new Error("Failed pattern match");
            };
        };
        throw new Error("Failed pattern match");
    });
    var search = function (trie) {
        return function __do() {
            var _28 = getQuery();
            var _27 = Control_Monad_Eff_DOM.querySelector("#searchResults")();
            return (function () {
                if (_27 instanceof Data_Maybe.Nothing) {
                    return error("#searchResults not found");
                };
                if (_27 instanceof Data_Maybe.Just) {
                    return Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_Eff_DOM.setInnerHTML("")(_27.value0))(function (_) {
                        var _959 = runSearch(trie)(_28);
                        if (_959 instanceof Data_Maybe.Nothing) {
                            return Prelude["return"](Control_Monad_Eff.monadEff({}))(Prelude.unit);
                        };
                        if (_959 instanceof Data_Maybe.Just) {
                            return Control_Monad_Eff.foreachE(Data_Array.take(20)(_959.value0))(function (_328) {
                                return function __do() {
                                    var _26 = Control_Monad_Eff_DOM.createElement("div")();
                                    var __1 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_Eff_DOM.createElement("h2"))(Control_Monad_Eff_DOM.setText(_328.value1)))(Prelude.flip(Control_Monad_Eff_DOM.appendChild)(_26))();
                                    var __2 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_Eff_DOM.createElement("div"))(Control_Monad_Eff_DOM.setText(_328.value0)))(Prelude.flip(Control_Monad_Eff_DOM.appendChild)(_26))();
                                    var __3 = Prelude[">>="](Control_Monad_Eff.bindEff({}))(Prelude[">>="](Control_Monad_Eff.bindEff({}))(Control_Monad_Eff_DOM.createElement("pre"))(Control_Monad_Eff_DOM.setText(_328.value2)))(Prelude.flip(Control_Monad_Eff_DOM.appendChild)(_26))();
                                    var __4 = Control_Monad_Eff_DOM.appendChild(_26)(_27.value0)();
                                    return Prelude.unit;
                                };
                            });
                        };
                        throw new Error("Failed pattern match");
                    });
                };
                throw new Error("Failed pattern match");
            })()();
        };
    };
    var buildTrie = function (json) {
        var _967 = Data_Foreign.parseJSON(Data_Foreign.readArray(readForeignEntry({})))(json);
        if (_967 instanceof Data_Either.Left) {
            return error(_967.value0);
        };
        if (_967 instanceof Data_Either.Right) {
            return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(insertEntry)(Data_Trie.empty)(_967.value0);
        };
        throw new Error("Failed pattern match");
    };
    var main = Control_Monad_Eff_AJAX.get("data.json")(function (json) {
        return function __do() {
            var _29 = Control_Monad_Eff_DOM.querySelector("#searchInput")();
            return (function () {
                if (_29 instanceof Data_Maybe.Nothing) {
                    return error("#searchInput not found");
                };
                if (_29 instanceof Data_Maybe.Just) {
                    var trie = buildTrie(json);
                    return function __do() {
                        Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))([ "keyup", "change" ])(function (evt) {
                            return Control_Monad_Eff_DOM.addEventListener(evt)(search(trie))(_29.value0);
                        })();
                        return Prelude.unit;
                    };
                };
                throw new Error("Failed pattern match");
            })()();
        };
    });
    return {
        Entry: Entry, 
        main: main, 
        buildTrie: buildTrie, 
        insertEntry: insertEntry, 
        error: error, 
        search: search, 
        runSearch: runSearch, 
        getQuery: getQuery, 
        readForeignEntry: readForeignEntry
    };
})();
PS.Main.main();