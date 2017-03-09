import React from 'react'

import { Grid } from 'react-bootstrap'

const BuytTicketView = props => (
    <Grid>
        <h1>Kup Bilet</h1>
        <h2>Podaj nr swojej karty kredytowej</h2>
        <h3>Id Koncertu  {props.params.concertId}</h3>
    </ Grid>
)

export default BuytTicketView



