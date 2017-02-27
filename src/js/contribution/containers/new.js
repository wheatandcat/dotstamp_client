import { connect } from "react-redux"
import New from "../components/new"
import * as types from "../../constants/ActionTypes"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import {init} from "../actions/new"

import { IMAGE_DISPLAY_TYPE_CHARACTER_FORM } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        init:() => {
            dispatch(init())
        },
        setCharacterImageList: () => {
            dispatch(fetchPostsIfNeeded(
                    "characterImage/list/",
                    types.GET_CHARACTER_LIST,
                    {},
                    {imageType:IMAGE_DISPLAY_TYPE_CHARACTER_FORM}
                )
            )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(New)
