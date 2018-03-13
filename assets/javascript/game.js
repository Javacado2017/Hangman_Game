window.onload = function () {

    // Randomly select category and display category on screen
        var categoryOptions = ["CategoryOne", "CategoryTwo", "CategoryThree"];
        var selectCategory = categoryOptions[Math.floor(Math.random()*categoryOptions.length)];

        document.getElementById("myCategory").textContent = selectCategory;

    // Randomly select word from category split word into array
        var Category1 = ["wordone", "wordtwo", "wordthree", "wordfour", "wordfive"];
        var Category2 = ["wordsix", "wordseven", "wordeight", "wordnine", "wordten"];
        var Category3 = ["wordeleven", "wordtwelve", "wordthirteen", "wordfourteen", "wordfifhteen"];

        if (categoryOptions = "CategoryOne") {
            var wordOptions = Category1;
        };

        if (categoryOptions = "CategoryTwo") {
            var wordOptions = Category2;
        };

        if (categoryOptions = "CategoryThree") {
            var wordOptions = Category3;
        };

        var selectWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
        var splitWord = selectWord.split("");

    // Set lives equal to 10 and display on screen
        var lives = 10; 
        var newDiv = document.createElement("div");
        newDiv.textContent = lives;
        document.getElementById("myLives").appendChild(newDiv);

    // Set games won equal to 0 and display on screen
        var gamesWon = 0; 
        var newDiv = document.createElement("div");
        newDiv.textContent = gamesWon;
        document.getElementById("gamesWon").appendChild(newDiv);

    // Set games lost equal to 0 and display on screen
        var gamesLost = 0; 
        var newDiv = document.createElement("div");
        newDiv.textContent = gamesLost;
        document.getElementById("gamesLost").appendChild(newDiv);

    // Create alphabet array to compare guesses to and display on screen
        var alphabetArray = [];

        for (i = 0; i < 26; i++) {
        alphabetArray[i] = (i+10).toString(36);   
        }; 
        
        var newDiv = document.createElement("div");
        newDiv.textcontent = alphabetArray;
        document.getElementById("lettersRemaining").innerHTML = alphabetArray.toString();

    // Create number of blanks spaces for ever letter in word
        var blankSpaces = [];
        for (i = 0; i < splitWord.length; i++) {
            blankSpaces[i] = ("_");
        };
        
        var newDiv = document.createElement("div");
        newDiv.textContent = blankSpaces;
        document.getElementById("blankSpaces").innerHTML = blankSpaces.toString();
        console.log(blankSpaces);

    // Function to run each time player enters a key  
        var lettersGuessed = [];

        document.onload = function (event) {
            var userGuess = event.key.toLowerCase();

        // Alert user if they entered same letter twice or if the guess is not a letter
            var alreadyGuessed = lettersGuessed.indexOf(userGuess);
            
                if (alreadyGuessed >= 0){
                    alert("You already typed that letter. Guess again.");
                    return;
                }
                
                else if (alphabetArray.indexOf(userGuess) < 0) {
                    alert("That's not a letter. Guess again.");
                    return;
                };

        // Push the guesses to an array and remove it from the remaining letters list
            lettersGuessed.push(userGuess);
            alphabetArray.splice(alphabetArray.indexOf(userGuess),1);

            var newDiv1 = document.createElement("div");
            var newDiv2 = document.createElement("div");
            newDiv1.textContent = lettersGuessed;
            newDiv2.textContent = alphabetArray;
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed.toString();
            document.getElementById("lettersRemaining").innerHTML = alphabetArray.toString();
        
        // Run playerProgress function when player has guessed a correct letter otherwise deduct a life
            if (splitWord.indexOf(userGuess) >=0) {
                playerProgress(userGuess);
            }

            else {
                lives--;
                document.getElementById("myLives").innerHTML = lives.toString();
            }
        
        // If player lives goes to zero, player loses game and game restarts
            if (lives === 0) {
                gamesLost++;
                alert("No more guesses remaining. You lost this game. The word was " + selectWord + ". Click 'Okay' to play again.");
                document.getElementById("gamesLost").innerHTML = gamesLost.toString();  
            };
        
        // If player guessed the word, player wins game and game restarts
            if (document.getElementById("blankSpaces").innerHTML.indexOf("_") === -1) { 
                gamesWon++;
                alert("You won. Click 'Okay' to play again.")
                document.getElementById("gamesWon").innerHTML = gamesWon.toString();
            };
        };

    // playerProgress function to search letter splitWord array and replace it with guessed letter or deduct a life if not fouind    

        function playerProgress (letter) {
            for (i = 0; i < splitWord.length; i++) {
                if (splitWord[i] === letter) {
                    blankSpaces[i] = letter;
                    document.getElementById("blankSpaces").innerHTML = blankSpaces.toString();
                }
            };
            
        };
}

// Missing ... how to restard game and keep track of losses and wins 