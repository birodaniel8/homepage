import React, { useState } from "react";
import { ColorButton } from "../styles";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const search = () => {
    window.open(`https://www.google.com/search?q=${searchText}`, '_blank')
  }

  return (
    <div>
      <input type="text" name="searchText" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <ColorButton variant="contained" onClick={search}>
          Search
        </ColorButton>
    </div>
  );
};

export default Search;
