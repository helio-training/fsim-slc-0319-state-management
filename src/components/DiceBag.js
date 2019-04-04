import React, { Component } from 'react'
import Die from './Die'

export default class extends Component {
    state = {
        dice: [ 4, 6, 8, 10 ],
        newDie: 0
    }
    addNewDie = (event) => {
        event.preventDefault()
        let createDieValue = this.state.newDie
        let newDice = this.state.dice
        newDice.push(createDieValue)
        this.setState({dice: newDice})
    }
    handleChange = async (event) => {
        // console.log(event.target.name, event.target.value, event.target.type)
        const name = event.target.name
        await this.setState(
            {[event.target.name] : event.target.value}
        )
        console.log(name, this.state[name])
        console.log(this.state)
    }
    render() {
        const displayDice = this.state.dice.map(sideNum => <Die sideCount={sideNum}/> )
        return (
            <div className="box">
                <h4>{this.props.label}</h4>
                <fieldset className="box">
                    <legend>Create A New Die</legend>
                    <form onSubmit={this.addNewDie}>
                        <input type='number' name="newDie" placeholder="New Die" onChange={this.handleChange} />
                        <input type='text' name="username" placeholder="UserName" onChange={this.handleChange} />
                        <input type='password' name="password" placeholder="Password" onChange={this.handleChange} />
                        <input type='email' name="email" placeholder="Email" onChange={this.handleChange} />
                        <button type='submit'>Create</button>
                    </form>
                </fieldset>
                {displayDice}
            </div>
        )
    }
}