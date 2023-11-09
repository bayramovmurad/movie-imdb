import React, { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const Count = ({ vote_average, onVoteChange }) => {
    const [count, setCount] = useState(vote_average);

    const IncCount = () => {
        setCount(count + 1);
        onVoteChange(count + 1);
    }

    const DecCount = () => {
        setCount(count - 1);
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



