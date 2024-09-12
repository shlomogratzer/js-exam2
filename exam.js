

const Mission1 = (arr) =>{
    newArr = []
    arr.forEach((element) => {
        if(element% 2 === 0){
            newArr.push(element)
        }
    });
    return newArr
}


const Mission3 = (mtx) => {
    arr = []
    mtx.forEach((i) => {
        arr.push(...i)
    })
    return arr
}

const Mission5 = (keys, valwe) => {
    const obj = {};
    const arr1Length = keys.length;

    if(arr1Length <= valwe.length) {
        for (let i = 0; i < arr1Length; i++) {
            obj[keys[i]] = valwe[i];
        }
    }
    else {
        for(let i=0; i< valwe.length; i++){
            obj[keys[i]] = valwe[i];
        }
    }
    return obj;
}



function Mission6(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2;
}


module.exports = {
    Mission1,
    Mission3,
    Mission5,
    Mission6
}