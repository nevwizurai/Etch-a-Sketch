// Variables
let size = 16;
let color = "#000";
let colorMode = "black";

// DOM refs
const e_gridBoard = document.querySelector(".sketch");
const e_blackMode = document.querySelector("#black-mode");
const e_randomMode = document.querySelector("#random-mode");
const e_eraserMode = document.querySelector("#eraser-mode");
const e_dimensionText = document.querySelector("#dimension-text");
const e_dimensionSlider = document.querySelector("#dimension-slider");
const e_dimensionSet = document.querySelector("#dimension-set");
const e_dimensionReset = document.querySelector("#dimension-reset");

// Functions
// Onload Function
function handleLoad() {
  makeGrid(size);
  e_blackMode.addEventListener("click", () => changeMode("black"));
  e_randomMode.addEventListener("click", () => changeMode("random"));
  e_eraserMode.addEventListener("click", () => changeMode("eraser"));
  e_dimensionText.innerHTML = `Dimension: ${size} x ${size}`;
  e_dimensionSlider.addEventListener("input", (e) => hChangeDimension(e));
  e_dimensionReset.addEventListener("click", () => makeGrid(size));
  e_dimensionSet.addEventListener("click", () => hSetDimension());
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

function hChangeDimension({ target }) {
  let string = "";
  size != target.value
    ? (string = `Changing to: ${target.value}x${target.value}`)
    : (string = `Dimension: ${size}x${size}`);
  e_dimensionText.innerHTML = string;
}

function hSetDimension() {
  let newDimension = parseInt(e_dimensionSlider.value);
  if (size === newDimension) return;

  size = newDimension;
  makeGrid(size);
  e_dimensionText.innerHTML = `Dimension: ${size}x${size}`;
}
