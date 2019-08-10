var ygdhpf1994 = function(){
    function compact(ary) {
        return ary.filter(it => it)
    }
    function chunk(ary,size = 1){
        var a = []
        while(ary.length !== 0){
            a.push(ary.splice(0,size))
        }
        return a
    }
    function difference(ary,...values){
        var res = []
        
        var rest = values.reduce((item1, item2) => item1.concat(item2),[])
        for(var i = 0 ; i < ary.length ; i ++){
            if(rest.indexOf(ary[i]) === -1){
                res.push(ary[i])
            }
        }
        return res
    }
    function differenceBy(ary , ...test) {
        let predicate
        if(!isArray(test[test.length - 1])){
            predicate = iteratee(test.pop())
        }else{
            predicate = identity
        }
        var res = []
        var test1 = test.reduce((a , b) => a.concat(b) , []).map(it => predicate(it))
        for(var i = 0 ; i < ary.length ; i++){
            var p = predicate.call(null,ary[i])
            if(!test1.includes(p)){
                res.push(ary[i])
            }
        }
        return res
    }
    function identity(...arg) {
        return arg[0];
      }
    function drop(ary, n = 1){
        return ary.slice(n)
    }
    function dropRight(ary, n = 1){
        
        return ary.length > n ? ary.slice(0 , n === 0 ? ary.length : ary.length - n) : []
    }
    function dropRightWhile(ary,pre){
        var predicate = iteratee(pre)
        var res = ary.slice(0)
        while(predicate(last(res))){
            res.pop()
        }
        return res
    }
    function dropWhile(ary, pre){
        return dropRightWhile(ary.reverse(), pre).reverse()
    }
    function fill(ary, value, start = 0, end = ary.length - 1){
        if(ary.length === 0 || !ary) return ary
        for( start; start < end; start++ ){
            ary[start] = value
        }
        return ary
    }
    function iteratee(val) {
        if (isString(val)) {
          return property(val)
        }
        if (isArray(val)) {
          return matchesProperty(val[0], val[1])
        }
        if (isObjectLike(val)) {
          return matches(val)
        }
        return val
    }
    function isArray(ary){
        return Object.prototype.toString.call(ary) === '[object Array]'
    }
    function isString(ary){
        return Object.prototype.toString.call(ary) === "[object String]"
    }
    function isObject(ary){
        var type = typeof ary
        return ary !== null && (type === 'object' || type === 'function')
    }
    function isObjectLike(ary){
        return typeof ary == 'object' && ary !== null
    }
    function isNumber(val){
        return Object.prototype.toString.call(val) === '[object Number]'
    }
    function isFunction(val){
        return typeof val === 'function'
    }
    function property(propName) {
        return function (obj) {
          return get(obj, propName)
        }
    }
    function matchesProperty(path, val) {
        return function (obj) {
          return isEqual(get(obj, path), val);
        }
    }
    function matches(val){
        
        return function (obj) {
            return isMatch(obj, val);
        }
        
    }
    function isEqual(value, other){
        if(value === other){
            return true
        }
        if(isNaN(value) && isNaN(other)){
            return true
        }
        if (isObjectLike(value) && isObjectLike(other)) {
            if(value.length !== other.length){
                return false
            }
            for (let k in value) {
              if (!isEqual(value[k], other[k])) {
                return false;
              }
            }
            return true;
        }
        return false
    }
    function isNaN(val){
        return isNumber(val) && val !== +val
    }
    function isMatch(object, source){
        if (object === source) return true
        for (let key in source) {
            if (!(key in object && isEqual(object[key], source[key]))) return false
        }   
        return true
    }
    function get(obj, path, defaultVal) {
        if (isString(path)) {
          path = path.split(/\.|\[|\]/g).filter(item => item !== "")
        }
        for (let i = 0; i < path.length; i++) {
          if (obj == undefined) {
            return defaultVal
          }
          obj = obj[path[i]]
        }
        return obj
    }
    function last(ary){
        return ary[ary.length - 1]
    }
    return {
        compact,
        chunk,
        difference,
        differenceBy,
        dropRightWhile,
        drop,
        dropRight,
        fill,
        isArray,
        isString,
        isObject,
        isObjectLike,
        isNumber,
        isFunction,
        iteratee,
        identity,
        property,
        matchesProperty,
        isNaN,
        matches,
        isEqual,
        isMatch,
        get,
        last,
        dropWhile,
    }
}();

        
