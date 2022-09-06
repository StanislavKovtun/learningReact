import React from "react";
import './SearchPanel.css';

const SearchPanel = ({searchText}) => {
  return (
    <React.Fragment>
      <input type='text'
      className="search-input"
      placeholder={searchText} />
    </React.Fragment>)
};

export default SearchPanel;

