import { combineReducers } from 'redux'
import {
    ADD_DIE,
    ROLL_DIE,
    ROLL_ALL
} from './actions'

function dice(state = [  ], action) {
    switch (action.type) {
        case ADD_DIE:
            return [
                ...state,
                {
                    numSides: action.num,
                    roll: 0
                }
            ]
        case ROLL_DIE:
            return state.map((die, index) => {
                if (index === action.index) {
                    return Object.assign({}, die, {
                        roll: action.rando * die.numSides
                    })
                }
                return die
            })
        case ROLL_ALL:
            return state.map((die) => {
                return Object.assign({}, die, {
                    roll: action.rando * die.numSides
                })
            })
        default:
            return state
    }
}

const diceBagApp = combineReducers({
    dice
})

export default diceBagApp