import React from 'react'
import Attendance from "./Attendance"
import NumberAttending from "./NumberAttending"
import SelectDishType from "./SelectDishType"
import Submit from "./Submit"

function FormSpace() {
    /*Put State here*/
    return (
        <form>
          <Attendance />
          <NumberAttending />
          <SelectDishType />
          <Submit />
        </form>
    )
}

export default FormSpace
