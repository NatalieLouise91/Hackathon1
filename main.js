// new js file
let questions = document.getElementById('get-question')

// Adding in user options here

questions.addEventListener('click', () => {
    fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})


window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });
