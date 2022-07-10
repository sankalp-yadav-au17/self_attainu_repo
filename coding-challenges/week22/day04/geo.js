var findlocation = document.getElementById("find")
var lati = document.getElementById("lat")
var longi = document.getElementById("long")
var goo = document.getElementById("goo")


function success(pos){
    console.log("Ye le")
    console.log(pos.coords.latitude)
    console.log(pos.coords.longitude)
    lati.innerText = pos.coords.latitude
    longi.innerText = pos.coords.longitude
    
    var goo_btn = document.createElement("a")
    goo_btn.href = "https://www.google.com/maps/@" + pos.coords.latitude + "," + pos.coords.longitude + ",20z"
    goo_btn.innerText = "View on Google Maps"
    goo_btn.style.background = "blue"
    goo_btn.style.color = "white"
    goo_btn.style.padding = "10px"
    goo_btn.style.textDecoration = "none"


    goo.appendChild(goo_btn);

}

function error(){
    console.log("Bhak")
}

findlocation.addEventListener('click',function(){
    navigator.geolocation.getCurrentPosition(success, error)
})