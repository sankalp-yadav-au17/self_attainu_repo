var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissor = document.getElementById("scissor")
var text = document.getElementById("text")
var computer = document.getElementById("computer")

rock.addEventListener("click",function(){
    computer.innerText = ""
    text.style.color = "black"
    text.innerText = "Rock !"

    setTimeout(function(){
        text.innerText = "Paper !!"

        setTimeout(function(){
            text.innerText = "Scissor !!!"

            setTimeout(function(){
                var x = Math.floor((Math.random()*3)+1)
                console.log(x)
                if (x == 1){
                    computer.innerText = "ROCK !!"
                    computer.style.color = "brown"
                    text.innerText = "six of one and half a dozen of the other ! (boleto tie)"
                    text.style.color = "blue"
                }
                else if (x == 2){
                    computer.innerText = "PAPER !!"
                    computer.style.color = "grey"
                    text.innerText = "Pehli fursat mei nikal !"
                    text.style.color = "red"
                }
                else{
                    computer.innerText = "SCISSOR !!"
                    computer.style.color = "green"
                    text.innerText = "YEAA BOY !"
                    text.style.color = "green"
                }
            },1000);

        },1000);

    },1000);
  
})


paper.addEventListener("click",function(){
    computer.innerText = ""
    text.style.color = "black"
    text.innerText = "Rock !"

    setTimeout(function(){
        text.innerText = "Paper !!"

        setTimeout(function(){
            text.innerText = "Scissor !!!"

            setTimeout(function(){
                var x = Math.floor((Math.random()*3)+1)
                console.log(x)
                if (x == 1){
                    computer.innerText = "ROCK !!"
                    computer.style.color = "brown"
                    text.innerText = "YEAA BOY !"
                    text.style.color = "green"                   
                }
                else if (x == 2){
                    computer.innerText = "PAPER !!"
                    computer.style.color = "grey"
                    text.innerText = "six of one and half a dozen of the other ! (boleto tie)"
                    text.style.color = "blue"
                }
                else if (x == 3){
                    computer.innerText = "SCISSOR !!"
                    computer.style.color = "green"
                    text.innerText = "Pehli fursat mei nikal !"
                    text.style.color = "red"
                }
            },1000);

        },1000);

    },1000);
  
})


scissor.addEventListener("click",function(){
    computer.innerText = ""
    text.style.color = "black"
    text.innerText = "Rock !"

    setTimeout(function(){
        text.innerText = "Paper !!"

        setTimeout(function(){
            text.innerText = "Scissor !!!"

            setTimeout(function(){
                var x = Math.floor((Math.random()*3)+1)
                console.log(x)
                if (x == 1){
                    computer.innerText = "ROCK !!"
                    computer.style.color = "brown"
                    text.innerText = "Pehli fursat mei nikal !"
                    text.style.color = "red"                     
                }
                else if (x == 2){
                    computer.innerText = "PAPER !!"
                    computer.style.color = "grey"
                    text.innerText = "YEAA BOY !"
                    text.style.color = "green"
                }
                else if (x == 3){
                    computer.innerText = "SCISSOR !!"
                    computer.style.color = "green"
                    text.innerText = "six of one and half a dozen of the other ! (boleto tie)"
                    text.style.color = "blue"
                }
            },1000);

        },1000);

    },1000);
  
})