import { combineReducers } from 'redux'
import {
    ADD_DIE,
    ROLL_DIE,
    ROLL_ALL
} from './actions'

const defaultDice = [ 
    {
        numSides: 6,
        roll: 0
    },
    {
        numSides: 10,
        roll: 0
    },
    {
        numSides: 20,
        roll: 0
    }
]

function dice(state = defaultDice, action) {
    console.log('Reducers', state, action)
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
            return state.map((die, index) => {
                return Object.assign({}, die, {
                    roll: action.randos[index] * die.numSides
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