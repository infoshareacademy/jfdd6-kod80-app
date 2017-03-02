import React from 'react';

const SearchRowResult = (koncert) => {
  return (
    <li>
      <ul>
        <li>{koncert.Band}</li>
        <li>{koncert.Date}</li>
      </ul>
    </li>
  )
}

export default SearchRowResult;