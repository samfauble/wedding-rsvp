import React from 'react'

function NumberAttending(props) {
    return (
        <div className={props.isGoing==="yes" ? "show" : "hide"}>
            How many will be in attendance?
            <input type="number" value={props.value} onChange={props.setNumber} />
        </div>
    )
}

export default NumberAttending
