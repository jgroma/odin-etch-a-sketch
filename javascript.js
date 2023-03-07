const container = document.querySelector('.container')

let sizeButton = document.querySelector('.size-button')


let gridRow = 16;


let gridSize = gridRow * gridRow;

let pixel;




function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.width = `${400 / gridRow}px`;
        pixel.style.height = `${400 / gridRow}px`;
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', () =>{
            pixel.style.backgroundColor = 'black';
        });
        
    };
}

createGrid();

function hoverEffect() {
    pixel.style.backgroundColor = 'black';
}

function removePixels() {
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach(element => {
        element.remove();
     });

};

function changeSize() {
    removePixels()
    createGrid();
    pixel.style.backgroundColor = 'white';
}

function promptMe () {
    let userSize = prompt("Please choose a number below 100");
    if (userSize > 100) {
        alert("The grid size cannot be larger than 100x100.")
    } else {
    gridRow = userSize;
    changeSize();
    }
}