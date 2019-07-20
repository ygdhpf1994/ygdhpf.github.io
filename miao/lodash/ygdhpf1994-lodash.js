var ygdhpf1994 = {
    compact: function(ary) {
        return ary.filter(it => it)
    },
    chunk: function(ary,size = 1){
        var a = []
        while(ary.length !== 0){
            a.push(ary.splice(0,size))
        }
        return a
    },
    difference: function(ary,values){
        var res = []
        for(var i = 0 ; i < ary.length ; i ++){
            if(values.indexOf(ary[i]) === -1){
                res.push(ary[i])
            }
        }
        return res
    },
    differenceBy: function(ary , ...test) {
        
        var key = test[test.length - 1]
        var rest = test.slice(0,test.length - 1)
        if(typeof key === 'function'){
            rest.pop()
            var temp = []
            var p = temp.concat(...rest).map(key)
            var q = ary.map(key)
            return difference(q, p)
        } else if(typeof key === 'string'){
            rest.pop()
            var temp = []
            var p = temp.concat(...rest)
            return difference(ary , p)
        } else {
            return difference(ary,rest)
        }
    },
    
}

        
