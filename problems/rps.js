  // Rock, Paper, Scissors
  // Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.
  
  // Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:
  
  // Rock beats Scissors
  // Scissors beats Paper
  // Paper beats Rock
  // If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".
  
  //Declare a function that accepts two strings as arguments.
  function rps(p1, p2){
  
    //Declare if statement that checks if P1 and P2 equal one another. If true, return draw.
      if(p1 === p2){
        return `It's a draw.`
    // If there is no draw, begin comparing the arguments against one another. Scissors beats Paper.
      } else if (p1 === 'Scissors' && p2 === 'Paper'){
        return 'The winner is p1'
    // Paper beats Rock.
      } else if (p1 === 'Paper' && p2 === 'Rock'){
        return 'The winner is p1'
    // Rock beats Scissors.
      } else if (p1 === 'Rock' && p2 === 'Scissors'){
        return 'The winner is p1'
    // If player 1 has not played Scissors over Paper, Paper over Rock, or Rock over Scissors, it is assumed player 2 is the winner.
      } else {
        return 'The winner is p2'
      }
    }
    // Examples
    // rps("Rock", "Paper") //➞ "The winner is p2"
    
    // rps("Scissors", "Paper") //➞ "The winner is p1"
    
    // rps("Paper", "Paper") //➞ "It's a draw"
    
    // rps("Scissors", "Rock") // Player 2