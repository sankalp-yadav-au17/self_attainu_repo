let submitbtn = document.getElementById("submitbtn")
let inputstr = document.getElementById("inputstr")
let errormsg = document.getElementById("errormsg")
let dist = document.getElementById("dist")

submitbtn.addEventListener("click",()=>{
    dist.innerText = ""
    errormsg.innerText =""
    let arr1=[]
    let arr2=[]
    let count = 0
    for(var i = 0; i<inputstr.value.length;i++){
        if (inputstr.value[i]!=","){
            arr1.push(inputstr.value[i])
        }
        else if(inputstr.value[i]==","){
            break
        }
    }
    for(let j=i+1;j<inputstr.value.length;j++){
        arr2.push(inputstr.value[j])
    }
    console.log(arr1,arr2)
    for(var i =0; i<arr1.length; i++){
        if((arr1.length == arr2.length)&&(arr1[i]!==arr2[i])){
            count +=1
        }
    }
    console.log(count)
    if(arr1==0 || arr2==0){
        errormsg.innerText = "Please input two string of equal lenght, seperated by comma"
    }
    else{
        dist.innerText = `${count}`
    }
})