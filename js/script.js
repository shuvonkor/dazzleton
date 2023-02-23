// Get the button:
var myButton = document.getElementById("scroll-up-btn");

//  20px from the top of the document for show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

//scroll to the top of the document

