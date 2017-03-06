import React from 'react';

const SearchRowResult = ({concert}) => {
  return (
    <li>
      <ul>
        <a href={"concerts/"+concert.id}>
          <li>{concert.Band}</li>
          <li>{concert.Date}</li>
        </a>
      </ul>
    </li>
  )
}

export default SearchRowResult;