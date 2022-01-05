const resize = document.querySelector(".resize");
const clear = document.querySelector(".clear");
const sketchGrid = document.querySelector(".sketchGrid");
let size = 16;

function createGrid(size) {
    let divSize = sketchGrid.offsetWidth / size;
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = divSize + "px";
        square.style.height = divSize + "px";
        sketchGrid.append(square);
        square.addEventListener("mouseover", () =>{
            square.classList.add("black");
        });
        square.addEventListener("click", () =>{
            square.classList.add("black");
        });
    }
    
}

function removeGrid() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.remove();
    });
}

function clearGrid() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.classList.remove("black");
    });
}

window.onload = function() {
    createGrid(size);
  };

function reGridWindowResize() {
    let divSize = sketchGrid.offsetWidth / size;
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

        removeGrid();
        createGrid(size);
    } else console.log("fail");
});

clear.addEventListener("click", () => {
    clearGrid();
});