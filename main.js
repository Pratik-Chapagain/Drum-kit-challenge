
// detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(button.InnerHTML);
  });
}

// detecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});


//make sound function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sound/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sound/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sound/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sound/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sound/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sound/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sound/crash.mp3");
      crash.play();
      break;

    default:
      console.log("Invalid key press: " + key);
  }
}