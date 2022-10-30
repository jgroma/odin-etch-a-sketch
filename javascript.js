const container = document.querySelector('.container')

let gridRow = 16;

let gridSize = gridRow * gridRow;

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.style.width = `${400 / gridRow}px`;
        pixel.style.height = `${400 / gridRow}px`;
        container.appendChild(pixel);
    }
}

createGrid();