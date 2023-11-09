import React from "react";
import Count from "./Count";

const Card = ({ movies, onVoteChange }) => {
    return (
        <div className="flex mx-auto px-10 flex-col overflow-scroll scrool">
            <div className="mx-10">
                {movies.map(({ poster_path, title, id, vote_average }) => (
                    <div key={id} className="flex gap-8 my-4 items-center justify-between">
                        <Count vote_average={vote_average} onVoteChange={(newVote) => onVoteChange(id, newVote)} />
                        <div className="flex items-center gap-4">
                            <p className="font-semibold text-white">{title}</p>
                            <img width={50} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;