import React from "react";
const SearchPanel = ({searchText}) => {
  
  const searchStyle = {
    fontSize: '20px'
  };

  return (
    <React.Fragment>
      <input style = {searchStyle} placeholder={searchText} />
    </React.Fragment>)
};

export default SearchPanel;

