// App.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const apiUrl = "https://api.themoviedb.org/3/discover/movie";
  const apiKey = "1cf50e6248dc270629e802686245c2c8";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const resp = await axios(apiUrl, {
        params: {
          sort_by: "popularity.desc",
          api_key: apiKey,
        },
      });
      if (resp.data.results) {
        setMovies(resp.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVoteChange = (id, newVote) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, vote_average: newVote };
      }
      return movie;
    });
    const sortedMovies = updatedMovies.sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setMovies(sortedMovies);
  };

  const shuffleMovies = () => {
    const shuffledMovies = [...movies].sort(() => Math.random() - 0.5);
    setMovies(shuffledMovies);
  };

  return (
    <div className="flex mx-auto mt-20 w-[1000px] h-[600px] bg-red-500 rounded-md">
      <div className="flex w-[400px] flex-col items-center justify-center bg-purple-400">
        <img
          width={300}
          src="https://static.amazon.jobs/teams/53/thumbnails/IMDb_Jobs_Header_Mobile.jpg?1501027253"
          alt=""
        />
        <button
          onClick={shuffleMovies}
          className="border-4 border-white hover:active:scale-95 rounded-[25%] w-52 h-10 mt-10 font-bold text-white bg-red-500"
        >
          Random Movie
        </button>
      </div>
      <Card movies={movies} onVoteChange={handleVoteChange} />
    </div>
  );
};

export default App;
