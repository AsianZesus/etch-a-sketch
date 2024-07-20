const GRIDSIZE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value}`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIZE}px`;

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
  const numOfSquares = squaresPerSide * squaresPerSide;
  const widthOrHeight = `${GRIDSIZE / squaresPerSide - 2}px`;

  for (let i = 0; i < numOfSquares; i++) {
    const GRIDCELL = document.createElement("div");

    // When we have to increase the num of grids, it will be easier through this formula
    // 2 px sets the size of the grid lines
    GRIDCELL.style.width = GRIDCELL.style.height = widthOrHeight;

    GRIDCELL.classList.add("cell");

    sketchArea.appendChild(GRIDCELL);

    GRIDCELL.addEventListener("mouseover", setBackgroundColor);
  }
}

function removeGridCells() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

createGridCells(16);
