import React from 'react'
import PropTypes from 'prop-types'

const Die = ({ onClick, roll, numSides }) => {
    const displayRoll = Math.ceil(roll)
    return (
        <div className="box">
            <pre>
                Roll: {displayRoll} |
                Sides: {numSides}
            </pre>
            <button className="box" onClick={onClick}>Roll Die</button>
        </div>
    )
}

Die.propTypes = {
    onClick: PropTypes.func.isRequired,
    roll: PropTypes.number.isRequired,
    numSides: PropTypes.number.isRequired
}

export default Die
