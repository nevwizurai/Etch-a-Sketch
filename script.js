// Variables
let size = 16;
let color = "#000";
let colorMode = "black";

// DOM refs
const e_gridBoard = document.querySelector(".sketch");
const e_blackMode = document.querySelector("#black-mode");
const e_randomMode = document.querySelector("#random-mode");
const e_eraserMode = document.querySelector("#eraser-mode");

// Functions
// Onload Function
function handleLoad() {
  e_blackMode.addEventListener("click", () => changeMode("black"));
  e_randomMode.addEventListener("click", () => changeMode("random"));
  e_eraserMode.addEventListener("click", () => changeMode("eraser"));
}

function clearGrid() {
  e_gridBoard.replaceChildren();
}

function makeGrid(size) {
  clearGrid();
  e_gridBoard.style.setProperty("--num-size", size);
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.cursor = "pointer";
    gridItem.addEventListener("mouseover", hGridOver);
    e_gridBoard.appendChild(gridItem);
  }
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function hGridOver({ target }) {
  switch (colorMode) {
    case "black":
      color = "#000";
      break;
    case "random":
      color = getRandomColor();
      break;
    case "eraser":
      color = "#fff";
      break;
  }
  target.style.backgroundColor = color;
}

function changeMode(mode) {
  colorMode = mode;
  e_blackMode.classList.remove("active");
  e_randomMode.classList.remove("active");
  e_eraserMode.classList.remove("active");
  switch (mode) {
    case "black":
      e_blackMode.classList.add("active");
      break;
    case "random":
      e_randomMode.classList.add("active");
      break;
    case "eraser":
      e_eraserMode.classList.add("active");
      break;
  }
}

makeGrid(size);
