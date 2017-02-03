import { connect } from "react-redux"
import New from "../components/new"
import ActionsForm from "../actions/form"
import ActionsCharacterList from "../../character/actions/list"
import ActionsErrorShow from "../../error/actions/show"

import { IMAGE_DISPLAY_TYPE_CHARACTER_FORM } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        setCharacterImageList: (response) => {
            dispatch(ActionsCharacterList.getList(response, IMAGE_DISPLAY_TYPE_CHARACTER_FORM))
        },
        changeCharacter: (character) => {
            dispatch(ActionsForm.changeCharacter(character))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(New)
