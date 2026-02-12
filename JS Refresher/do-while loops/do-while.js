let i = 1;
do {
    console.log("Hello");
    i++;
  
} while (i <= 5);   



let randomNum = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if(isNaN(guess) || guess < 1 || guess > 10) {
        console.log("Invalid input. Please enter a number between 1 and 10.");
        continue; 
    }
    if (guess < randomNum) {
        console.log("Too low! Try again.");
    } else if (guess > randomNum) {
        console.log("Too high! Try again.");
    } else {
        console.log("Congratulations! You guessed the number!");
    }
} while (guess !== randomNum);  