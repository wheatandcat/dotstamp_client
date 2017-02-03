import { connect } from "react-redux"
import Show from "../components/edit"
import ActionsShow from "../actions/edit"
import ActionsForm from "../actions/form"
import ActionsCharacterList from "../../character/actions/list"
import ActionsErrorShow from "../../error/actions/show"

import { IMAGE_DISPLAY_TYPE_CHARACTER_FORM } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getDetail: (id, title, body, tagList) => {
            dispatch(ActionsShow.getDetail(id, title, body, tagList))
        },
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)
