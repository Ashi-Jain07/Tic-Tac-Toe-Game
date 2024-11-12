"use client"
import React from 'react';
import { useContext } from 'react';
import { PlayerContext } from '../playerContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Home() {

    const { player1, setPlayer1, player2, setPlayer2 } = useContext(PlayerContext)
    const router = useRouter();

    function handleAddPlayer() {
        if (!player1 || !player2) {
            return alert("Enter player Name")
        }
        router.push("/GameBoard")
    }

    return (
        <div className=' flex justify-center'>
            <div className='text-center'>
                <h1 className='mt-16 text-4xl font-bold text-white'>Tic-Tac-Toe Game</h1>
                <img src='/game-logo.png' width="100px" height="100px" className='ml-28 mt-8'></img>
                <input placeholder="Player 1" className='border border-black shadow-cyan-600 shadow-md mt-14 m-2 p-2 rounded-md text-lg w-80' value={player1} onChange={(e) => setPlayer1(e.target.value)} /><br />
                <input placeholder="Player 2" className='border border-black shadow-cyan-600 shadow-md m-2 p-2 rounded-md text-lg w-80' value={player2} onChange={(e) => setPlayer2(e.target.value)} /><br />
                <button onClick={handleAddPlayer} className='mt-5 text-xl border border-black p-2 rounded-md bg-cyan-400'>Start Game</button><br />
                <Link href="/ResultTable">
                    <button className='mt-5 text-xl border border-black p-2 rounded-md bg-cyan-400'>Show Results</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;