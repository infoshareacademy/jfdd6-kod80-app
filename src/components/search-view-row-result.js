import React from 'react';

const SearchRowResult = (koncert) => {
  return (
    <li>
      <ul>
        <li>{koncert.zespol}</li>
        <li>{koncert.data}</li>
      </ul>
    </li>
  )
}

export default SearchRowResult;