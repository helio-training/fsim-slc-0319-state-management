import React from 'react'
import { connect } from 'react-redux'
import { addDie } from '../store/actions'

let AddDie = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    const action = addDie(input.value)
                    // console.log(action)
                    dispatch(action)
                    input.value = ''
                }}
            >
                <input type='number'
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">Add Die</button>
            </form>
        </div>
    )
}
AddDie = connect()(AddDie)

export default AddDie