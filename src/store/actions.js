export const ADD_DIE = 'ADD_DIE'
export const ROLL_DIE = 'ROLL_DIE'
export const ROLL_ALL = 'ROLL_ALL'

// action creators
export const addDie = (num) => {
    return { type: ADD_DIE, num }
}

export const rollDie = (index, rando) => {
    return { type: ROLL_DIE, index, rando }
}

export const rollAll = (randos) => {
    return { type: ROLL_ALL, randos }
}