// new js file
let questions = document.getElementById('get-question')

questions.addEventListener('click', () => {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})



