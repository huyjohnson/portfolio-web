/* LEGACY 
// When the user clicks on the button,
// toggle between hiding and showing the dropdown content 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".contact-btn")) {
    var dropdowns = document.getElementsByClassName("contact-box-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

// Scroll reels
function scrollRight() {
  var el = document.getElementById('content-reel-box');
  el.scrollLeft += 150;
}

function scollLeft() {
  var el = document.getElementById('content-reel-box');
  el.scrollLeft -= 150;
}