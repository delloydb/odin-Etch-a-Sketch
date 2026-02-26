// Etch‑a‑Sketch – with random colors + progressive darkening (extra credit)

const container = document.getElementById('container');
const newGridBtn = document.getElementById('newGridBtn');
const DEFAULT_SIZE = 16;
const CONTAINER_SIZE = 960; // px

// Creates a grid of size x size squares
function createGrid(size) {
    // Remove any existing grid
    container.innerHTML = '';

    // Calculate square dimensions (border-box includes border)
    const squareSize = CONTAINER_SIZE / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Attach the drawing event (mouseenter)
        square.addEventListener('mouseenter', colorSquare);

        container.appendChild(square);
    }
}

// Handles the coloring / darkening effect
function colorSquare(e) {
    const square = e.target;

    // Initialize data attributes if this square hasn't been touched yet
    if (!square.dataset.darkness) {
        // Generate random base color (0-255 for R, G, B)
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        square.dataset.baseR = r;
        square.dataset.baseG = g;
        square.dataset.baseB = b;
        square.dataset.darkness = 0; // start at 0 (no darkening)
    }

    // Increase darkness level (capped at 10)
    let darkness = parseInt(square.dataset.darkness);
    if (darkness < 10) {
        darkness++;
        square.dataset.darkness = darkness;
    }

    // Retrieve base color
    const baseR = parseInt(square.dataset.baseR);
    const baseG = parseInt(square.dataset.baseG);
    const baseB = parseInt(square.dataset.baseB);

    // Calculate darkened color: new = base * (1 - darkness/10)
    const factor = 1 - darkness / 10;
    const newR = Math.round(baseR * factor);
    const newG = Math.round(baseG * factor);
    const newB = Math.round(baseB * factor);

    square.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
}

// Prompt user for new grid size and rebuild
function requestNewGrid() {
    let newSize = prompt('Enter number of squares per side (max 100):', DEFAULT_SIZE);

    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a positive number.');
        return;
    }
    if (newSize > 100) {
        alert('Maximum allowed is 100. Using 100.');
        newSize = 100;
    }

    createGrid(newSize);
}

// Event listener for the button
newGridBtn.addEventListener('click', requestNewGrid);

// Initialize the default 16x16 grid
createGrid(DEFAULT_SIZE);
