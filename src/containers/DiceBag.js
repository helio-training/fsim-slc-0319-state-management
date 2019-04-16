import { connect } from 'react-redux'
import { rollDie, rollAll } from '../store/actions'
import Dice from '../components/Dice'

const mapStateToProps = state => {
    return {
        dice: state.dice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRoll: index => {
            dispatch(rollDie(index, Math.random()))
        },
        rollAll: (randos) => {
            dispatch(rollAll(randos))
        }
    }
}

const DiceBag = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice)

export default DiceBag