import React from 'react';
import { Link } from 'react-router'

const SearchRowResult = ({concert}) => {
  return (
    <li>
      <ul>
          <Link to={"concerts/"+concert.id}>

          <li>{concert.band}</li>
          <li>{concert.date}</li>

          </Link>
      </ul>
    </li>
  )
}

export default SearchRowResult;