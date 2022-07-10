var num = prompt("Number bol","1")
if( num == 1){
    console.log("Prime Number hai")
}

else{
    var count=0
    for (var i = 2; i <= num/2; i++){
       if (num % i == 0){
            count = 1;
            break;
        }

    }
    if (count == 0){
        console.log("Prime number hai")
    }
    else{
        console.log("NHi hai prime numeber")
    }
}