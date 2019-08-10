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
    function fill(ary, value, start = 0, end = ary.length){
        if(ary.length === 0 || !ary) return ary
        for( start; start < end; start++ ){
            ary[start] = value
        }
        return ary
    }
    function findIndex(ary, pre ,fromIdx = 0){
        var predicate = iteratee(pre)
        for(var i = fromIdx ; i < ary.length ; i++){
            if(predicate(ary[i], i , ary)) return i
        }
        return -1
    }
    function findLastIndex(ary, pre ,fromIdx = ary.length - 1){
        var predicate = iteratee(pre)
        for(var i = fromIdx ; i >= 0 ; i--){
            if(predicate(ary[i], i , ary)) return i
        }
        return -1
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
    function flatten(ary){
        return [].concat(...ary)
    }
    function flattenDeep(ary){
        for(var i = 0 ; i < ary.length ; i++){
            if(isArray(ary[i])){
                ary = flatten(ary)
                flattenDeep(ary)
            }
        }
        return ary
    }
    function flattenDepth(ary, depth = 1){
        ary = ary.slice(0)
        for(var i = 0 ; i < depth; i++){
            ary = flatten(ary)
        }
        return ary
    }
    function fromPairs(ary){
        var res = {}
        for(var i = 0 ; i < ary.length ; i++){
            res[ary[i][0]] = ary[i][1]
        }
        return res
    }
    function head(ary){
        return ary.length === 0 ? undefined : ary[0]
    }
    function toPairs(obj){
        var res = []
        var keyary = Object.keys(obj)
        for(var i = 0 ; i < keyary.length ; i++){
            res.push(keyary[i], obj[keyary[i]])
        }
        return res
    }
    function values(obj){
        return Object.values(obj)
    }
    function indexOf(ary, value, fromIndex = 0){
        for(var i = fromIndex ; i < ary.length ; i++){
            if(ary[i] === value) return i
        }
        return -1
    }
    function initial(ary){
        return ary.slice(0, ary.length - 1)
    }
    function intersection(...ary){
        return ary[0].filter(item => ary.every(item1 => item1.includes(item)))
    }
    function find(ary, pre ,fromIdx = 0){
        var p = findIndex(ary, pre ,fromIdx)
        if(p === -1){
            return undefined
        } else {
            return ary[p]
        }
    }
    function findLast(ary, pre ,fromIdx = ary.length - 1){
        var p = findLastIndex(ary, pre ,fromIdx)
        if(p === -1){
            return undefined
        } else {
            return ary[p]
        }
    }
    function join(ary, separator = ','){
        var res = '' + ary[0]
        for(var i = 1 ; i < ary.length ; i++){
            res += separator
            res += ary[i]
        }
        return res
    }
    function lastIndexOf(ary, val, fromIndex = ary.length -1){
        for(var i = fromIndex; i >= 0; i--){
            if(isEqual(ary[i], val)) return i
        }
        return -1
    }
    function remove(ary, val){
        return ary.filter(item => item !== val)
    }
    function pull(ary, ...val){
        ary = ary.slice(0)
        var values = val.slice(0)
        values.forEach(item =>{
            ary = remove(ary, item)
        })
        return ary
    }
    function reverse(ary){
        ary = ary || []
        for(var i = 0 ,len = ary.length; i < len / 2 ; i++){
            var temp = ary[i]
            ary[i] = ary[len - i - 1]
            ary[len - i - 1] = temp
        }
        return ary
    }
    function union(...ary){
        var res = []
        var a = ary.reduce((item1, item2) => item1.concat(item2),[])
        a.forEach(item =>{
            if(!res.includes(item)) res.push(item)
        })
        return res
    }
    function unionBy(...ary){
        ary = ary.slice()
        var predicate = ary.pop()
        var res = []
        var compare = []
        var a = ary.reduce((item1, item2) => item1.concat(item2),[])
        a.forEach(item =>{
            var temp = predicate(item)
            if(!compare.includes(temp)){
                compare.push(temp)
                res.push(item)
            }
        })
        return res
    }
    function SameValue(x, y){
        if(x === 0 && y === 0){
            return 1 / x === 1 / y
        }
        if(x !== x && y !== y){
            return true
        }
        return x === y
    }
    function uniq(ary){
        var res = []
        for(var i = 0 ; i < ary.length ; i++){
            if(!res.every(item => SameValue(ary[i],item))){
                res.push(ary[i])
            }
        }
        return res
    }
    function sortedIndex(ary, val){
        for(var i = 0 ; i < ary.length ; i++){
            if(ary[i] >= val) return i
        }
        return ary.length
    }
    function without(ary, ...val){
        var res = ary.slice(0)
        return pull(res, ...val)
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
        findIndex,
        findLastIndex,
        flatten,
        flattenDeep,
        flattenDepth,
        fromPairs,
        head,
        toPairs,
        values,
        indexOf,
        initial,
        intersection,
        find,
        findLast,
        join,
        lastIndexOf,
        remove,
        pull,
        without,
        reverse,
        sortedIndex,
        union,
        unionBy,
        SameValue,
        uniq,

    }
}();

        
