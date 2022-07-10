const space = document.getElementById("space")
const res = document.getElementById("res")

space.addEventListener("input",async()=>{
    res.innerText = ""
    const my_fiter =await fetch("https://jsonplaceholder.typicode.com/todos")
    const list=await my_fiter.json()
    let tit = []
    // let id
    console.log(list)
    for (var i = 0; i<list.length; i++){
        let title1 = list[i].title
        let userid = list[i].userId
        if((title1.search(space.value) != -1)){
            tit.push(title1)
        }
    }
    if (tit.length == 0){
        res.innerText = 'No result found'
    }
    else{
        for (var j = 0; j<tit.length;j++){
            var line = document.createElement("div")
            line.innerText =tit[j]
            if (j % 2 == 0){
                line.style.backgroundColor += "grey"
                line.style.color += "white"
            }
            else{
                line.className = "bg-light"
            }
            res.appendChild(line)
            // res.innerText = tit
        }
    }
    
})