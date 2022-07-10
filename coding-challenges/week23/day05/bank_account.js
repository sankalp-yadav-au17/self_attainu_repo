let submitbtn = document.getElementById("submit")
let acc_pass = document.getElementById("acc_pass")
let acc1 = document.getElementById("acc1")
let acc2 = document.getElementById("acc2")
let checkWid = document.getElementById("check&wid")
let check = document.getElementById("check")
let bal = document.getElementById("bal")
let transaction = document.getElementById("transaction")
let widthraw = document.getElementById("widthraw")
let confirm = document.getElementById("confirm")
let deduct = document.getElementById("deduct")
let baltext1 = document.getElementById("baltext1")
let baltext2 = document.getElementById("baltext2")



class Account{
    constructor(){
        this.number = 7890
        this.balance = 10
        this.max = 3
    }
    check(){
        if (acc1.value == this.number && acc2.value == this.number){
            acc_pass.classList.add("d-none")
            checkWid.classList.remove("d-none")
         }
         else if (this.max == 0){
             submitbtn.disabled = true
             acc1.disabled = true
             acc2.disabled = true
         }
         else{
             this.max --
             p1.innerText = `Warning: You have ${this.max} trial left`
             p2.innerText = "Account number you entered is incorrect"
         }
    }
    deposite(){

    }
    widthraw(){

    }
}

class Savings extends Account{
    constructor(){
        super()
        this.limit = 3
    }
    remaining(){
        this.limit --
        this.balance -= deduct.value
        if (this.balance < 0 ){
            baltext1.innerText = "Insufficient Fund"
            baltext2.innerText = ""
        }
        else{
            baltext1.innerText = "Remaining balance is:"
            baltext2.innerText = `₹ ${this.balance}`
        }
    }

    display(){
        checkWid.classList.add("d-none")
        transaction.classList.remove("d-none")
    }
}

class CheckBal extends Account{
    constructor(){
        super()
    }

    display(){
        checkWid.classList.add("d-none")
        bal.classList.remove("d-none")
    }

}



let myacc = new Account
let mycheckbal = new CheckBal
let mysavings = new Savings


check.addEventListener("click",function(){
    mycheckbal.display()
})
submitbtn.addEventListener("click",function(){
    myacc.check()
})

widthraw.addEventListener("click",function(){
    mysavings.display()
})

confirm.addEventListener("click",function(){
    mysavings.remaining()
})







// class Account{
//     bank_home(){        
//         if (acc.value == 8910 && pass.value == 7890){
//             submitbtn.onclick = function(){
//                 location.href = "http://127.0.0.1:5501/coding-challenges/week23/day05/user_info.html"
//             }
//         }
//         else if (count == 0){
//             submitbtn.disabled = true
//             acc.disabled = true
//             pass.disabled = true
//         }
//         else{
//             count --
//             p1.innerText = `Warning: You have ${count} trial left`
//             p2.innerText = "Account number or password you entered is incorrect"
//         }     
//     }

//     user_info(){
//         wid.href = "http://127.0.0.1:5501/coding-challenges/week23/day05/widthraw.html"  
//     }
//     balance(){
//         check_bal.onclick = function(){
//             location.href = "http://127.0.0.1:5501/coding-challenges/week23/day05/checkbal.html"
//         }
//     }
    
// }

// const myacc = new Account()
// let count = 3
// submitbtn.addEventListener("click",function(){
//     myacc.bank_home()
// })
// wid.addEventListener("click",function(){
//     myacc.user_info()
// })



// check_bal.addEventListener("click",function(){
//     myacc.balance()
// })
