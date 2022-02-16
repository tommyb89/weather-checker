import React from "react";
import "./Search.scss";

const Search = ({ onChange, value, onKeyPress }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-box__input"
        placeholder="Search..."
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Search;
