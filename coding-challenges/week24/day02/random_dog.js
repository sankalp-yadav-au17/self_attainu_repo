const btn = document.getElementById("btn")
const display = document.getElementById("display")
const images = 'https://dog.ceo/api/breeds/image/random'

function fulfilled(response){
    display.src = response.message
    // console.log(response);

}

function rejected(){
    console.log("Request failed");
}


btn.addEventListener("click",()=>{
    const responsePromise = fetch(images)
    
    responsePromise.then(response => response.json()).then(fulfilled)

    responsePromise.catch(rejected)
})