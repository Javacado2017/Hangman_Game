    // Set games won equal to 0 and display on screen
        var gamesWon = 0; 
        document.getElementById("gamesWon").innerHTML = gamesWon.toString();

    // Set games lost equal to 0 and display on screen
        var gamesLost = 0; 
        document.getElementById("gamesLost").innerHTML = gamesLost.toString();

function hangmanGameSetup() {
    
    // Randomly select category and display category on screen
        var categoryOptions = ["Seasons", "Months", "Days"];
        var selectCategory = categoryOptions[Math.floor(Math.random()*categoryOptions.length)];

        document.getElementById("myCategory").textContent = selectCategory;

    // Randomly select word from category split word into array
        var Category1 = ["winter", "spring", "summer", "fall"];
        var Category2 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        var Category3 = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

        if (selectCategory === "Seasons") {
            var wordOptions = Category1;
        }
        else if (selectCategory === "Months") {
            var wordOptions = Category2;
        }
        else if (selectCategory === "Days") {
            var wordOptions = Category3;
        };

        var selectWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
        var splitWord = selectWord.split("");

    // Set lives equal to 10 and display on screen
        var lives = 10; 
        document.getElementById("myLives").innerHTML = lives.toString();

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


    // Function to run each time player enters a key  
        var lettersGuessed = [];

        document.onkeyup = function (event) {
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

            gameStatus();

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

        function gameStatus () {
                if (lives === 0) {
                    gamesLost++;
                    alert("No more guesses remaining. You lost this game. The word is " + selectWord + ". Click 'Okay' to play again.");
                    hangmanGameSetup();
                };

                if (document.getElementById("blankSpaces").innerHTML.indexOf("_") === -1) { 
                    gamesWon++;
                    alert("You won. The word is " + selectWord + ". Click 'Okay' to play again.")
                    document.getElementById("gamesWon").innerHTML = gamesWon.toString();
                    hangmanGameSetup();
                };
        };

};

hangmanGameSetup();

