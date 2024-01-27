document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById("gridContainer");

    newGrid(16);
        
    const newGridBtn = document.getElementById("newGridBtn");
    newGridBtn.addEventListener("click", () => {
        let size = prompt("How many pixels wide and high")
        newGrid(size);
    });

    function newGrid(size) {
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