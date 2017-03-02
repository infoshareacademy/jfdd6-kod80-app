import React from 'react';
import Search from './Search'
import SearchRowResult from './search-view-row-result'


const db =[
  {
  zespol: "metalica",
  data: "13.07.2014"
  },
  {
    zespol: "Slayer",
    data: "18.09.2014"
  }
]

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


