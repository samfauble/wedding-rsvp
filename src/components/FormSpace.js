import React, { useState } from 'react'
import Attendance from "./Attendance"
import NumberAttending from "./NumberAttending"
import SelectDishType from "./SelectDishType"
import Submit from "./Submit"

function FormSpace() {
    const [isGoing, setIsGoing] = useState();
    const [guestNumber, setGuestNumber] = useState();
    const [dishType, setDishType] = useState();
    return (
        <form>
          <Attendance value={isGoing} onChange={setIsGoing}/>
          <NumberAttending value={guestNumber} onChange={setGuestNumber} />
          <SelectDishType value={dishType} onChange={setDishType} />
          <Submit />
        </form>
    )
}

export default FormSpace
