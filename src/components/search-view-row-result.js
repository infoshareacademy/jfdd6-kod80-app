import React from 'react';

const SearchRowResult = ({concert}) => {
  return (
    <li>
      <ul>
        <li>{concert.Band}</li>
        <li>{concert.Date}</li>
      </ul>
    </li>
  )
}

export default SearchRowResult;