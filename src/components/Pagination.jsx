import React from "react";

function Pagination({ pageno, prevpage, nextpage }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div onClick={prevpage} className="px-8">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageno}</div>
      <div onClick={nextpage} className="px-8">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
