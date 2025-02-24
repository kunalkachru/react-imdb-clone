import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import genreids from "../utility/genre";

function WatchList({ watchlist, setlist, handleremovefromwatchlist }) {
  const [search, setSearch] = useState("");
  const [genrelist, setgenrelist] = useState(["All Genres"]);
  const [CurrentGenre, setCurrentGenre] = useState("All Genres");

  let HandleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreaseList = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setlist([...sortedIncreaseList]);
  };

  let sortDecreasing = () => {
    let sortedDecreaseList = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setlist([...sortedDecreaseList]);
  };

  let sortIncreasingPerformance = () => {
    let sortedIncList = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setlist([...sortedIncList]);
  };

  let sortDecreasingPerformance = () => {
    let sortedDecList = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setlist([...sortedDecList]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenrelist(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genreitem) => {
          return (
            <div
              onClick={() => HandleFilter(genreitem)}
              className={
                CurrentGenre == genreitem
                  ? "flex items-center justify-center bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold ml-4 mx-4"
                  : "flex items-center justify-center bg-gray-400/50 h-[3rem] w-[9rem] rounded-xl text-white font-bold ml-4 mx-4"
              }
            >
              {genreitem}
            </div>
          );
        })}
        {/* <div className="flex items-center justify-center bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold ml-4">
          Action
        </div>
        <div className="flex items-center justify-center bg-gray-400/50 h-[3rem] w-[9rem] rounded-xl text-white font-bold ml-4">
          Action
        </div> */}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for Movies"
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-200 px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            {/* <tr className="">
              <th className="flex justify-center">Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2">
                  <i class="fa-solid fa-arrow-up-a-z"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2">
                  <i class="fa-solid fa-arrow-down-z-a"></i>
                </div>
              </th>
              
              <th className="flex justify-center">
                <div onClick={sortIncreasingPerformance} className="p-2">
                  <i class="fa-solid fa-arrow-up-a-z"></i>
                </div>
                <div className="p-2">Popularity</div>
                <div onClick={sortDecreasingPerformance} className="p-2">
                  <i class="fa-solid fa-arrow-down-z-a"></i>
                </div>
              </th>

              <th >Popularity</th>
              <th className="flex justify-center">Genre</th>
            </tr> */}
            <tr className="">
              <th className="text-center px-4 py-2">Name</th>

              <th className="text-center px-4 py-2">
                <div className="inline-flex items-center space-x-2">
                  <div onClick={sortIncreasing} className="p-1 cursor-pointer">
                    <i className="fa-solid fa-arrow-up-a-z"></i>
                  </div>
                  <div>Ratings</div>
                  <div onClick={sortDecreasing} className="p-1 cursor-pointer">
                    <i className="fa-solid fa-arrow-down-z-a"></i>
                  </div>
                </div>
              </th>

              <th className="text-center px-4 py-2">
                <div className="inline-flex items-center space-x-2">
                  <div
                    onClick={sortIncreasingPerformance}
                    className="p-1 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up-a-z"></i>
                  </div>
                  <div>Popularity</div>
                  <div
                    onClick={sortDecreasingPerformance}
                    className="p-1 cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down-z-a"></i>
                  </div>
                </div>
              </th>

              <th className="text-center px-4 py-2">Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieobj) => {
                if (CurrentGenre == "All Genres") return true;
                else {
                  return genreids[movieobj.genre_ids[0]] == CurrentGenre;
                }
              })
              .filter((watchlistitem) => {
                return watchlistitem.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr key={movieobj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                      />
                      <div className="mx-10">{movieobj.title}</div>
                    </td>
                    <td>{movieobj.vote_average}</td>
                    <td>{movieobj.popularity}</td>
                    <td>{genreids[movieobj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleremovefromwatchlist(movieobj)}
                      className="text-red-800"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
