import React, { useState } from "react";
import { Square } from "../square/square";
import './tic-tac-toe.scss'
import { calculateWinner } from "../calculateWinner/calculatewinner";
import { Button } from '@mui/material'

export const TicTacToe: React.FC = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [reset, setReset] = useState(false)
    const winner = calculateWinner(squares);
    let status: any;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O")
    }
    const handleClick = (i: any) => {
        const nextSquares = squares.slice()
        if (xIsNext) nextSquares[i] = "X"
        else nextSquares[i] = "O"
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }
    const resetResult = () => {
        setReset(true)
        setSquares(Array(9).fill(''))
    }
    return (
        <>
            <div className="Board">
                <div className="wrapper">
                    <div className="board-row">
                        <div className="status">{status}</div>
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    </div>
                    <div className="board-row">
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    </div>
                    <div className="board-row">
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
                    </div>
                </div>
                <Button className="btn-reset" onClick={() => resetResult()}><a href="">Reset</a></Button>
            </div>
        </>
    )
}