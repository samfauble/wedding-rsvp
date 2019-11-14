import React from 'react'

function Submit(props) {
    return (
        <div>
            <button id="submit" type="submit" onClick={props.submit}>Submit</button>
        </div>
    )
}

export default Submit
