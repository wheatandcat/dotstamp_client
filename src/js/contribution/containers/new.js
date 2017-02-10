import { connect } from "react-redux"
import New from "../components/new"
import * as types from "../../constants/ActionTypes"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import ActionsErrorShow from "../../error/actions/show"

import { IMAGE_DISPLAY_TYPE_CHARACTER_FORM } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        setCharacterImageList: () => {
            dispatch(fetchPostsIfNeeded(
                    "characterImage/list/",
                    types.GET_CHARACTER_LIST,
                    {},
                    {imageType:IMAGE_DISPLAY_TYPE_CHARACTER_FORM}
                )
            )
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(New)
