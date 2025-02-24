import React from "react";
import Logo from "../MovieLogo.png";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={Logo} className="w-[50px]" />

      {/* <a href="/" className="text-blue-500 text-2xl font-bold">Movies</a>
      <a href="/watchlist" className="text-blue-500 text-2xl font-bold">Watchlist</a> */}

    <Link to="/" className="text-blue-500 text-2xl font-bold">Movies</Link>
    <Link to="/watchlist" className="text-blue-500 text-2xl font-bold">Watchlist</Link>


    </div>
  );
};

export default Navbar;
