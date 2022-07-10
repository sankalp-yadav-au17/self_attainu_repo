var buttongen = document.getElementById("buttongen")
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")

buttongen.addEventListener("click",function(){
    // console.log(box1)
    box1.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16))
    box2.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16))
    box3.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16))
    box4.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16))
    box5.style.backgroundColor = "#" + (Math.floor(Math.random()*16777215).toString(16))

})