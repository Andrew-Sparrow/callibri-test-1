import addMarkup from "./add-markup.js";
import dealings from "./mock-data.js"

function getStatuses(data) {
  return JSON.stringify(data);
}

const dataJSON = getStatuses(dealings);

var modal = document.getElementById("myModal");

// Get the button that "open"s the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close")[0];

// When the user clicks on <span> (x),
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal,
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('keydown',
  (event) => {
    if (event.key === 'Escape') {
      modal.style.display = "none";
    }
})

addMarkup(dataJSON, modal);

btn.onclick = function () {
  modal.style.display = "block";
}
