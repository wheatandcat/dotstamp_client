import { connect } from "react-redux"
import FormMain from "../../components/form/main"

import ActionsForm from "../../actions/form"
import ActionsErrorShow from "../../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        addBody: (body, character, directionType, talkType) => {
            dispatch(ActionsForm.addBody(body, character, directionType, talkType))
        },
        editBody: (body, character, directionType, priority) => {
            dispatch(ActionsForm.editBody(body, character, directionType, priority))
        },
        changeCharacter: (character) => {
            dispatch(ActionsForm.changeCharacter(character))
        },
        changeBody: (body) => {
            dispatch(ActionsForm.changeBody(body))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormMain)
