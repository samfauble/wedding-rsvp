import React from 'react'

function SelectDishType(props) {
    return (
        <div>
            What would you like as a main course?
            <ul name="food" multiple={true} value={props.value} onChange={props.setMeal}>
                <li>
                    <select>
                        <option value="fish">Fish</option>
                        <option value="steak">Steak</option>
                        <option value="pasta">Pasta</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

export default SelectDishType
