// 'use strict';

// console.log('Hello');

// // ask user for their name
// let userName = prompt('What is your name?');
// alert(`Hello, ${userName}! Welcome to my page about me!`);

// // prompt user, get answer then use conditional to answer x5
// let answerOne = prompt('Do I have a dog?').toLowerCase();
// if (answerOne === 'yes' || answerOne === 'y'){
//   // console.log('You are correct');
//   alert('You are correct');
// } else if (answerOne === 'no' || answerOne === 'n'){
//   alert('Sorry I do, she is crazy');
// }

// let answerTwo = prompt("Can I cook well?").toLowerCase();
// if (answerTwo === 'yes' || answerTwo === 'y'){
//   // console.log('You are correct');
//   alert('You are corrent! I can cook!');
// } else if (answerTwo === 'no' || answerTwo === 'n') {
//   alert('Wrong! I can cook!')
// }

// let answerThree = prompt('Is Harry Potter my favorite movie?').toLowerCase();
// if (answerThree === 'yes' || answerThree === 'y'){
//   alert('Wrong! My favorite is the Hobbit and Spirited Away! ');
// } else if (answerThree === 'no' || answerThree === 'n') {
//   // console.log('You are correct');
//   alert('Correct! I love the Hobbit and spirited away!');
// }

// let answerFour = prompt('Do I like programming?').toLowerCase();
// if (answerFour === 'yes' || answerFour === 'y'){
//   alert('Yes! I am finding it more and more interesting!');
// } else if ( answerFour === 'no' || answerFour === 'n') {
//   // console.log('You are correct');
//   alert("No way! I can't wait to make something cooler!");
  
// }

// let answerFive = prompt('Am I scared of heights?').toLowerCase();
// if (answerFour === 'yes' || answerFour === 'y'){
//   alert('Nope! I can handle heights, but not the ocean!');
// } else if ( answerFour === 'no' || answerFour === 'n') {
//   // console.log('You are correct');
//   alert("Correct! I am scared of the ocean!");
// }

// alert(`Thanks for playing my guessing game ${userName}!`);

// let answerSix = prompt("Let's play a guessing game! Pick a number please!");

// for (let i = 1; i <= 4; i++) {

//   if (answerSix > 10){
//     alert("Too high. Guess again!");
//     answerSix = prompt("guess again...");
//     console.log("Too high. Guess again!");
//   } else if (answerSix < 5){
//     alert("Too low. Try again!");
//     answerSix = prompt("guess again...");
//     console.log("Too low. Try again!");
//   } else if (answerSix == 7 || answerSix == 8 || answerSix == 9){
//     alert("You guess correct!");
//     answerSix = prompt("Guess another number!");
//   } else if (i == 4) {
//     alert("Too many guesses! The answers were 7, 8, or 9!");
//   };

// };

// alert("Correct answers were 7, 8, and 9! Nice job!");

let answerSeven = prompt("Can you guess my what my favorite flavor ice cream is?");

let i = 0;
let correct = false;
let answers = ['chocolate', 'vanilla', 'strawberry', 'durian', 'mint chip', 'huckleberry'];
while(i == 6 || !correct){

  for (let j = 0; j = answers.length; j++){
    alert(answers[j]);
    // if (answerSeven.toLowerCase() === answers[j]){
    //   alert(`Yes I love ${answers[j]}`);
    //   correct = true;
    // } else {
    //   answerSeven = prompt("Wrong, guess again!");
    // }
    // alert(answers[j]);
  }

  i++;
}
