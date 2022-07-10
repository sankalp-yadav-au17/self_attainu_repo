
 function isDivisible(num1, num2) {
    
    if (num2 === 0){
        return "err"
    }
    else if (num1 != 0 && num2 != 0){
        const calc = Math.floor(num1/num2)
        // console.log("app",calc);
        return calc
    }
    else if (num1>num2){
        return 1
    }
    else if (num1<num2){
        return 0
    }    
 }

 function isString (arr){
    //  console.log(arr);
    let Length = arr.length
    const newArr = []

    for(let i=0; i<Length; i++){

        for (let j=0;j<arr[i].length; j++){

            if (arr[i][j] === "S" || "s"){

                newArr.push(arr[i])
                
                arr.splice(i, 1)
                Length = arr.length

                i=0
                break
            }
        }
    }
    console.log(newArr);
    return newArr
 }



 
 module.exports = {isDivisible, isString}