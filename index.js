const container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

container.style.height = `${16 * 32}px`;
container.style.width = `${16 * 32}px`;

container.addEventListener("mouseover", (e) => {
  let pixel = e.target;
  pixel.classList.add("fill");
  // pixel.style.backgroundColor = "black";
});
