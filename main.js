function display(data){
    for (element of data.results){
        questionsDiv.innerHTML += `<h6 class="quizquestion"> Question: ${element.question} </h6>`
        questionsDiv.innerHTML += `<h6 class="quizcorrect"> Correct Answer: ${element.correct_answer} </h6>`
        // questionsDiv.innerHTML += `<h5 class="quizwrong"> Incorrect Answers: ${element.incorrect_answers} </h5>`
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
questionsDiv.style.gridTemplateColumns = "auto auto";
questionsDiv.style.backgroundColor ="#25076B";
// questionsDiv.style.textAlign = "right"

questions.addEventListener('click', event => {
    event.preventDefault()
    category_list = {"General Knowledge": 9,"Entertainment: Film": 11, "Entertainment: Music": 12,"Entertainment: Television": 14, "Entertainment: Video Games": 15 }
    //grabs the values of user drop down

    number = document.getElementById("number").value
    category = document.getElementById("category").value
    difficulty = document.getElementById("difficulty").value
    
    fetch(`https://opentdb.com/api.php?amount=${number}&category=${category_list[category]}&difficulty=${difficulty}`)
    .then(res => res.json())
    .then(data => {display(data)
    })
    // changed button text to regenerate after click
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