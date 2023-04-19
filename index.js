var eventKey = localStorage.getItem("eventKey") || "`";
var UI = getElementById("AdminUI");

document.addEventListener("keydown", function(event) {
  if (event.key === eventKey) {
    UI.style.opacity = 1;
  }
});
