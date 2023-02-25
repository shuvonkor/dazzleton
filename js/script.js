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
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

myButton.addEventListener("click", topFunction);


// Read more read less button 
function readMoreLess() {
  var dot = document.getElementById("dot");
  var hiddenText = document.getElementById("hidden-text");
  var readMoreLessBtn = document.getElementById("read-more-less-btn");
  
  if (dot.style.display != "none") {
    dot.style.display = "none";
    hiddenText.style.display = "inline";
    readMoreLessBtn.innerHTML = "Read Less";
  }
  else {
    dot.style.display = "inline";
    hiddenText.style.display = "none";
    readMoreLessBtn.innerHTML = "Read More";
  }
}
