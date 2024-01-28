document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById("gridContainer");

    newGrid(16);
        
    const newGridBtn = document.getElementById("newGridBtn");
    newGridBtn.addEventListener("click", () => {
        let size = prompt("How many pixels wide and high (max 100)?");
        size = parseInt(size);
        if (size > 0 && size <= 100) {
            newGrid(size);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    });

    function newGrid(size) {
        // Calculate size of each square
        const squareSize = 600 / size; // Assuming the total width of the grid container is 600px

        // Delete old grid
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        // Create new grid
        for (let i = 0; i < size; i++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("row");
            gridContainer.appendChild(gridRow);
            for (let j = 0; j < size; j++) {
                const gridPixel = document.createElement("div")
                gridPixel.classList.add("pixel");
                gridPixel.style.width = `${squareSize}px`; // Set width of square
                gridPixel.style.height = `${squareSize}px`; // Set height of square
                gridRow.appendChild(gridPixel);
            }
        }
        
        // Add eventListener to each pixel
        const gridPixels = document.querySelectorAll(".pixel");
        gridPixels.forEach(function(gridPixel) {
            gridPixel.addEventListener("mouseover", () => {
            gridPixel.style.backgroundColor = "red";
            });
        });
    };
});
