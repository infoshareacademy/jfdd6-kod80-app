import React from 'react';

import db from
import Filter_music from './search_functions/Filter_band'
import Filter_band from './search_functions/Filter_band'
import Filter_date from './search_functions/Filter_music'


const Search = (db) => {
  return db
    .filter( filter_music )
    .filter( filter_band )
    .filter( filter_date )
}
