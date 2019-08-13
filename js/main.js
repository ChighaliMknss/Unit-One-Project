let randomWord;
let lives;
let wordGuessed = [];
let currentWord;
let guess;
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'z', 'z'];
words = ["cat", "dog", "cow", "bear", "green", "blue", "yellow", "turquoise", "pink", "white", "red", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "titanic", "forestGump", "troll", "mule",
    "united states", "madagascar", "morroco", "brazil", "malta", "nicaragua", "germany", "bulgaria", "venzuela", "colombia", "spain", "australia", "france",]

//Element references 
let output = document.getElementById("string");
let count = document.getElementById("lives");
let hangmanImg = document.querySelector("hangman");
let buttons = document.querySelectorAll(".btn");
let playBtn = document.getElementById("playBtn");

/*------------Events Listeners---------------*/
displayFx();



/*---------------------Functions---------------*/


function displayFx() {

    document.querySelector(".letter-btn").style.display = 'inline-flex';
    randomWord = words[Math.floor(Math.random() * words.length)];
    currentWord = randomWord.split("");
    console.log(currentWord);
    wordGuessed = new Array(currentWord.length);
    wordGuessed.fill("_ ");
    lives = 8;
    render(wordGuessed);
}

buttons.forEach(function (button, idx) {
    button.setAttribute('value', letters[idx])
    button.addEventListener('click', function (evt) {
        if (currentWord.find(x => x === evt.target.value)) {
            currentWord.forEach(function (el, idx) {
                if (el === evt.target.value) {
                    wordGuessed.splice(idx, 1, evt.target.value);
                }
            })
        } else {

            lives--;
        }
        evt.target.style.visibility = 'hidden';
        render(wordGuessed);
    });
})




function render(wordGuessed) {

    if (lives <= 0){
        alert("TRY AGAIN");
        window.location.reload();
    }
    else if (wordGuessed.join('') === currentWord.join('')){
        winFx();
        output.style.display = 'none';
        playBtn.style.opacity = 1;
        playBtn.addEventListener('click', displayFx);
    

    }
    else {
        count.textContent = `Lives : ${lives}`;
    }
    output.textContent = "";
    currentWord.forEach(function (x, idx) {
        output.textContent += wordGuessed[idx];
    });
}


function winFx() {
    alert("(^_^) YOU GUESSED IT !");
    window.location.reload();
}
