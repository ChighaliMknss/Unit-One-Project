    //defining my variables
    let randomWord;
    let wordGuessed;
    letters= [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','z','z'];
    lives = 0;
    words = ["cat", "dog", "cow", "reindeer","green", "blue","yellow", "turquoise","pink","white","red","january", "february","march","april","May","June","july","August","september", "october", "november", "december","titanic", "forestGump","troll2","mule",
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

    console.log(currentWord);

    wordGuessed = new Array(currentWord.length);


 

    //function display empty letter spaces
    document.getElementById("run-btn").addEventListener('click', function display(){
        currentWord.forEach(function(){
        document.getElementById("string").innerHTML += "_ ";
        
    })
    })
    
    //get a letter 
    let buttons = document.querySelectorAll("button");
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
                console.log(wordGuessed);
        })
    })
