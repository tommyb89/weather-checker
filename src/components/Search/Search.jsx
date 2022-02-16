import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-box__input"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
