import React from 'react';
import search from './search'
import SearchRowResult from './search-view-row-result'

import database from '../data/data-testowa-baza-danych.json'

let searchValues = {
  date: "",
  places: "",
  music: "",
  concert: ""
}

//Przekaz do store wyniku szukania search values


var searchResult = Search(db);

const SearchView = () => {
  var searchResult = search(database);
  return (
    <div>
      <div>Tu bedzie wyszukiwarka</div>
      <div>Wyniki Wyszukania</div>
      <ul>

      {
        searchResult
          .map( concert => <SearchRowResult key={concert.id} concert={concert} /> )
      }
      </ul>
    </div>
  )
}

export default SearchView;


