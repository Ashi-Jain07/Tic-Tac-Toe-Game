"use client"

import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { PlayerContext } from '../playerContext';
import { useRouter } from 'next/navigation';

function GameBoard() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
    const [winner, setWinner] = useState(null);
    const { player1, player2 } = useContext(PlayerContext)
    const router = useRouter()

    // Handle a square click
    function handleSquareClick(index) {
        // Ignore if the square is already filled or game is over
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isPlayer1Turn ? 'X' : 'O';
        setBoard(newBoard);
        setIsPlayer1Turn(!isPlayer1Turn);
    };

    // Check if there's a winner
    function checkWinner(board) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        // Return 'Tie' if the board is full with no winner
        return board.every(cell => cell) ? 'Tie' : null;
    };

    // Check for winner after each move
    useEffect(() => {
        const gameWinner = checkWinner(board);
        if (gameWinner) {
            setWinner(gameWinner);
            onGameEnd(gameWinner === 'Tie' ? 'Tie' : gameWinner === 'X' ? player1 : player2);
        }
    }, [board]);

    //After game end save the result
    async function onGameEnd(winner) {
        await fetch("http://localhost:5500/save", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ player1, player2, winner }),
        });
        alert(winner == "Tie" ? winner : `${winner} wins`)
        router.push("/ResultTable")
    }

    // Reset the game
    function resetGame() {
        setBoard(Array(9).fill(null));
        setIsPlayer1Turn(true);
        setWinner(null);
    };

    return (
        <>
            <div className='flex justify-center text-center mt-14'>
                <div>
                    <h2 className='text-white text-3xl mb-2'>Turn:</h2>
                    <h2 className='text-white text-2xl'>{winner ? (winner === 'Tie' ? "It's a tie!" : `${winner === 'X' ? player1 : player2} wins!`) : `${isPlayer1Turn ? `${player1} - x` : `${player2} - o`}`}</h2>
                    <div className="grid grid-cols-3 gap-1 mt-5">
                        {board.map((value, index) => (
                            <div
                                key={index}
                                className="w-24 h-24 flex items-center justify-center text-3xl bg-slate-100 cursor-pointer hover:bg-slate-300"
                                onClick={() => handleSquareClick(index)}>
                                {value}
                            </div>
                        ))}
                    </div>
                    <button className='mt-5 text-xl border border-black p-2 rounded-md bg-cyan-400 cursor-pointer' onClick={resetGame}>Reset Game</button>
                </div>
            </div>
        </>
    );
};

export default GameBoard;