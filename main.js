function display(data){
    for (element of data.results){
        questionsDiv.innerHTML += `<p> Question: ${element.question} </p>`
        questionsDiv.innerHTML += `<p> Correct Answer: ${element.correct_answer} </p>`
        questionsDiv.innerHTML += `<p> Incorrect Answers: ${element.incorrect_answers} </p>`
    }
    
}

let questions = document.getElementById('get-question')
let questionsDiv = document.getElementById('questions')

questions.addEventListener('click', () => {
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

// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 0.2;
//     audio.play();
//   });