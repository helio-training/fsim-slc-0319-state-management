import React, { Component } from 'react'
import Die from './Die'

export default class extends Component {
    state = {
        dice: [2, 4, 8, 10],
        newDie: 0
    }
    addNewDie = (event) => {
        event.preventDefault()
        let createDieValue = this.state.newDie
        let newDice = this.state.dice
        newDice.push(createDieValue)
        this.setState({dice: newDice})
    }
    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState(
            {[event.target.name] : event.target.value}
        )
    }
    render() {
        const displayDice = this.state.dice.map(sideNum => <Die sideCount={sideNum}/> )
        return (
            <div className="box">
                <h4>{this.props.label}</h4>
                <fieldset className="box">
                    <form onSubmit={this.addNewDie}>
                        <legend>Create A New Die</legend>
                        <input type='number' name="newDie" onChange={this.handleChange} />
                        <button type='submit'>Create</button>
                    </form>
                </fieldset>
                {displayDice}
            </div>
        )
    }
}