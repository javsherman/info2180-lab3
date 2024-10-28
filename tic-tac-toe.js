document.addEventListener("DOMContentLoaded", () => {
    // Exercise 1 - Layout the board
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
        square.classList.add("square");
    });

    // Exercise 2 - Add an X or O to a square when clicked
    let currentPlayer = "X";
    const gameState = Array(9).fill(null);
    const statusDiv = document.querySelector("#status");
    const newGameBtn = document.querySelector(".btn");

    // Function to check for winner
    const checkWinner = () => {
        // Winning combinations (indices)
        const winningCombos = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal top-left to bottom-right
            [2, 4, 6]  // diagonal top-right to bottom-left
        ];

        // Check each winning combination
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameState[a] && 
                gameState[a] === gameState[b] && 
                gameState[a] === gameState[c]) {
                return gameState[a]; // Return the winning player (X or O)
            }
        }
        return null; // No winner yet
    };

    // Function to reset the game
    const resetGame = () => {
        // Reset game state array
        gameState.fill(null);
        
        // Reset current player to X
        currentPlayer = "X";
        
        // Clear all squares
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
        
        // Reset status message
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
    };

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            // Check if square is already filled
            if (!gameState[index]) {
                // Update square with current player and add class
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                // Update game state
                gameState[index] = currentPlayer;

                // Check for winner
                const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                } else {
                    // Toggle player
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
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

    // Add click event listener to New Game button
    newGameBtn.addEventListener("click", resetGame);
});