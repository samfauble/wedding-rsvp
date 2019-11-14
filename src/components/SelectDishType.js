import React, {useState} from 'react'

function CreateListItem(props){
    const [val, setVal] = useState("fish");
    return(
        <select value={val} onChange={(e)=>setVal(e.target.val)}>
            <option value="fish">Fish</option>
            <option value="steak">Steak</option>
            <option value="pasta">Pasta</option>
        </select>
        
    )
}


function SelectDishType(props) {
    const rows = [];
 // const listVals = [];
    const number = props.number;
    for (let i=1; i<=number; i++){
        rows.push(
        <CreateListItem key={"item"+i} id={"item"+i} />)
    }
    /*
    rows.map((item)=>{
        const itemValue = item.value;
        listVals.push(itemValue);
    }) */
    return (
        <div 
        name="food"
        value={props.value}
        onChange={props.setMeal}
        className={props.number<=0 ? "hide" : "show"}>
            What would you like as a main course? <br/>
            {rows}
        </div>
    )
}

export default SelectDishType
