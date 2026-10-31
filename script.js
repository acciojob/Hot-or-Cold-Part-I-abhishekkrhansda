//your code here

let response = document.querySelector("#response");
let btn = document.querySelector("#btn");

let click = 0;
let previousGuess;

let secretNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber(click) {

    let input = Number(document.querySelector("#guess").value);

    // Correct guess
    if (input === secretNumber) {
        response.textContent = "You guessed the right number!";
        return;
    }

    // First guess
    if (click === 1) {

        if (input < secretNumber) {
            response.textContent = "Guess Higher Number";
        }
        else {
            response.textContent = "Guess Lower Number";
        }

    }

    // Second guess onwards
    else {

        let currentDifference = Math.abs(secretNumber - input);
        let previousDifference = Math.abs(secretNumber - previousGuess);

        if (currentDifference < previousDifference) {

            if (input < secretNumber) {
                response.textContent = "Getting Hotter, Guess Higher";
            }
            else {
                response.textContent = "Getting Hotter, Guess Lower";
            }

        }

        else {

            if (input < secretNumber) {
                response.textContent = "Getting Colder, Guess Higher";
            }
            else {
                response.textContent = "Getting Colder, Guess Lower";
            }

        }

    }

    // Update previous guess
    previousGuess = input;
}

// Button event
btn.addEventListener("click", () => {

    click++;

    guessNumber(click);

});


