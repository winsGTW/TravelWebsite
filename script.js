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


// let index = 0;

// function geser(arah) {
//   const slides = document.querySelector(".slides");
//   const jumlah = slides.children.length;

//   index = (index + arah + jumlah) % jumlah;

//   slides.style.transform =
//     `translateX(-${index * 100}%)`;
// }


let currentSlide = 0;

function moveSlide(direction) {
  const track = document.getElementById("expectTrack");
  const total = track.children.length;

  currentSlide = (currentSlide + direction + total) % total;

  track.style.transform =
    `translateX(-${currentSlide * 100}%)`;
}


