import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-blue-900/60 p-4">
        Avengers EndGame
      </div>
    </div>
  );
}

export default Banner;
//https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg
//https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/04/Avengers-Endgame-banner-poster.jpg