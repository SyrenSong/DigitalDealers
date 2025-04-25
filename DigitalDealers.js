function checkDeckFull() {
    if(document.getElementById("full-deck-button").value != "off") {
      document.getElementById("full-deck-button").value="off";
      document.getElementById("full-deck-button").innerHTML="Full Deck Off";
    } else {
      document.getElementById("full-deck-button").value="on";
      document.getElementById("full-deck-button").innerHTML="Full Deck On";
    }
}

function shuffler() {
    // When the shuffle button is clicked it will activeate this function
    // this will send a signal to the motors to start
    // this will stop the motors when the cameras see a specific color(?)
}
