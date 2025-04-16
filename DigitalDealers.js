function checkDeckFull();
{
    if(document.getElementById("full-deck-button").value != "off") {
      document.getElementById("full-deck-button").value="off";
      document.getElementById("full-deck-button").innerHTML="Full Deck Off"
    } else {
      document.getElementById("full-deck-button").value="on";
      document.getElementById("full-deck-button").innerHTML="Full Deck On"
    }
}
