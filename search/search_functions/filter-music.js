
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
  return concert.typeOfMusic === searchValues.typeOfMusic ? true : false
}

export default filter_music