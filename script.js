// Variables
let size = 16;

// DOM refs
const e_gridBoard = document.querySelector(".sketch");

// Functions
function makeGrid(size) {
  e_gridBoard.style.setProperty("--num-size", size);
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    e_gridBoard.appendChild(gridItem);
  }
}

makeGrid(size);
