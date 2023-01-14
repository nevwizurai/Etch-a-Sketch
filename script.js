// Variable
let makeDimension = 20;

// Element
const el_container = document.querySelector("#grid-container");

// Function
function handleLoad() {
  el_container.style.setProperty("--create-row", makeDimension);
  el_container.style.setProperty("--create-col", makeDimension);
  for (let i = 0; i < makeDimension * makeDimension; i++) {
    let cell = document.createElement("div");
    el_container.appendChild(cell).className = "grid-item";
  }
}
