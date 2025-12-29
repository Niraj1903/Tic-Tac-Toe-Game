import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  return (
    <>
      <div className="flex justify-center min-h-screen items-center bg-slate-950">
        <h1 className="text-5xl font-semibold text-center mb-8 text-white">
          Tic Tac Toe
        </h1>
        <div>game status</div>
        <div className=" gap-1 grid grid-cols-3 rounded-xl mb-6 overflow-hidden"></div>
        <button className="w-full py-3 text-lg text-white rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200">
          NEW GAME
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
