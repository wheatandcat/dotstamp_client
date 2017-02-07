import { connect } from "react-redux"

import Login from "../components/login"
import Actions from "../actions/new"
import ActionsErrorShow from "../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        loginUser: () => {
            dispatch(Actions.loginUser())
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
