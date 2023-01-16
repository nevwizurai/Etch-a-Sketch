// Variables
let size = 16;
let color = "#000";

// DOM refs
const e_gridBoard = document.querySelector(".sketch");

// Functions
function clearGrid() {
  e_gridBoard.replaceChildren();
}

function makeGrid(size) {
  e_gridBoard.style.setProperty("--num-size", size);
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.cursor = "pointer";
    gridItem.addEventListener("mouseover", hGridOver);
    e_gridBoard.appendChild(gridItem);
  }
}

const hGridOver = ({ target }) => {
  target.style.backgroundColor = color;
  target.removeEventListener("mouseover", hGridOver);
};

makeGrid(size);
