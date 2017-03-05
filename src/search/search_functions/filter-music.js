
//=odczytaj ze store warunki wyszukiwania

//Sprawdz czy dany koncert
const filter_music= searchValues => concert => {
  //if ( warunek(concert) ===  true)
  //console.log(searchValues);
  //console.log(concert);
  //if ( warunek(concert) ===  true)
  // np.: sTypeOfMusic
  if( concert.TypeOfMusic === "Metal") {
    console.log(concert);
    return true
  } else {
    return false
  }
}


export default filter_music