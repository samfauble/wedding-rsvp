import React from 'react'

function Attendance() {
    return (
        <div>
            <form>
                Are you attending?
                <div>
                    <input type="radio" id="yes" name="yesNo" value="yes" />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input type="radio" id="no" name="yesNo" />
                    <label htmlFor="no">No</label>
                </div>
            </form>
        </div>
    )
}

export default Attendance
