// new js file
let questionsDiv = document.getElementById('questions')

fetch('https://opentdb.com/api.php?amount=10')
.then(res => res.json())