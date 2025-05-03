// Wait for the DOM to finoich loading before running the game
// Get the button elements and add event listers to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});
/** 
The man page "loop", called when the script is first loaded
and after the user's answer has been processed
*/
function runGame() {
    // Generate two random numbers between 1 and 25
let num1=Math.floor(Math.random() * 25) + 1;
let num2=Math.floor(Math.random() * 25) + 1;
}
function chechAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion() {

}
function displaySubstractQuestion() {

}
function displayMultipleQuestion() {

}
