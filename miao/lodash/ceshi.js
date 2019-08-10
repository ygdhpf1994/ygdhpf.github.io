function differenceBy(ary , ...test) {
    let predicate
    if(!isArray(test[test.length - 1])){
        predicate = iteratee(test.pop())
    }else{
        predicate = null
    }
    var res = []
    var test1 = test.reduce((a , b) => a.concat(b) , []).map(it => predicate.call(null, it))
    for(var i = 0 ; i < ary.length ; i++){
        var p = predicate.call(null,ary[i])
        if(test1.includes(p)){
            res.push(p)
        }
    }
    return res
}
function isArray(ary){
    return Object.prototype.toString.call(ary) === '[object Array]'
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
console.log(differenceBy([{"x":2},{"x":1}],[{"x":1}],"x"))
console.log(differenceBy([2,1],[2,3],"it => it"))
console.log()
console.log()
console.log()
console.log()