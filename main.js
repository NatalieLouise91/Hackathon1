// new js file
let questions = document.getElementById('get-question')
let questionsDiv = document.getElementById('questions')

// Adding in user options here
//number 
// category 
// Difficulty

questions.addEventListener('click', () => {
    //number = document.getElementById("number")
    //category = document.getElementById("category")
    //difficulty = document.getElementById("difficulty")
    category_list = {"General Knowledge": 9,"Entertainment: Film": 11, "Entertainment: Music": 12,"Entertainment: Television": 14, "Entertainment: Video Games": 15 }
    if (category == "")
    fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(data => {
        questionsDiv.innerHTML += `<p> Question: ${data.results[0].question} </p>`
        questionsDiv.innerHTML += `<p> Correct Answer: ${data.results[0].correct_answer} </p>`
        questionsDiv.innerHTML += `<p> Incorrect Answers: ${data.results[0].incorrect_answers} </p>`
        console.log(data)
    })
})


window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });
