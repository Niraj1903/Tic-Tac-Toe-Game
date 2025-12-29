import { useState } from "react";

const TicTacToe = () => {
  const boardData = Array(9).fill(null);
  const [board, setBoard] = useState(boardData);
  const [isXTurn, setIsXTurn] = useState(true);
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const getWinner = (squares) => {
    for (let combination of winningCombination) {
      const [a, b, c] = combination;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleSquareClick = (index) => {
    if (board[index] || getWinner(board)) return;

    const updateBoard = [...board];

    updateBoard[index] = isXTurn ? "X" : "O";
    setBoard(updateBoard);
    setIsXTurn(!isXTurn);
  };

  const getGameStatus = () => {
    const winner = getWinner(board);
    if (winner) return `Winner : ${winner}`;

    if (board.every((square) => square !== null)) {
      return "Its a Draw!";
    }
    return `Next Player : ${isXTurn ? "X" : "0"}`;
  };

  const resetGame = () => {
    setBoard(boardData);
    setIsXTurn(true);
  };

  return (
    <>
      <div className="flex justify-center min-h-screen items-center bg-slate-950">
        <div className="w-full max-w-[400px] mx-5">
          <h1 className="text-5xl font-semibold text-center mb-8 text-white">
            Tic Tac Toe
          </h1>

          <div
            className={`text-center mb-6 ${
              getWinner(board)
                ? "text-2xl font-bold text-green-400 animate-bounce"
                : "text-xl text-white"
            }`}
          >
            {getGameStatus()}
          </div>
          <div className=" gap-1 grid grid-cols-3 rounded-xl mb-6 overflow-hidden">
            {board.map((square, index) => (
              <button
                key={index}
                onClick={() => handleSquareClick(index)}
                className={`h-32 w-full bg-gray-800 rounded-md text-6xl font-light transition-colors duration-200 hover:bg-gray-700 ${
                  square === "X" ? "text-white" : "text-slate-400"
                }`}
              >
                {square}
              </button>
            ))}
          </div>
          <button
            onClick={resetGame}
            className="w-full py-3 text-lg text-white rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200"
          >
            NEW GAME
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
