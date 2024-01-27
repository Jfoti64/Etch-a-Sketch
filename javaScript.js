document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById("gridContainer");

    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        gridContainer.appendChild(gridRow);
        for (let j = 0; j < 16; j++) {
            const gridPixel = document.createElement("div")
            gridPixel.classList.add("pixel");
            gridRow.appendChild(gridPixel);
        }
    }

        const gridPixels = document.querySelectorAll(".pixel");
        gridPixels.forEach(function(gridPixel) {
            gridPixel.addEventListener("mouseover", () => {
                gridPixel.style.backgroundColor = "red";
            });
        });
        
});