import React from "react";
import './square.scss'
interface Prop {
    value:  string
    onSquareClick: () => void
}
export const Square: React.FC<Prop> = ({value, onSquareClick}) => {
    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}