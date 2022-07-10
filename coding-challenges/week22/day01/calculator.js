var submit_btn = document.getElementById("submit");
var element1 = document.getElementById("number_1").value;
var element2 = document.getElementById("number_2").value;
var ans = document.getElementById("answer");


submit_btn.addEventListener("click",function() {
    ans.innerText = Number(element1)+Number(element2)
})