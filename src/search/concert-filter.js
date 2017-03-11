
import filter_music from './search_functions/filter-music.js'
import filter_band from './search_functions/filter-band.js'
import filter_date from './search_functions/filter-date.js'

// funkcja ktora zwraca wyniki wyszukiwania w bazie danych
// @param - baza_danych, warunki wyszukiwania SearchValues - JS Object
// @return - tabela objectow JSON - koncertow ktore spelniaja warunki
const search = (database, searchValues) => {
  return database
    .filter( filter_music(searchValues) )
    .filter( filter_band(searchValues) )
    .filter( filter_date(searchValues) )
}

export default search
