const DEFAULT_COLOR = '#000000'
const DEFAULT_SIZE = 16

const currSize = 16
const grid = document.getElementById("grid");

console.log("start of java script");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const clearBtn = document.getElementById('clearBtn')
clearBtn.onclick = () => reloadGrid();

function reloadGrid() {
    //clearGrid()
    initializeGridGrid(currSize);
}


function initializeGrid(size){
    for(i=0;i<size;i++){
        for(j=0;j<size;j++){
            console.log("in loop");
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.addEventListener("mouseover",changeColor);
            gridElement.addEventListener("mousedown",changeColor);
            grid.appendChild(gridElement);
        }
    }
}

function changeColor(e){
    if(e.type=="mouseover"&& !mouseDown){
        return;
    }
    e.target.style.backgroundColor = DEFAULT_COLOR;
}

window.onload = () => {
    initializeGrid(DEFAULT_SIZE);
}