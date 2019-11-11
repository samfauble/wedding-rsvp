import React from 'react'
import Attendance from "./Attendance"
import NumberAttending from "./NumberAttending"
import SelectDishType from "./SelectDishType"
import Submit from "./Submit"

function FormSpace() {
    return (
        <div>
          <Attendance />
          <NumberAttending />
          <SelectDishType />
          <Submit />
        </div>
    )
}

export default FormSpace
