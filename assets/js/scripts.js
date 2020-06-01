// Navbar courtesy of Bootstrap4
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// THE MODAAAAAL

// Get the modal and the open-modal-button and the day you wish to mark
var modal = document.getElementById("modal");
var btns = document.getElementsByClassName("today");
var btnsLength = btns.length;
var day = document.getElementsByClassName("today");

// Get the appropriate color butten
var green = document.getElementById("greenOK");
var yellow = document.getElementById("yellowOK");
var red = document.getElementById("redOK");
var clear = document.getElementById("clear-color");

// When any day is clicked the modal appears and you can click one of 4 buttons.
for (var i = 0; i < btnsLength; i++) {
  btns[i].onclick = function () {
    modal.style.display = "block";

    var clickedButton = this;

    green.onclick = function () {
      clickedButton.style.backgroundColor = "#90EE90";
      modal.style.display = "none";
    };
    yellow.onclick = function () {
      clickedButton.style.backgroundColor = "#FFFF33";
      modal.style.display = "none";
    };
    red.onclick = function () {
      clickedButton.style.backgroundColor = "#FF2B00";
      modal.style.display = "none";
    };
    clear.onclick = function () {
      clickedButton.style.backgroundColor = "";
      modal.style.display = "none";
    };
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
