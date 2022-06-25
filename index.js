//----------------------------------------------------------------------)
//                                                                      |
//                       Guessing game - creating ...                   |
//                                                                      |
//----------------------------------------------------------------------)
//----------------------------------------------------------------------)
//      1. input a number from 1 to 5                                   |
//      2. random number generator                                      |
//      3. match the random number with the input/given number          |
//      4. then it will print the program (won/lost times)              |
//----------------------------------------------------------------------)

alert("Welcome to play this game ...");
var name = prompt("Enter your name : ");

var numOfWon = 0;
var numOfLost = 0;

for (var i = 1; i <= 5; i++) {
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

    var randomNumber = Math.floor((Math.random() * 5) + 1);

    if (guessNumber == randomNumber) {
        console.log("You have won .");
        numOfWon++;
    } else {
        console.log("You have lost . Random number was " + randomNumber);
        numOfLost++;
    }
}
document.write("<h2><u>Hello, " + name + " :</u></h2><br>");
document.write("<h3>You have Won : " + numOfWon + " times ." + "<br></h3>");
document.write("<h3>You have Lost : " + numOfLost + " times ." + "<br></h3>");

document.write("<h4>Thanks for playing ... </h4>");