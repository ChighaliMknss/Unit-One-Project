    //defining my variables
    letters= [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    lives = 8;
    words = ["cat", "dog", "cow", "reindeer","green", "blue","yellow", "turquoise","pink","white","red","january", "february","march","april","May","June","july","August","september", "sctober", "november", "december","titanic", "forestGump","troll2","mule",
    "united states","Madagascar","morroco","brazil","malta","nicaragua","mauritius","bulgaria","venzuela","colombia","mauritania","congo","tunisia"]
    
    //display messages
    messages = {
        win: 'You win!',
        lose: 'Game over!',
        guessed: ' already guessed, please try again...',
        validLetter: 'Please enter a letter from A-Z'
    };
   
    //Word random selection 
    randomWord = words[Math.floor(Math.random() * words.length)];
    
    //break word into comparable characters
    let currentWord = randomWord.split("");

    //function display prints the array holding the the random word's letter
    document.getElementById("run-btn").addEventListener('click', function display(){
        document.getElementById("string").innerHTML = currentWord;
    })
    
    //get a letter 
    let buttons = document.querySelectorAll("button");
    buttons.forEach(function (button, idx){
        button.setAttribute('value',letters[idx-1])
        button.addEventListener('click', function(evt){
            console.log(evt.target.value);
        })
    })

    

    


