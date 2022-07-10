const category = document.getElementById("category")
const cate_URL = "https://opentdb.com/api_category.php"
let html = ""
const submit_btn = document.getElementById("submit_btn")
const difficulty = document.getElementById("difficulty")
const type = document.getElementById("type")
const filter = document.getElementById("filter")
const questions_section = document.getElementById("questions_section")
const amt = document.getElementById("amount")
const question_text = document.getElementById("question_text")
const question_actual = document.getElementById("question_actual")
let count =0
const next_btn = document.getElementById("next_btn")

async function quiz (){
    const res = await fetch(cate_URL)
    const cate_data = await res.json()
    // console.log(cate_data.trivia_categories);
    cate_data.trivia_categories.map(item=>{
        return html += `<option value=${item.id}>${item.name}</option>`
    })
    console.log(html)
    category.innerHTML = html

    submit_btn.addEventListener("click",async()=>{
        filter.classList.add("d-none")
        questions_section.classList.remove("d-none")
        const question_url =await fetch(`https://opentdb.com/api.php?amount=1&category=${category.value}&difficulty=${difficulty.value.toLowerCase()}&type=${type.value.toLowerCase()}`)
        const question_array = await question_url.json()
        const arr = []

        question_text.innerText = `Question 1:`
        question_actual.innerText = `${question_array.results[0].question}`

        if (Array.isArray(question_array.results[0].incorrect_answers) == true){
            for (let i = 0; i<question_array.results[0].incorrect_answers.length; i++){
                arr.push(question_array.results[0].incorrect_answers[i])
            }
        }
        else{
            arr.push(question_array.results[0].incorrect_answer)
        }


        if (Array.isArray(question_array.results[0].correct_answers) == true){
            for (let i = 0; i<question_array.results[0].correct_answers.length; i++){
                arr.push(question_array.results[0].correct_answers[i])
            }
        }
        else{
            arr.push(question_array.results[0].correct_answer)
        }

        function randomArrayShuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
            return array;
          }
        randomArrayShuffle(arr); 
        html =""
        arr.map(item=>{
            return html += `<input class="abc" type="radio" name="hi" value="${item}">
                            <label for="">${item}</label><br>`
        })
        const options = document.getElementById("options")
        options.innerHTML = html
        const optionsarre =document.getElementsByClassName("abc")

        const wrong_right = document.getElementById("wrong_right")
        if (options.value == question_array.results[0].correct_answer){
            wrong_right.innerText = "Correct !!"
        }
        else{
            wrong_right.innerText = "Wrong !!"
        }
    })


    if(Number(count) == Number(amt.value)){
        next_btn.disabled = true;    }
    else{
        
        next_btn.addEventListener("click",async()=>{
            count+=1
            console.log(amt.value);
            console.log(count)
            filter.classList.add("d-none")
            questions_section.classList.remove("d-none")
            const question_url =await fetch(`https://opentdb.com/api.php?amount=1&category=${category.value}&difficulty=${difficulty.value.toLowerCase()}&type=${type.value.toLowerCase()}`)
            const question_array = await question_url.json()
            const arr = []
    
            question_text.innerText = `Question 1:`
            question_actual.innerText = `${question_array.results[0].question}`
    
            if (Array.isArray(question_array.results[0].incorrect_answers) == true){
                for (let i = 0; i<question_array.results[0].incorrect_answers.length; i++){
                    arr.push(question_array.results[0].incorrect_answers[i])
                }
            }
            else{
                arr.push(question_array.results[0].incorrect_answer)
            }
    
    
            if (Array.isArray(question_array.results[0].correct_answers) == true){
                for (let i = 0; i<question_array.results[0].correct_answers.length; i++){
                    arr.push(question_array.results[0].correct_answers[i])
                }
            }
            else{
                arr.push(question_array.results[0].correct_answer)
            }
    
            function randomArrayShuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex -= 1;
                  temporaryValue = array[currentIndex];
                  array[currentIndex] = array[randomIndex];
                  array[randomIndex] = temporaryValue;
                }
                return array;
              }
            randomArrayShuffle(arr); 
            html =""
            arr.map(item=>{
                return html += `<input type="radio" value="${item}">
                                <label for="">${item}</label><br>`
            })
            const options = document.getElementById("options")
            options.innerHTML = html
    
            const wrong_right = document.getElementById("wrong_right")
            if (options.value == question_array.results[0].correct_answer){
                wrong_right.innerText = "Correct !!"
            }
            else{
                wrong_right.innerText = "Wrong !!"
            }
        
        })
    }
    

}

quiz()


