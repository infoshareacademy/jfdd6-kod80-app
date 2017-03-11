
import filter_music from './search_functions/filter-music.js'
import filter_band from './search_functions/filter-band.js'
import filter_date from './search_functions/filter-date.js'

const filter_concert = searchValues => concert => {
  return [concert]
      .filter(filter_music(searchValues))
      .filter(filter_band(searchValues))
      .filter(filter_date(searchValues))
      .length > 0
}

export default filter_concert
