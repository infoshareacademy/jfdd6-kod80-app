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



      <div>
        {/*<Grid>*/}
          {/*<Row className="show-grid">*/}

            {/*<Col xs={12} md={8}>*/}
              {/**/}
              {/**/}
              {/**/}
            {/**/}
      {/*{*/}
        {/*searchResult*/}
          {/*.map( concert => <SearchRowResult key={concert.id} concert={concert} /> )*/}
      {/*}*/}

            {/*</Col>*/}
          {/*</Row>*/}
        {/*</Grid>*/}

        {/*dokończyć widok listy*/}


      </div>

    </div>
  )
}

export default SearchView;


//Poprawić odnośniki na Link