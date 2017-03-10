import React from 'react';

const SearchRowResult = ({concert}) => {
  return (
    <li>
      <ul>
        <li>{concert.band}</li>
        <li>{concert.date}</li>
      </ul>
    </li>
  )
}

export default SearchRowResult;