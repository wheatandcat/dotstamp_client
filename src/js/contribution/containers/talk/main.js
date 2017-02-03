import { connect } from "react-redux"
import Talk from "../../components/talk/main"
import ActionsTalk from "../../actions/talk"
import ActionsErrorShow from "../../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        setEditBody: (priority, body, changeCharacter, directionType) => {
            dispatch(ActionsTalk.setEditBody(priority, body, changeCharacter, directionType))
        },
        deleteBody: (priority) => {
            dispatch(ActionsTalk.deleteBody(priority))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Talk)
