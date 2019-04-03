import React, { Component } from 'react'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            numSides: this.props.sideCount,
            roll: 0,
            history: []
        }
    }
    roll = () => {
        if(this.state.roll != 0){
            let newHistory = this.state.history
            newHistory.push(this.state.roll)
            this.setState({ history: newHistory, previous: this.state.roll})
            // this.state.previous = this.state.roll
        }
        this.setState({ roll: Math.ceil(Math.random() * this.state.numSides)})
    }
    render() {
        const displayHistory = this.state.history.join(', ')
        return (
            <div className="box">
                <pre>
                    Roll: {this.state.roll} | 
                    Sides: {this.state.numSides} 
                    {this.state.previous ? ` | Previous: ${this.state.previous}` : null}
                </pre>
                {displayHistory}
                {/* {this.state.history[this.state.history.length - 1]} */}
                <button className="box" onClick={this.roll}>Roll Die</button>
            </div>
        )
    }
}