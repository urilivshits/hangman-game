 //create an array of words
var words = ["cat", "dog", "bird", "putin"]; 
var description = ["Animals: whom do we feed?", "Animals: who's shit the crazy neighbor brings?", "Animals: whom do I hate?", "Politics: who is huilo?"];
//pick a random word
var word = words[Math.floor(Math.random()*words.length)]; 
//set up the answer array
var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
var remainingLetters = word.length; 

    for (var n = 0; n < words.length; n++) {
        if (word == words[n]) {
            words[n] = description[n];
            alert(description[n]);
        }
    }




//the game loop
var k=0;
while (remainingLetters > 0 && k < 10) {
    var p = (10 - k);
    k++;
    
    //show the player his progress
    
    alert("This word has " + word.length + " letters:   " + answerArray.join(" ") + "   and you hove only " + p + " tries remaining.");
    //get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing").toLowerCase();
    //stop game if "Cancel" pressed
    if (guess === null) { 
        break;
    } 
    //or show message if more/less than 1 letter entered
    else if (guess.length !==1) { 
        alert("Please enter a single letter");
        }
    //or get a guess from the player
    
    
    else { 
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
            
        }

    }
//the end of the game loop
}
//show the answer and then congradulate the player
alert(answerArray.join(" "));
if (k < 10) {alert("Good job! The answer was " + word + "!!!");}
else if (k >= 10) {alert("Oops! Looks like you spent all the " + k + " tries and lost!");}