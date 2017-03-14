
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
  return concert.band === searchValues.band ? true : false
}

export default filter_music
