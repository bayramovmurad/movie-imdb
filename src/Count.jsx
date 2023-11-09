import React, { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const Count = ({ vote_average, onVoteChange }) => {
    const count = vote_average;

    const IncCount = () => {
        
        onVoteChange(count + 1);
    }

    const DecCount = () => {
        
        onVoteChange(count - 1);
    }

    return (
        <div className="flex flex-col text-white items-center">
            <button onClick={IncCount}>
                <AiFillCaretUp />
            </button>
            <span>
                {count.toFixed(1)}
            </span>
            <button onClick={DecCount}>
                <AiFillCaretDown />
            </button>
        </div>
    )
}

export default Count;



