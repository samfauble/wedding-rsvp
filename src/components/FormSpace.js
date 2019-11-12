import React from 'react'
import SelectDishType from './SelectDishType';
import NumberAttending from './NumberAttending';


class FormSpace extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isGoing: "yes",
             guestNumber: 0,
             dishType: [""]
        }
        this.setIsGoing = this.setIsGoing.bind(this);
        this.setGuestNumber = this.setGuestNumber.bind(this)
        this.setDishType = this.setDishType.bind(this)
        this.displayAnswers = this.displayAnswers.bind(this)
    }

    setIsGoing(event){
        this.setState({isGoing: event.target.value})
    }

    setGuestNumber(event){
        this.setState({guestNumber: event.target.value})
    }

    setDishType(event){
        this.setState({dishType: event.target.value})
    }
    
    displayAnswers(event){
        event.preventDefault();
        alert(`Your answers: Attendance:${this.state.isGoing},
            Number of Guests:${this.state.guestNumber},
            Dish Type:${this.state.dishType}`)
    }

    render(){
        return (
            <form>
                <div>
                    Are you attending?
                    <div>
                        <select value={this.state.isGoing} onChange={this.setIsGoing}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <NumberAttending  value={this.state.guestNumber} setNumber={this.setGuestNumber} />
                <SelectDishType value={this.state.dishType} setMeal={this.setDishType} />
                <div>
                    <button type="submit" onClick={this.displayAnswers}>Submit</button>
                </div>
            </form>
        );
    }
}

export default FormSpace
