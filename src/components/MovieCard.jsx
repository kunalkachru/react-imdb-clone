import React from "react";

function MovieCard({
  posterpath,
  name,
  handleaddtowatchlist,
  handleremovefromwatchlist,
  movieobj,
  watchlist,
}) {
  function doesContain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        return true;
      }
    }
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterpath}`,
      }}
    >
      {doesContain(movieobj) ? (
        <div
          onClick={() => handleremovefromwatchlist(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleaddtowatchlist(movieobj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;

//https://image.tmdb.org/t/p/original/<poster_path>
