function display(data){
    questionsDiv.innerHTML += `<h4 class="quizquestion quiztitle"> Question:</h5>`
    questionsDiv.innerHTML += `<h4 class="quizquestion quiztitle"> Correct Answer:</h5>`
    questionsDiv.innerHTML += `<h4 class="quizquestion quiztitle"> Incorrect Answers:</h5>`

    for (element of data.results){
        questionsDiv.innerHTML += `<h6 class="quizquestion"> ${element.question} </h6>`
        questionsDiv.innerHTML += `<h6 class="quizcorrect">${element.correct_answer} </h6>`
        questionsDiv.innerHTML += `<h6 class="quizwrong">${element.incorrect_answers} </h6>`
        questionsDiv.style.color = "white";
    }   
}

function clearDiv(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

// Generate Button
let questions = document.getElementById('get-question')

// Questions Container
let questionsDiv = document.getElementById('questions')
// Questions Style
questionsDiv.style.paddingLeft = "30px"
questionsDiv.style.display = "grid";
questionsDiv.style.gridTemplateColumns = "2fr 1fr 1fr";
questionsDiv.style.backgroundColor ="#25076B";
// questionsDiv.style.textAlign = "right"

async function fetchQuestions() {
    //grabs the values of user drop down
    category_list = {"General Knowledge": 9,"Entertainment: Film": 11, "Entertainment: Music": 12,"Entertainment: Television": 14, "Entertainment: Video Games": 15 }
    number = document.getElementById("number").value
    category = document.getElementById("category").value
    difficulty = document.getElementById("difficulty").value

    // await the results of the fetch call
    let results = await fetch(`https://opentdb.com/api.php?amount=${number}&category=${category_list[category]}&difficulty=${difficulty}`)
    
    // await results before we pass data through otherwise can't call results on data because its happening before the return
    let data = await results
    return data
}


questions.addEventListener('click', event => {
    event.preventDefault()    
    fetchQuestions()
    .then(results => results.json())
    .then(data => {display(data)})
    .catch(error => console.error(error.message))
    questions.innerText = "REGENERATE!"
})

// clearing screen before next block of questions
questions.addEventListener('click', () => {
    clearDiv('questions');
})

// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 0.2;
//     audio.play();
//   });