import { connect } from "react-redux"
import Show from "../components/show/main"
import ActionsShow from "../actions/show"
import ActionsErrorShow from "../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getDetail: (title, body, tagList) => {
            dispatch(ActionsShow.getDetail(title, body, tagList))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
