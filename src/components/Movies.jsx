import React from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";

function Movies({
  handleaddtowatchlist,
  handleremovefromwatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function PreviousPage() {
    if (pageNo !== 1) {
      setPageNo(pageNo - 1);
    } else {
      setPageNo(1);
    }
  }

  function NextPage() {
    setPageNo(pageNo + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d278e4bbfc674ab1305013395927c603&language=en-US&page=${pageNo}`
      )
      .then(function (response) {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((MovieObj) => {
          return (
            <MovieCard
              posterpath={MovieObj.poster_path}
              name={MovieObj.original_title}
              handleaddtowatchlist={handleaddtowatchlist}
              handleremovefromwatchlist={handleremovefromwatchlist}
              movieobj={MovieObj}
              key={MovieObj.id}
              watchlist={watchlist}
            />
          );
        })}
        {/* <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </div>
      <Pagination pageno={pageNo} prevpage={PreviousPage} nextpage={NextPage} />
    </div>
  );
}

export default Movies;

//working API - https://api.themoviedb.org/3/movie/popular?api_key=d278e4bbfc674ab1305013395927c603&language=en-US&page=1
