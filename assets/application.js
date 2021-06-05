$('#announcement-bar').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });



// MODAL.JS

// Get the modal
var modal = document.getElementById("myModal");
console.log('modal');
// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
console.log('span');
// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

setTimeout(function() {
  modal.style.display = "block";
  console.log('modal active');
}, 3000);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}