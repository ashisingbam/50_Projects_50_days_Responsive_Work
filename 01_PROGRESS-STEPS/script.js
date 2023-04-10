const progressBox = document.querySelectorAll(".progress-box");
const progressFill = document.querySelector("#progress");
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");

let width = 0;
let progSecWidth = parseInt(100 / (progressBox.length - 1));
let currBox = 0;

nextButton.addEventListener("click", () => {
  if (width < 99) {
    width = width + progSecWidth;
    currBox++;
    progressFill.style.width = `${width}%`;
    progressBox[currBox].style.borderColor = "#3498DB";
    prevButton.classList.remove("disabled");
    if (currBox === progressBox.length - 1) {
      nextButton.classList.add("disabled");
    }
  }
});

prevButton.addEventListener("click", () => {
  if (width > 0) {
    width = width - progSecWidth;
    progressBox[currBox].style.borderColor = "#e0e0e0";
    currBox--;
    progressFill.style.width = `${width}%`;
    nextButton.classList.remove("disabled");
    if (currBox === 0) {
      prevButton.classList.add("disabled");
    }
  }
});
