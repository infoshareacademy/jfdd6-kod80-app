import convertDate from './convert-date'


export default (concert1, concert2) => convertDate(concert1.date) - convertDate(concert2.date)
