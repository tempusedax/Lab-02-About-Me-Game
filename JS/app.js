'use strict';

console.log('Hello');

// ask user for their name
let userName = prompt('What is your name?');
alert(`Hello, ${userName}! Welcome to my page about me!`);

// prompt user, get answer then use conditional to answer x5
let answerOne = prompt('Do I have a dog?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y'){
  // console.log('You are correct');
  alert('You are correct');
} else if (answerOne === 'no' || answerOne === 'n'){
  alert('Sorry I do, she is crazy');
}

let answerTwo = prompt("Can I cook well?").toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y'){
  // console.log('You are correct');
  alert('You are corrent! I can cook!');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Wrong! I can cook!')
}

let answerThree = prompt('Is Harry Potter my favorite movie?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y'){
  alert('Wrong! My favorite is the Hobbit and Spirited Away! ');
} else if (answerThree === 'no' || answerThree === 'n') {
  // console.log('You are correct');
  alert('Correct! I love the Hobbit and spirited away!');

  let answerFour = prompt();
}

let answerFour = prompt('Do I like programming?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y'){
  alert('Yes! I am finding it more and more interesting!');
} else if ( answerFour === 'no' || answerFour === 'n') {
  // console.log('You are correct');
  alert("No way! I can'\t wait to make something cooler!");
  
}

let answerFive = prompt('Am I scared of heights?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y'){
  alert('Nope! I can handle heights, but not the ocean!');
} else if ( answerFour === 'no' || answerFour === 'n') {
  // console.log('You are correct');
  alert("Correct! I am scared of the ocean!");
}

alert(`Thanks for playing my guessing game ${userName}!`);