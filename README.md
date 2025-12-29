# TicTacToe Game

## Overview

This is a simple **TicTacToe** game built with **React**. It allows two players to take turns playing as **X** and **O** on a 3x3 grid. The game includes functionality to detect a winner, handle draws, and restart the game with a "New Game" button.

## Features

- Two-player gameplay (Player X and Player O).
- Detection of a winner (horizontal, vertical, and diagonal).
- Detection of a draw when the board is full but no winner.
- Animated display for the winner.
- Ability to restart the game.

## Technologies Used

- **React** for building the user interface.
- **Tailwind CSS** for styling the components.

## Installation

To run the TicTacToe game locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tic-tac-toe.git
cd tic-tac-toe
```

### 2. Install dependencies

Make sure you have **Node.js** and **npm** installed. Then run:

```bash
npm install
```

### 3. Start the development server

After the dependencies are installed, run the following command to start the development server:

```bash
npm start
```

This will open the game in your browser at `http://localhost:3000`.

## How the Game Works

1. **Gameplay**:

   - Players alternate turns, starting with Player X.
   - On each turn, the current player clicks on an empty square in the grid.
   - The square will either be filled with an "X" or an "O", depending on whose turn it is.
   - The game continues until either a player wins or all squares are filled, resulting in a draw.

2. **Winning Conditions**:

   - The game checks all possible winning combinations (3 horizontal, 3 vertical, and 2 diagonal lines) after each move.
   - If a player completes one of these combinations, they are declared the winner.

3. **Draw**:

   - If all squares are filled and no player has won, the game is considered a draw.

4. **Restarting the Game**:

   - The game can be reset at any time by clicking the **"NEW GAME"** button.

## Code Breakdown

### Key Components

- **State Management**:

  - `board`: An array of 9 elements representing the 9 squares of the TicTacToe grid. Each square is either `null` (empty), `"X"`, or `"O"`.
  - `isXTurn`: A boolean value indicating whether it's Player X's turn (`true` for X, `false` for O).

- **Functions**:

  - `getWinner`: Checks if there's a winning combination on the board.
  - `handleSquareClick`: Handles a player's move by updating the board when a square is clicked.
  - `getGameStatus`: Returns the current game status, such as "Winner: X", "It's a Draw!", or "Next Player: X/O".
  - `resetGame`: Resets the game state back to the initial state (empty board and Player X starting).

- **UI**:

  - A 3x3 grid is rendered using a **CSS Grid layout**.
  - Buttons are used to represent each square, and their text content changes to `"X"` or `"O"` depending on the current player's turn.
  - A message at the top displays the current game status (winner, draw, or next player).
  - A "New Game" button allows players to reset the board.

### Example of the `getWinner` Function

```js
const getWinner = (squares) => {
  for (let combination of winningCombination) {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
```

This function checks for a winner by comparing the values of the squares in each possible winning combination. If three squares in a row have the same value, it returns that value (either `"X"` or `"O"`).

## Styling

This project uses **Tailwind CSS** for styling, which is a utility-first CSS framework that allows for rapid styling of components using classes directly in the HTML.

Here’s an example of how Tailwind classes are used to style the grid:

```jsx
<div className="gap-1 grid grid-cols-3 rounded-xl mb-6 overflow-hidden">
  {board.map((square, index) => (
    <button
      key={index}
      onClick={() => handleSquareClick(index)}
      className={`h-32 w-full bg-gray-800 rounded-md text-6xl font-light transition-colors duration-200 hover:bg-gray-600 ${
        square === "X" ? "text-white" : "text-slate-400"
      }`}
      aria-label={`Square ${index + 1} - ${square ? square : "empty"}`}
    >
      {square}
    </button>
  ))}
</div>
```

This code creates a grid layout for the TicTacToe board, with each square styled as a button that changes color on hover.

## Contributing

Feel free to fork the repository, make changes, and create pull requests if you'd like to contribute to this project!

## License

This project is open-source and available under the [MIT License](LICENSE).

---
