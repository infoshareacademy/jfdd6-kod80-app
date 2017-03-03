import React from 'react';

import filter_music from './search_functions/Filter_music'
import filter_band from './search_functions/Filter_band'
import filter_date from './search_functions/Filter_music'




const Search = (db) => {
  return db
    .filter( filter_music )
    .filter( filter_band )
    .filter( filter_date )
}

export default Search
