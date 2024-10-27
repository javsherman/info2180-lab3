document.addEventListener("DOMContentLoaded", () => {
    // Exercise 1 - Layout the board
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });

    // Exercise 2 - Add an X or O to a square when clicked
    let currentPlayer = "X";
    const gameState = Array(9).fill(null);

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            // Check if square is already filled
            if (!gameState[index]) {

                // Update square with current player and add class
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                // Update game state
                gameState[index] = currentPlayer;

                // Toggle player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        // Exercise 3 - Add hover effect on mouse enter and remove on mouse leave
        square.addEventListener("mouseenter", () => {
            if (!gameState[index]) {
                square.classList.add("hover");
            }
        });
        
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
        });
    });
});
