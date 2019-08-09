// defining my variables
let randomWord;
let lives;
let wordGuessed = [];
let correctGuess;
let displayVar; 
let guess;
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
     's','t', 'u', 'v', 'w','x', 'y', 'z', 'z', 'z'];
words = ["cat", "dog", "cow", "reindeer", "green", "blue", "yellow", "turquoise", "pink", "white", "red", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "titanic", "forestGump", "troll", "mule",
    "united states", "madagascar", "morroco", "brazil", "malta", "nicaragua", "mauritius", "bulgaria", "venzuela", "colombia", "mauritania", "congo", "tunisia"]

//Element references 
let output = document.getElementById("string");
let count = document.getElementById("lives");
let buttons= document.querySelectorAll(".btn");
let playBtn = document.getElementById("playBtn");

/*----------------------- Functions --------------------------*/
randomWord = words[Math.floor(Math.random() * words.length)];

//break word into comparable characters
let currentWord = randomWord.split("");

console.log(currentWord);

//display lives function

// let outputFx = function () {
//     count.innerHTML = "You have " + lives + " lives";
//     if (lives < 1) {
//       count.innerHTML = "Game Over";
//     }
//     for (var i = 0; i < geusses.length; i++) {
//       if (counter === geusses[i]) {
//         count.innerHTML = "You Win!";
//       }
//     }
//   }





// make the array holding the guessed letters equal to the array of the random word generated
wordGuessed = new Array(currentWord.length);

//function display empty letter spaces
playBtn.addEventListener('click', function display() {
    // show underscores
        displayVar = new Array(currentWord.length)
        displayVar.fill('_');
        console.log(displayVar)
    //     displayVar.forEach(function() {
    //     stringEl.innerHTML += "_ ";
    // })
})
// conditions 
if (lives <=0 ) {

    if (wordGuessed !== currentWord){
        //
        buttons.forEach(function (button, idx){
        button.setAttribute('value',letters[idx-1])
        button.addEventListener('click', function(evt){
            
            currentWord.forEach(function(el,idx){
                if (el === evt.target.value) 
                /*for splice
                * @param first starting index
                * @param second how many things to remove
                * items put instead of removed items 
                */
               return wordGuessed.splice(idx,1,evt.target.value);
                   
            })
                
        })
    }) 
    //

    //get a letter 
    

    // buttons.forEach(function (button, idx) {
    //     button.setAttribute('value', letters[idx - 1])
    //     button.addEventListener('click', function(evt) {
    //         currentWord.forEach(function (el, idx) {
    //             if (el === evt.target.value) {
    //                 wordGuessed.splice(idx, 0, evt.target.value);
    //                 // displayVar.splice(idx, 1, evt.target.value);
    //                 output.innerHTML += displayVar[idx];
    //                 lives--;
    //             }
    //             else lives++;
    //         })
            
    //         console.log(wordGuessed);
            
            
    //     })
    //     console.log(lives);
    // })
    console.log(wordGuessed);
}

else if (wordGuessed.length === currentWord.length){

    wordGuessed.join("");
    if ( wordGuessed === currentWord){

    output.innerHTML = " You Won !";
    }
}
else output.innerHTML = " Try Again ";
}

