import React from 'react'


class FormSpace extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isGoing: "yes",
             guestNumber: 0,
             dishType: ""
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
                <div>
                    How many will be in attendance?
                    <input type="text" maxLength="2" value={this.state.guestNumber} onChange={this.setGuestNumber}/>
                </div>
                <div>
                    What would you like as an entree?
                    <div>
                        <select value={this.state.dishType} onChange={this.setDishType}>
                            <option value="fish">Fish</option>
                            <option value="steak">Steak</option>
                            <option value="pasta">Pasta</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={this.displayAnswers}>Submit</button>
                </div>
            </form>
        );
    }
}

export default FormSpace
