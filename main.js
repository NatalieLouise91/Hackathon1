// new js file
let questions = document.getElementById('get-question')
let questionsDiv = document.getElementById('questions')

questions.addEventListener('click', () => {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(data => {
        questionsDiv.innerHTML += `<p> Question: ${data.results[0].question} </p>`
        questionsDiv.innerHTML += `<p> Correct Answer: ${data.results[0].correct_answer} </p>`
        questionsDiv.innerHTML += `<p> Incorrect Answers: ${data.results[0].incorrect_answers} </p>`
        console.log(data)
    })
})
