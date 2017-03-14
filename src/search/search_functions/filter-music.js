
// Funkcja, ktora zwraca funkcje, ktora sprawdza czy koncert
// spełnia warunki
// tutaj ***typ muzyki***
// @param - search values - warunki wyszukiwania
// @ return - funkcja
//        zwracana funkcja - sprawdza czy koncert spełnia warunke
//        zwracana funkcja - @param - koncert
//        zwracana funkcja - @return - Boolean - True jesli koncert spełnia warunek, False jesli nie spełnia
const filter_music= searchValues => concert => {
  if (searchValues.typeOfMusic === null || searchValues.typeOfMusic === "") {
    return true
  }
  const music_in_database = concert.typeOfMusic.toLowerCase()
  const search_music = searchValues.typeOfMusic.toLowerCase()

  return music_in_database.includes( search_music ) ? true : false
}

export default filter_music