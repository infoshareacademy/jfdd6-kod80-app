
import filter_music from './search_functions/filter-music.js'
import filter_band from './search_functions/filter-band.js'
import filter_date from './search_functions/filter-date.js'
import filter_id from './search_functions/filter-id.js'

const filter_concert = searchValues => concert => {
  return [concert]
      .filter(filter_music(searchValues))
      .filter(filter_band(searchValues))
      .filter(filter_date(searchValues))
      .filter(filter_id(searchValues))
      .length > 0
}

export default filter_concert
