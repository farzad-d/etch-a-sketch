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
    sqr.dataset.opacity = "0";
  });
}

container.addEventListener("mouseover", (e) => {
  let pixel = e.target;

  if (!pixel.classList.contains("square")) return;

  const randomHex =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

  let currentOpacity = parseFloat(pixel.dataset.opacity) || 0;

  if (currentOpacity < 1) {
    currentOpacity = Math.min(1, currentOpacity + 0.1);
    pixel.dataset.opacity = currentOpacity;
    pixel.style.opacity = currentOpacity;
    pixel.style.backgroundColor = randomHex;
  }
});

function gridSizeSelector() {
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
