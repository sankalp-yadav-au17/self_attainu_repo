var num = prompt("number daal","1");
var sum =0;
for (var i in num){
    sum = sum + num[i]**3
}
if (sum == num){
    console.log("Armstrong")
}
else{
    console.log("Not")
}