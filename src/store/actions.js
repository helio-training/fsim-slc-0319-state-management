
export const ADD_DIE = 'ADD_DIE'
export const ROLL_DIE = 'ROLL_DIE'
export const ROLL_ALL = 'ROLL_ALL'



// action creators
export function addDie(num) {
    return { type: ADD_DIE, num }
}

export function rollDie(index, rando) {
    return { type: ROLL_DIE, index, rando }
}

export function rollAll(rando) {
    return { type: ROLL_ALL, rando }
}