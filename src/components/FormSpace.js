import React, { useState } from 'react'
import Attendance from "./Attendance"
import NumberAttending from "./NumberAttending"
import SelectDishType from "./SelectDishType"
import Submit from "./Submit"

function FormSpace() {
    //State Hooks
    const [isGoing, setIsGoing] = useState();
    const [guestNumber, setGuestNumber] = useState();
    const [dishType, setDishType] = useState();
    
    
    const displayAnswers = (event) => {}

    return (
        <form>
          <Attendance value={isGoing} onChange={setIsGoing}/>
          <NumberAttending value={guestNumber} onChange={setGuestNumber} />
          <SelectDishType value={dishType} onChange={setDishType} />
          <Submit onSubmit={displayAnswers} />
        </form>
    )
}

export default FormSpace
