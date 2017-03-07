import React from 'react';
import { Link } from 'react-router'

// <Link to={'/groups/' + group.id}>{group.name}</Link>

const SearchRowResult = ({concert}) => {
  return (


<div>


      <ul>
        <li>



          <Link to={'/concerts/' + concert.id}> {concert.id} {concert.Band} {concert.Date} </Link>



          {/*<a href={"concerts/"+concert.id}>*/}
          {/*<li>{concert.Band}</li>*/}
          {/*<li>{concert.Date}</li>*/}
          {/*</a>*/}


          </li>
      </ul>



</div>


  )
}

export default SearchRowResult;



