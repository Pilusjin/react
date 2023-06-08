import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 20px auto;
  display: block;
`;

const SearchBar = ({ data, setFilteredResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value !== "") {
      const results = data.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };


  return (
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
  );
};

export default SearchBar;
