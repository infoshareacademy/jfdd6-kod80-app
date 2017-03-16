import convertDate from '../../date/convert-date'

// Funkcja, ktora zwraca funkcje, ktora sprawdza czy koncert
// spełnia warunki
// tutaj ***data koncertu***
// @param - search values - warunki wyszukiwania
// @ return - funkcja
//        zwracana funkcja - sprawdza czy koncert spełnia warunke
//        zwracana funkcja - @param - koncert
//        zwracana funkcja - @return - Boolean - True jesli koncert spełnia warunek, False jesli nie spełnia
const filter_date= searchValues => concert => {
  if (searchValues.dateSince === null || searchValues.dateTo === null) {
    return true
  }

  console.log( searchValues.dateSince )
  console.log( searchValues.dateTo )
  console.log('convert Date ', convertDate(concert.date) )

  const convertedDate = convertDate(concert.date)

  if( searchValues.dateSince < convertedDate && convertedDate < searchValues.dateTo ) {
    return true
  }
  else {
    return false
  }
}

export default filter_date

