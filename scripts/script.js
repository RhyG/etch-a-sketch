let cellColour = "black";
const grid = document.querySelector('#grid');

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
    resetGrid();
})

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', function() {
    cellColour = 'rainbow';
})

const gridInit = function (cellsPerRow = 20, gridWidth = 600) {
    grid.style.width = `${gridWidth}px`;
    grid.style.height = grid.style.width;
    const totalCells = cellsPerRow ** 2

    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(cellsPerRow);
        grid.appendChild(cell);
        cell.addEventListener('mouseenter', function (e) {
            paintColour(e.target, cellColour);
        });
    }
}

createCell = function (cellsPerRow) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `calc(100%/${cellsPerRow})`;
    cell.style.height = cell.style.width;
    return cell;
}

const drawCell = function (grid, cell) {
    grid.appendChild(cell);
}

const paintColour = function(element, colour) {
    if (colour === 'rainbow') {
        colour = '#'+(Math.random()*(1<<24)|0).toString(16);
    }
    element.style.background = colour;
}

const resetGrid = function() {
    grid.innerHTML = "";
    gridInit();
}