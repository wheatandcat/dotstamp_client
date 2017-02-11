import { connect } from "react-redux"

import Show from "../components/show"
import {showError, closeError} from "../actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        showError: (error) => {
            dispatch(showError(error))
        },
        closeError: () => {
            dispatch(closeError())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
