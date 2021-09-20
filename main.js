// new js file
let questions = document.getElementById('get-question')

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
        console.log(data)
    })
})



