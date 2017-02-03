import { connect } from "react-redux"

import Auth from "../components/auth"
import Actions from "../actions/auth"
import ActionsErrorShow from "../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        auth: (user) => {
            dispatch(Actions.auth(user))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
    pure: false
})(Auth)
