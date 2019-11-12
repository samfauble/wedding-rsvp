import React from 'react'

function Attendance(props) {
    return (
        <div>
        Are you attending?
        <div>
            <select value={props.value} onChange={props.setGo}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    </div>
    )
}

export default Attendance
