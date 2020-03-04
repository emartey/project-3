import React from 'react'

const AddTripButton = props => {
    return <article class='intro text-center'> <h1 class='intro__heading intro__heading--income title'>KOLLAB</h1><div class='intro__body wysiwyg'><p>We here to help you build a team to put together your next event</p><p> Let's KOLLAB!</p><button onClick={props.addTrip}>GET STARTED</button> </div></article>
}

export default AddTripButton