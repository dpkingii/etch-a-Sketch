const DEFAULT_COLOR = '#000000'
const DEFAULT_SIZE = 16

const currSize = 16
const grid = document.getElementById("grid");


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const clearBtn = document.getElementById('clearBtn')
clearBtn.onclick = () => reloadGrid();

function reloadGrid() {
    console.log("clear button pressed!")
    //clearGrid()
    //initializeGrid(currSize);
}


function initializeGrid(size){
    for(i=0;i<size;i++){
        for(j=0;j<size;j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.addEventListener("mouseover",changeColor);
            gridElement.addEventListener("mousedown",changeColor);
            grid.appendChild(gridElement);
        }
    }
}

function changeColor(e){
    console.log("clicked");
    if(e.type=="mouseover"&& !mouseDown){
        return;
    }
    e.target.style.backgroundColor = DEFAULT_COLOR;
}

window.onload = () => {
    initializeGrid(DEFAULT_SIZE);
}