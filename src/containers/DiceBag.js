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
        rollAll: () => {
            dispatch(rollAll(Math.random()))
        }
    }
}

const DiceBag = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dice)

export default DiceBag