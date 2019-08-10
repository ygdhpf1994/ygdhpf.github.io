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
    difference: function(ary,...values){
        var res = []
        
        var rest = values.reduce((item1, item2) => item1.concat(item2),[])
        for(var i = 0 ; i < ary.length ; i ++){
            if(rest.indexOf(ary[i]) === -1){
                res.push(ary[i])
            }
        }
        return res
    },
    differenceBy: function(ary , ...test) {
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
    },
    drop: function(ary, n = 1){
        return ary.slice(n)
    },
    dropRight:function(ary, n = 1){
        
        return ary.length > n ? ary.slice(0 , n === 0 ? ary.length - 1 : ary.length - n) : []
    },
    dropRightWhile: function(ary,pre){
        if(typeof pre === 'function'){
            var p = -1
            for(var i = 0 ; i < ary.length ; i++){
                if(!pre(ary[i])){
                    p = i
                    break
                }
            }
        } else if(typeof pre === 'Object'){
            if(typeof pre[0] === 'string'){
                var p = -1
                for(var i = 0; i< ary.length; i++){
                    if(ary[i][pre[0]] !== pre[1]){
                        p = i
                        break
                    }
                }
            } else {
                var p = -1
                for(var i = 0 ; i < ary.length ; i++){
                    var Is = 0
                    for(let key in pre){
                        if(ary[i][key] !== pre[key]){
                            Is = 1
                        }
                    }
                    if(Is = 0) {
                        p = i
                        break
                    }
                }
            }
        } else if(typeof pre === 'string'){
            var p = -1
            for(var i = 0; i < ary.length; i++){
                if(!ary[i][pre]){
                    p = i
                    break
                }
            }
        }
        return ary.slice(0, p)
    },
    fill: function(ary, value, start = 0, end = ary.length - 1){
        if(ary.length === 0 || !ary) return ary
        for( start; start <= end; start++ ){
            ary[start] = value
        }
        return ary
    },
    isArray:function(ary){
        return Object.prototype.toString.call(ary) === '[object Array]'
    },
}

        
