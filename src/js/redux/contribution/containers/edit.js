import {connect} from "react-redux"
import Show from "../components/edit"
import * as types from "../../../constants/ActionTypes"
import {fetchPostsIfNeeded} from "../../../utils/fetch"

import {IMAGE_DISPLAY_TYPE_CHARACTER} from "../../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getDetail: (id) => {
            dispatch(fetchPostsIfNeeded(
                    "contribution/edit/" + id,
                    types.GET_CONTRIBUTION_EDIT
                )
            )
        },
        setCharacterImageList: () => {
            dispatch(fetchPostsIfNeeded(
                    "characterImage/list/",
                    types.GET_CHARACTER_LIST,
                    {},
                    {imageType:IMAGE_DISPLAY_TYPE_CHARACTER}
                )
            )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Show)
