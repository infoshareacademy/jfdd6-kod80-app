import React from 'react';
import search from '../search/search'
import SearchRowResult from './search-view-row-result'

import database from '../data/data-testowa-baza-danych.json'

//parametry do wyszukiwania koncertow
let searchValues = {
  date: "",
  places: "",
  music: "",
  concert: ""
}

//funkcja odpowiada za wyswietlanie wynikow wyszukiwania
const SearchView = () => {
  //przeszukaj baze danych dla odpowiednich wartosci
  var searchResult = search(database, searchValues);

  //wyswietl wyniki wyszukiwania
  return (
    <div>
      <div>Tu bedzie wyszukiwarka</div>
      <div>Wyniki Wyszukania</div>
      //  wyswietl pojedynczy wiersz z danymi
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


