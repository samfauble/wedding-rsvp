import React from 'react'


class FormSpace extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isGoing: "",
             guestNumber: 0,
             dishType: []
        }
        this.setIsGoing = this.setIsGoing.bind(this);
    }

    setIsGoing (event) {
        this.setState({isGoing: event.target.id}, console.log(this.state.isGoing))
    }
    

    render(){
        return (
            <form>
                <div>
                    Are you attending?
                    <div>
                        <input type="radio" id="no" name="yesNo" value={this.state.isGoing} onChange={this.setIsGoing} />
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="yes" name="yesNo" value={this.state.isGoing} onChange={this.setIsGoing} />
                        <label htmlFor="no">No</label>
                    </div>
                </div>
                <div>
                How many will be in attendance?
                    <div>
                        <input type="radio" id="one" name="number"/>
                        <label htmlFor="one">One person</label>
                    </div>
                    <div>
                        <input type="radio" id="two" name="number"/>
                        <label htmlFor="two">Two people</label>
                    </div>
                    <div>
                        <input type="radio" id="three" name="number"/>
                        <label htmlFor="three">Three people</label>
                    </div>
                    <div>
                        <input type="radio" id="four" name="number"/>
                        <label htmlFor="four">Four people</label>
                    </div>
                    <div>
                        <input type="radio" id="five" name="number"/>
                        <label htmlFor="five">Five people</label>
                    </div>
                </div>
                <div>
                    What would you like as an entree?
                    <div>
                        <select>
                            <option value="fish">Fish</option>
                            <option value="steak">Steak</option>
                            <option value="pasta">Pasta</option>
                        </select>
                    </div>
                </div>
            </form>
        );
    }
}

export default FormSpace
