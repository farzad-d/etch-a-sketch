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

container.addEventListener("mouseover", (e) => {
  let pixel = e.target;
  pixel.classList.add("fill");
  // pixel.style.backgroundColor = "black";
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
