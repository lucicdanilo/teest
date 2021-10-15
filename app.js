const sum = function(a,b){
    return a+b;
}

const memo = function(fnToMemo){
    const cache = {}
    return function(...args){
        const propToCheck = constructPropFromArgs(fnToMemo, args);
        if(!cache[propToCheck]) {
            cache[propToCheck] = fnToMemo(...args);
        }else{
            console.log('From Cache');
        }
        return cache[propToCheck];
    }
}

const constructPropFromArgs = function (fnToMemo, args) {
    let propToCheck = [];
    propToCheck1 = propToCheck.concat(fnToMemo.name, args);
    let argsMod = [args[1], args[0]];
    propToCheck2 = propToCheck.concat(fnToMemo.name, argsMod);
    
    propToCheck1.push(propToCheck2);

    console.log(propToCheck1);

    return propToCheck1.join('|');
}

const memSummation = memo(sum, 2);

console.log(memSummation(5, 1));
console.log(memSummation(8, 5));
console.log(memSummation(3, 1));
console.log(memSummation(8, 2));



