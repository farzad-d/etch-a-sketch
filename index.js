const container = document.querySelector(".container");

function gridCreator(gridSize = 16) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((sqr) => {
    sqr.style.height = `${640 / gridSize}px`;
    sqr.style.width = `${640 / gridSize}px`;
  });
}

let opc = 0;

container.addEventListener("mouseover", (e) => {
  let pixel = e.target;

  if (!pixel.classList.contains("square")) return;

  const randomHex =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

  if (opc < 1) opc += 0.05;

  pixel.style.opacity = opc;
  pixel.style.backgroundColor = randomHex;
});

function gridSizeSelector() {
  opc = 0;
  const size = +prompt("Enter the grid size:");
  if (size > 100 || size < 2) {
    alert("Grid size must range from 2 to 100.");
  } else {
    return size;
  }
}

// const btn = document.getElementById("grid-size");
const btn = document.querySelector("#grid-size");

btn.addEventListener("click", () => {
  container.innerHTML = "";
  gridCreator(gridSizeSelector());
});

gridCreator();
