function reverse(ary){
    ary = ary.slice()
    for(var i = 0 ,len = ary.length; i < len / 2 ; i++){
        var temp = ary[i]
        ary[i] = ary[len - i - 1]
        ary[len - i - 1] = temp
    }
    return ary
}
var a = [1,2,3,4,5,6]
reverse(a)
console.log(a)