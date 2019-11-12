import React from 'react'

function SelectDishType(props) {
    return (
        <div name="food" multiple={true} value={props.value} onChange={props.setMeal} className={props.isGoing==="yes" ? "show" : "hide"}>
            What would you like as a main course? <br/>
            <select>
                <option value="fish">Fish</option>
                <option value="steak">Steak</option>
                <option value="pasta">Pasta</option>
            </select>
        </div>
    )
}

export default SelectDishType
