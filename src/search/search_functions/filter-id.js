// Funkcja, ktora zwraca funkcje, ktora sprawdza czy koncert
// spełnia warunki
// tutaj ***id koncertu w bazie danych***
// @param - search values - warunki wyszukiwania
// @ return - funkcja
//        zwracana funkcja - sprawdza czy koncert spełnia warunke
//        zwracana funkcja - @param - koncert
//        zwracana funkcja - @return - Boolean - True jesli koncert spełnia warunek, False jesli nie spełnia
const filter_music= searchValues => concert => {
  if (searchValues.concertId === null || searchValues.concertId === "") {
    return true
  }
  return concert.id === searchValues.concertId ? true : false
}

export default filter_music