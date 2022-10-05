var readlineSync = require("readline-sync");


var score = 0;

var highScore = { HS: 3 };

var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " Do You Know Bhanu Kiran?")

var highScores = [
  {
    name: "Kiran",
    score: 3,
  },

  {
    name: "Sai",
    score: 2,
  },
]

var questions = [
  {

    question:
      'What is the largest of the seven continents?',
    answer: 'Asia',
  },
  {

    question:
      'which city is known as diamond city of India?',
    answer: 'Surat',
  },
  {

    question: ' What is the world"s most populous country?',
    answer: 'China',
  },
  {

    question: 'Who is known as  Missile man of India',
    answer: 'APJ Kalam',
  },
  {

    question: 'Which city of India is known as Silicon Valley of India?',
    answer: 'Bengaluru',
  },
];





function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log("right!");
  }
  else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------")
}





for (var i = 0; i < questions.length; i++) {
  var currQuestion = questions[i];
  play(currQuestion.question, currQuestion.answer);
}


if (highScore.HS > score) {
  console.log("You score is less than highscore" + "\n" + "Highscore: " + highScore.HS + "\n" + "Your Score: " + score)
} else if (highScore.HS == score) {
  console.log("----------------------------------------------")
  console.log("your score is equal to Highscore: " + score)
} else if (highScore.HS < score) {
  console.log("Yipee!! You beat the Highscore" + "\n" + "Your Score: " + score + "");
}



