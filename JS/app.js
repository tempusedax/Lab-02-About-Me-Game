'use strict';

getUserName();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
numberGame();
guessFave();

let correctAnswers = 0;

function getUserName(){
  console.log('Hello'); 
  // ask user for their name
  let userName = prompt('What is your name?');
  alert(`Hello, ${userName}! Welcome to my page about me!`);
};

function questionOne(){
  // prompt user, get answer then use conditional to answer x5
  let answerOne = prompt('Do I have a dog?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y'){
    // console.log('You are correct');
    alert('You are correct');
    correctAnswers++;
  } else if (answerOne === 'no' || answerOne === 'n'){
    alert('Sorry I do, she is crazy');
  }
};

function questionTwo(){
  let answerTwo = prompt("Can I cook well?").toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y'){
    // console.log('You are correct');
    alert('You are correct! I can cook!');
    correctAnswers++;
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Wrong! I can cook!');
  }

};

function questionThree(){
  let answerThree = prompt('Is Harry Potter my favorite movie?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y'){
    alert('Wrong! My favorite is the Hobbit and Spirited Away! ');
  } else if (answerThree === 'no' || answerThree === 'n') {
    // console.log('You are correct');
    alert('Correct! I love the Hobbit and spirited away!');
    correctAnswers++;
  };

};

function questionFour(){
  let answerFour = prompt('Do I like programming?').toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y'){
    alert('Yes! I am finding it more and more interesting!');
    correctAnswers++;
  } else if ( answerFour === 'no' || answerFour === 'n') {
    // console.log('You are correct');
    alert("No way! I can't wait to make something cooler!");
    
  }

};

function questionFive(){
  let answerFive = prompt('Am I scared of heights?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y'){
    alert('Nope! I can handle heights, but not the ocean!');
  } else if ( answerFive === 'no' || answerFive === 'n') {
    // console.log('You are correct');
    alert("Correct! I am scared of the ocean!");
    correctAnswers++;
  }
  
  alert(`Thanks for playing my get to know me game ${userName}!`);

};

function numberGame(){
  let answerSix = +prompt("Let's play a guessing game now! Pick a number please!");

  for (let i = 1; i < 4; i++) {
  
    if (answerSix > 10){
      alert("Too high. Guess again!");
      answerSix = +prompt("guess again...");
      console.log("Too high. Guess again!");
    } else if (answerSix < 5){
      alert("Too low. Try again!");
      answerSix = +prompt("guess again...");
      console.log("Too low. Try again!");
    } else if (answerSix === 7 || answerSix === 8 || answerSix === 9){
      alert("You guess correct!");
      answerSix = +prompt("Guess another number!");
      correctAnswers++;
    } else if (i == 4) {
      alert("Too many guesses! The answers were 7, 8, or 9!");
    };
  
  };
  
  alert("Correct answers were 7, 8, and 9! Nice job!");

}


function guessFave(){
  let answerSeven = prompt("Can you guess my what my favorite flavor ice cream is?");

  let guesses = 1;
  let correct = false;
  let answers = ['durian', 'mint chip', 'pineapple coconut'];
  
  while(!correct || guesses === 6){
    if (answerSeven === answers[0] || answerSeven === answers[1] || answerSeven === answers[2]){
      alert("Correct! I love that one!");
      correctAnswers++;
      correct = true;
    } else if (guesses === 6){
      alert("Too many guesses. Game over")
    } else {
      alert("Wrong, I don't like that one!");
      answerSeven = prompt("Guess again!");
    }
    guesses++;
  }
  
  alert(`My favorite ice creams are ${answers[0]}, ${answers[1]}, and ${answers[2]}!`);
  alert(`Your total correct answers are ${correctAnswers} out of 7!`);

}

  
