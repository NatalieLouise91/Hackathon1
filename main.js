function display(data){
    for (element of data.results){
        questionsDiv.innerHTML += `<p> Question: ${element.question} </p>`
        questionsDiv.innerHTML += `<p> Correct Answer: ${element.correct_answer} </p>`
        questionsDiv.innerHTML += `<p> Incorrect Answers: ${element.incorrect_answers} </p>`
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
questionsDiv.style.backgroundColor ="#25076B";

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