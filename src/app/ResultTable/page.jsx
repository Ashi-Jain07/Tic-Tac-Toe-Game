"use client"

import React, { useEffect, useState } from 'react';

function ResultTable() {
    const [results, setResults] = useState([]);

    //Fetch result data from database
    useEffect(() => {
        fetch("http://localhost:5500/results")
            .then(res => res.json())
            .then(data => setResults(data))
            .catch(error => console.error('Error fetching results:', error));
    }, []);

    return (
        <div className='flex justify-center'>
            <table className='mt-8 mb-5 sm:border-separate sm:border-spacing-4 border border-black bg-white'>
                <thead className='border-b border-black'>
                    <tr className='sm:text-2xl text-center'>
                        <th className='py-2 px-2 sm:px-10 border-r border-b border-black'>Date</th>
                        <th className='py-2 px-2 sm:px-10 border-r border-b border-black'>Player 1</th>
                        <th className='py-2 px-2 sm:px-10 border-r border-b border-black'>Player 2</th>
                        <th className='py-2 px-2 sm:px-10 border-r border-b border-black'>Winner</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result._id} className='text-center text-xl'>
                            <td className='py-2 px-2 sm:px-10 border-r border-b border-black'>{new Date(result.date).toLocaleDateString()}</td>
                            <td className='py-2 px-2 sm:px-10 border-r border-b border-black'>{result.player1}</td>
                            <td className='py-2 px-2 sm:px-10 border-r border-b border-black'>{result.player2}</td>
                            <td className='py-2 px-2 sm:px-10 border-r border-b border-black font-semibold'>{result.winner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;