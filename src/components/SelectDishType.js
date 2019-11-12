import React from 'react'

function CreateListItem(props){
    return(
        <select>
            <option value="fish">Fish</option>
            <option value="steak">Steak</option>
            <option value="pasta">Pasta</option>
        </select>
    )
}


function SelectDishType(props) {
    const rows = [];
    const number = props.number;
    for (let i=0; i<=number-1; i++){
        rows.push(<CreateListItem key={"item"+i} />)
    }
    return (
        <div name="food" multiple={true} value={props.value} onChange={props.setMeal} className={props.isGoing==="yes" ? "show" : "hide"}>
            What would you like as a main course? <br/>
            {rows}
        </div>
    )
}

export default SelectDishType
