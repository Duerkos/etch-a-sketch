const resize = document.querySelector(".resize");
const sketchGrid = document.querySelector(".sketchGrid");
let size = 20;

function createGrid(size) {
    // We substract 2 because we decided to put a border of 1px always.
    let divSize = sketchGrid.offsetWidth / size - 2;
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = divSize + "px";
        square.style.height = divSize + "px";
        sketchGrid.append(square);
    }
    
}

function clearGrid() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.remove();
    });
}

window.onload = function() {
    createGrid(size);
  };

function reGridWindowResize() {
    let divSize = sketchGrid.offsetWidth / size - 2;
    console.log("sketchsize" + sketchGrid.offsetWidth);
    console.log("squaresize" + divSize);
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.style.width = divSize + "px";
        square.style.height = divSize + "px";
    });
}

let timeout = false; // holder for timeout id
const delay = 100; // delay after event is "complete" to run callback

window.addEventListener('resize', function() {
    // clear the timeout
clearTimeout(timeout);
// start timing for event "completion"
timeout = setTimeout(reGridWindowResize, delay);
});

resize.addEventListener("click", () => {
    size = prompt("How many squares by side?. Max 50.");
    size = Number(size);
    if (typeof(size) == "number") {
        if (size>50) {
            size = 50;
        } else if (size<1) {
            size = 1;
        } else if (isNaN(size)) {
            size = 1;
        } else size = Math.floor(size);

        clearGrid();
        createGrid(size);
    } else console.log("fail");
});