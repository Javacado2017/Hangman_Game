<script>

// Randomly select category and display category on screen
var categoryOptions = ["Category1", "Category2", "Category3"];
var selectCategory = categoryOptions[Math.floor(Math.random()*categoryOptions.length)];

document.getElementById("myCategory").textContent = selectCategory;

// Select set of words from category
var Category1 = ["word1", "word2", "word3", "word4", "word5"];
var Category2 = ["word6", "word7", "word8", "word9", "word10"];
var Category3 = ["word11", "word12", "word13", "word14", "word15"];

if (categoryOptions = "Category1") {
    var wordOptions = Category1;
};

if (categoryOptions = "Category2") {
    var wordOptions = Category2;
};

   if (categoryOptions = "Category3") {
    var wordOptions = Category3;
};




//Set lives equal to 10 and display in document
var lives = 10; 
var newDiv = document.createElement("div");
newDiv.textContent = "Lives left: " + lives;
document.getElementById("myLives").appendChild(newDiv);






//Create alphabet to compare to
var alphabetArray = [];

for (i = 0; i < 26; i++) {
alphabetArray[i] = (i+10).toString(36);   
}; 
//console.log(alphabetArray);
var newDiv = document.createElement("div");
newDiv.textcontent = alphabetArray;
document.getElementById("lettersRemaining").innerHTML = alphabetArray.toString();





// Randomly select word, split word into array
var selectWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
var splitWord = selectWord.split("");




// Create blanksSpaces array to compare SplitWord[i] and blankSpace[i] later on
var blankSpaces = [];
for (i = 0; i < splitWord.length; i++) {
    blankSpaces[i] = ("_");
}
console.log(splitWord);
console.log(blankSpaces);

//Create "_" in HTML to be replaced later on
blankSpaces.forEach(function(blankSpaces) {
var newDiv = document.createElement("div");
newDiv.textContent = blankSpaces;
document.getElementById("blankSpaces").appendChild(newDiv);
});

// Function to run each time player enters a key
var lettersGuessed = [];

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    //console.log(userGuess);
    
    var alreadyGuessed = lettersGuessed.indexOf(userGuess);
    
    if (alreadyGuessed >= 0){
        alert("You already typed that letter. Guess again...");
        return;
    }; 
    
    else (alphabetArray.indexOf(userGuess) < 0) {
        alert("What alphabet system do you write with? That's not a letter. Guess again...");
        return;
    };


    lettersGuessed.push(userGuess);
    alphabetArray.splice(alphabetArray.indexOf(userGuess),1);

    var newDiv1 = document.createElement("div");
    var newDiv2 = document.createElement("div");
    newDiv1.textContent = lettersGuessed;
    newDiv2.textContent = alphabetArray;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.toString();
    document.getElementById("lettersRemaining").innerHTML = alphabetArray.toString();

    if (splitWord.indexOf(userGuess) >=0) {
        playerProgress(userGuess);
        return;
    }

    else (splitWor.indxOf(userGuess) < 0) {



    };
        

};

function playerProgress (letter) {
    for (i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === letter) {
            blankSpaces[i] = letter;
            document.getElementById("blankSpaces").children[i].innerHTML = letter;
        }
    };
}












</script>
