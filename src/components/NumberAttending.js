import React from 'react'

function NumberAttending() {
    return (
        <div>
            How many will be in attendance?
            <div>
                <input type="radio" id="one" name="number"/>
                <label htmlFor="one">One person</label>
            </div>
            <div>
                <input type="radio" id="two" name="number"/>
                <label htmlFor="two">Two people</label>
            </div>
            <div>
                <input type="radio" id="three" name="number"/>
                <label htmlFor="three">Three people</label>
            </div>
            <div>
                <input type="radio" id="four" name="number"/>
                <label htmlFor="four">Four people</label>
            </div>
            <div>
                <input type="radio" id="five" name="number"/>
                <label htmlFor="five">Five people</label>
            </div>
        </div>
    )
}

export default NumberAttending
