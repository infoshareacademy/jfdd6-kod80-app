import React from 'react';
import {Link} from 'react-router'
import {Image} from 'react-bootstrap'



const SearchRowResult = ({concert}) => {
    return (
        <Link to={"concerts/" + concert.id}>

            <div className="serch-view-result">

                <Image src={"data/images-database/" + concert.bandImages} thumbnail/>
                <ul>
                    <li>{concert.band}</li>
                    <li>{concert.date}</li>
                    <li>Cena: {concert.ticketPrice}</li>

                </ul>

            </div>
        </Link>
    )
};

export default SearchRowResult;