import React from 'react';
import Attendance from "./Attendance";
import SelectDishType from './SelectDishType';
import NumberAttending from './NumberAttending';
import Submit from "./Submit";

class FormField extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isGoing: "yes",
             guestNumber: 0,
             dishType: "fish"
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
        const number = this.state.guestNumber;
        const vals = event.target.value;
        const rows = [];
        for(let i=1; i<=number; i++){
            rows.push(vals);
        }
        this.setState({dishType: rows})
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
                <Attendance 
                    value={this.state.value} 
                    setGo={this.setIsGoing} />
                <NumberAttending  
                    value={this.state.guestNumber} 
                    setNumber={this.setGuestNumber} 
                    isGoing={this.state.isGoing} />
                <SelectDishType 
                    value={this.state.dishType} 
                    setMeal={this.setDishType} 
                    isGoing={this.state.isGoing} 
                    number={this.state.guestNumber}
                    multiple={true} />
                <Submit submit={this.displayAnswers} />
            </form>
        );
    }
}

export default FormField
