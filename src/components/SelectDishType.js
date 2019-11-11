import React from 'react'

function SelectDishType() {
    return (
        <div>
            <form>
                What would you like as an entree?
                <div>
                    <select>
                        <option value="fish">Fish</option>
                        <option value="steak">Steak</option>
                        <option value="pasta">Pasta</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SelectDishType
