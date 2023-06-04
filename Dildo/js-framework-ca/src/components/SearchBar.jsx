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

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

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
    <div>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {filteredResults.length > 0 && (
        <div>
          {filteredResults.map((item) => (
            <div key={item.id}>
              <a href={`/ProductPage/${item.id}`}>{item.title}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
