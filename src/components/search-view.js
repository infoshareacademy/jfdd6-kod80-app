import React from 'react';
import search from '../search/search'
import SearchRowResult from './search-view-row-result'
import {form, FormControl, ControlLabel} from 'react-bootstrap'

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

const handleChange = (e) => {
        this.setState({ value: e.target.value });
    }


    //wyswietl wyniki wyszukiwania
  return (
    <div>
      <div>
          <form>
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                  type="text"
                  value=""
                  placeholder="Enter text"
                  onChange={this.handleChange}
              />
          </form>
      </div>
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


