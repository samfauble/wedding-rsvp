import React from 'react'

function Submit(props) {
    return (
        <div>
            <button type="submit" onClick={props.submit}>Submit</button>
        </div>
    )
}

export default Submit
