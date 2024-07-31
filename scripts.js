
const grid_size = 16
const grid = document.getElementById("grid");


function initializeGrid(size){
    for(i=0;i<grid_size;i++){
        for(j=0;j<grid_size;j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.addEventListener("mouseover",changeColor);
            gridElement.addEventListener("mousedown",changeColor);
            grid.appendChild(gridElement);
        }
    }
}

function chnageColor(e){
    
}