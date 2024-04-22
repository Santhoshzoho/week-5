let randomno = Math.floor(Math.random() * 10) + 1; 
let attempts = 0;
while (true) {
    let guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
    }

    attempts++;

    if (guess === randomno) {
        alert("Congratulations! You guessed the number " + randomno + " in " + attempts + " attempts.");
        break;
    } else if (guess < randomno) {
        alert("Too low. Try again.");
    } else {
        alert("Too high. Try again.");
    }
}