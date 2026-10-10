var modal = document.querySelector(".modal-container");
var button = document.querySelector("button");
var btnClose = document.getElementById("button_close");

if (button) {
    button.addEventListener("click", function() {
        modal.style.visibility = "visible";
    });
}

if (btnClose) {
    console.log("button_close-clicked")
    btnClose.addEventListener("click", function() {
        modal.style.display = "none";
    });
}