// Wait for the DOM to finoich loading before running the game
// Get the button elements and add event listers to them
document.addEventListener("DocumentLoaded",function()) {
    let buttons = document.getElementsByTagName("button");
for (button of buttons) {
button.addEventListener("click", function()){
    if (this.getAttribute("data-type")=== "submit"){
        alert("You clicked Submit!");
    } else {
        let gameType=this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
    }
}
}
}
function runGame(){

}
function chechAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore() {

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubstractQuestion(){

}
function displayMultipleQuestion(){

}
