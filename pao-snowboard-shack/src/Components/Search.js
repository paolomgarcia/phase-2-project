import React from "react";

function Search({setSearch}) {
  let handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;