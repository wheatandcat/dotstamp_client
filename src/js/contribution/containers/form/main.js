import { connect } from "react-redux"
import FormMain from "../../components/form/main"

import {addBody, editBody, changeCharacter, changeBody} from "../../actions/form"
import ActionsErrorShow from "../../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        addBody: (body, character, directionType, talkType) => {
            dispatch(addBody(body, character, directionType, talkType))
        },
        editBody: (body, character, directionType, priority) => {
            dispatch(editBody(body, character, directionType, priority))
        },
        changeCharacter: (character) => {
            dispatch(changeCharacter(character))
        },
        changeBody: (body) => {
            dispatch(changeBody(body))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormMain)
