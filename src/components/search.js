
import filter_music from './search_functions/Filter_music'
import filter_band from './search_functions/Filter_band'
import filter_date from './search_functions/Filter_date'




const search = (database, searchValues) => {
  return database
    .filter( filter_music )
    .filter( filter_band )
    .filter( filter_date )
}

export default search
