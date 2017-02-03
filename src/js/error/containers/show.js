import { connect } from "react-redux"

import Show from "../components/show"
import ActionsErrorShow from "../actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        },
        closeError: () => {
            dispatch(ActionsErrorShow.closeError())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
