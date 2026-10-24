// var modal = document.querySelector(".modal-container");
// var button = document.querySelector("button");
// var btnClose = document.getElementById("button_close");

// if (button) {
//     button.addEventListener("click", function() {
//         modal.style.visibility = "visible";
//     });
// }

// if (btnClose) {
//     console.log("button_close-clicked")
//     btnClose.addEventListener("click", function() {
//         modal.style.display = "none";
//     });
// }


let index = 0;

function geser(arah) {
  const slides = document.querySelector(".slides");
  const jumlah = slides.children.length;

  index = (index + arah + jumlah) % jumlah;

  slides.style.transform =
    `translateX(-${index * 100}%)`;
}

let index1 = 1;

function geser(arah) {
  const slides1 = document.querySelector(".slides1");
  const jumlah = slides1.children.length;

  index1 = (index1 + arah + jumlah) % jumlah;

  slides1.style.transform =
    `translateX(-${index1 * 100}%)`;
}

