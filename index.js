const gridcontainer = document.getElementById("grid-container");
const gridSize = 16;
const resetbutton = document.getElementById("reset-btn");

resetbutton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")
    squares.forEach(squares => {
        squares.style.backgroundColor = 'white'
    })
}
)


function createGrid(size) {

    gridcontainer.innerHTML = "";

    gridcontainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridcontainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'black';
        })

        gridcontainer.appendChild(square);

    }

}

createGrid(gridSize);