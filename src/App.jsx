//import { useState } from 'react'
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [watchlist, setwatchlist] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let newwatchlist = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newwatchlist));
    setwatchlist(newwatchlist);
    console.log(newwatchlist);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredwatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filteredwatchlist));
    setwatchlist(filteredwatchlist);
    console.log(filteredwatchlist);
  };

  useEffect(() => {
    let moviesfromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesfromLocalStorage) {
      return;
    }
    setwatchlist(JSON.parse(moviesfromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleaddtowatchlist={handleAddtoWatchList}
                  handleremovefromwatchlist={handleRemoveFromWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setlist={setwatchlist}
                handleremovefromwatchlist={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
