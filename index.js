//Detecting Button Press

// the dom method here will give all the buttoms with drum class

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// here we are using anonymous function so that we use one function for all drum clicks

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //After removing arrow-function I can listen the sounds after clicking not only keys but also buttons
    var btnHTML = this.innerHTML;
    makesound(btnHTML);
    makeAnimation(btnHTML);
  });
}
//Detecting Keyboard Press

document.addEventListener("keydown", function (event) {
  //After removing arrow-function I can listen the sounds after clicking not only keys but also buttons

  makesound(event.key);
  makeAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./drum-1_sound.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./drum-5_sound.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./drum-7_sound.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./d-sound.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("./crash.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("./kick.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("./snare.mp3");
      tom7.play();
      break;
    default:
      console.log();
  }
}

function makeAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
