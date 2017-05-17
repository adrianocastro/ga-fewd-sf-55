// PSEUDOCODE:
// only execute code when DOM is ready
// 
//   set initial scores to zero
// 
//   listen for a click on game options
//    get the value of the user play
//    generate random computer play
// 
//   compare user play with bot play
//     define winner
//       update the scoreboard
//       log details of play
//
// 
// APPROACH:
// 1. implement click listeners to figure out user play
// 2. hard-code computer play (i.e. manually define "random" play)
// 3. implement the game logic
// 4. console.log the results
// 5. update the play status and scoreboard
// 6. implement random computer play

// Only run the game code when the DOM is ready
$('document').ready(function() {
  // Set initial scores
  var humanScore = 0;
  var botScore = 0;

  // Initialize userPlay and botPlay to be used later
  var userPlay;
  var botPlay;

  // Generate a random bot play
  var botPlayRandomiser = function() {
    // The following equation generates a random number between 1 and 3
    // 
    // Breakdown:
    //   - Math.random() generates a random decimal number between 0 and 1
    //   - multiplying that by 3 turns that range into 0 to 2
    //   - adding 1 turns the range into 1 to 3
    //   - finally, Math.floor() rounds down the number to a whole integer
    // 
    // Example:
    //   > var randomNumber = Math.random();
    //   > // 0.3409735656761461
    //   > randomNumber = randomNumber * 3
    //   > // 1.0229206970284384
    //   > randomNumber = randomNumber + 1
    //   > // 2.0229206970284384
    //   > randomNumber = Math.floor(randomNumber);
    //   > // 2
    var randomBotPlay = Math.floor(Math.random()*3+1);

    // Map rock, paper and scissors to the 1, 2 and 3 random number provided above
    if (randomBotPlay === 1) { 
      botPlay = 'rock';
    } else if (randomBotPlay === 2) {
      botPlay = 'paper';
    } else {
      botPlay = 'scissors';
    }
  }

  // This function is responsible for keeping the scores up-to-date
  // and updating the play status text.
  // In order to do so, we tell it who the winner is and the details of
  // the userPlay and botPlay by passing that information as arguments
  var scoreKeeper = function(winner, userPlay, botPlay) {
    // define result from human point-of-view
    if (winner === 'human') {
      result = 'win';
      // Increment (add one) to the human score
      humanScore = humanScore + 1;
    } else if (winner === 'bot') {
      result = 'lose';
      // Increment (add one) to the bot score
      botScore = botScore + 1;
    } else {
      result = 'tie';
    }

    // Update the play status
    $('#status').text('You played ' + userPlay
                      + '. The bot played ' + botPlay
                      + '. You ' + result + '.');

    // Update the scoreboard
    $('#humanScore').text(humanScore);
    $('#botScore').text(botScore);
  }

  // Listen for a click on any of the game options
  $('#options li').click(function() {
    var userChoice = event.target;
    // Save the user play and set it to lower case to simplify logical comparisons
    userPlay = $(userChoice).text().toLowerCase();

    // Execute the randomiser for the botPlay
    botPlayRandomiser()

    // Compare plays and call scoreKeeper to update results
    // NOTE: this could perhaps be moved into scoreKeeper or its own function
    switch (userPlay) {
      case botPlay:
        scoreKeeper('tie', userPlay, botPlay);
        break;
      case 'rock':
        if (botPlay === 'paper') {
          scoreKeeper('bot', userPlay, botPlay);
        } else {
          // Bot picked scissors
          scoreKeeper('human', userPlay, botPlay);
        }
        break;
      case 'paper':
        if (botPlay === 'rock') {
          scoreKeeper('human', userPlay, botPlay);
        } else {
          // Bot picked scissors
          scoreKeeper('bot', userPlay, botPlay);
        }
        break;
      case 'scissors':
        if (botPlay === 'rock') {
          scoreKeeper('bot', userPlay, botPlay);
        } else {
          // Bot picked paper
          scoreKeeper('human', userPlay, botPlay);
        }
        break;
    }
  });
});