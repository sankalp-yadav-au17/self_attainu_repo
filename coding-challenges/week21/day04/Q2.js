var strng = prompt("word daal", "malayalam")
var word = ''
var len = strng.length
for (i in strng){
    word =word + strng[(len-1)-i];
}
console.log(word)
if (strng == word){
    console.log("Palindrom")
}
else{
    console.log("Not Palindrom")
}