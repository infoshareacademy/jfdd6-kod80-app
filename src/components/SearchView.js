import React from 'react';
import Search from './Search'
import SearchRowResult from './search-view-row-result'

import db from '../data/data-testowa-baza-danych.json'

// searchValues = {
//   date: "",
//   places: "",
//   music: "",
//   concert: ""
// }

//Przekaz do store wyniku szukania search values

var searchResult = Search(db);

const SearchView = () => {
  return (
    <div>
      <div>Tu bedzie wyszukiwarka</div>
      <div>Wyniki Wyszukania</div>
      <ul>
      {
        searchResult
          .map( koncert => SearchRowResult(koncert) )
      }
      </ul>
    </div>
  )
}

export default SearchView;


