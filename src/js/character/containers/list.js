import { connect } from "react-redux"
import List from "../components/list"
import {setIcon} from "../actions/list"
import {fetchPostsIfNeeded, fetchUploadIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

import { IMAGE_DISPLAY_TYPE_CHARACTER } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getList: () => {
            dispatch(fetchPostsIfNeeded(
                    "characterImage/list/",
                    types.GET_CHARACTER_LIST,
                    {},
                    {imageType:IMAGE_DISPLAY_TYPE_CHARACTER}
                )
            )
        },
        setIcon: (id) => {
            dispatch(setIcon(id))
        },
        delete: (id) => {
            dispatch(fetchPostsIfNeeded(
                    "characterImage/delete/" + id,
                    types.DELETE_CHARACTER_LIST
                )
            )
        },
        upload: (formData) => {
            dispatch(fetchUploadIfNeeded(
                    "characterImage/upload/",
                    types.UPLOAD_CHARACTER_LIST,
                    formData
                )
            ).then(() => {
                dispatch(fetchPostsIfNeeded(
                        "characterImage/list/",
                        types.GET_CHARACTER_LIST,
                        {},
                        {imageType:IMAGE_DISPLAY_TYPE_CHARACTER}
                    )
                )
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
