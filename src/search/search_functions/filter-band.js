
// Funkcja, ktora zwraca funkcje, ktora sprawdza czy koncert
// spełnia warunki
// tutaj ***nazwa zespolu***
// @param - search values - warunki wyszukiwania
// @ return - funkcja
//        zwracana funkcja - sprawdza czy koncert spełnia warunke
//        zwracana funkcja - @param - koncert
//        zwracana funkcja - @return - Boolean - True jesli koncert spełnia warunek, False jesli nie spełnia
const filter_music= searchValues => concert => {
  if (searchValues.band === null || searchValues.band === "") {
    return true
  }
  const band_in_database = concert.band.toLowerCase()
  const search_band =  searchValues.band.toLowerCase()
  return  band_in_database.includes( search_band ) ? true : false
}

export default filter_music
