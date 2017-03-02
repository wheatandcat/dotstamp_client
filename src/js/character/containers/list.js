import {connect} from "react-redux"
import List from "../components/list"
import {setIcon, setVoiceType} from "../actions/list"
import {fetchPostsIfNeeded, fetchUploadIfNeeded} from "../../utils/fetch"
import {alertMessage, alertMessageInit} from "../../error/actions/alertMessage"

import * as types from "../../constants/ActionTypes"

import { IMAGE_DISPLAY_TYPE_CHARACTER } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        alertMessageInit: () => {
            dispatch(alertMessageInit())
        },
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
        setVoiceType: (voiceType) => {
            dispatch(setVoiceType(voiceType))
        },
        save: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "characterImage/save/",
                    types.SAVE_CHARACTER_LIST,
                    action
                )
            )
        },
        delete: (id) => {
            dispatch(fetchPostsIfNeeded(
                    "characterImage/delete/" + id,
                    types.DELETE_CHARACTER_LIST,
                    {},
                    {imageType:IMAGE_DISPLAY_TYPE_CHARACTER}
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
                ))
            })
        },
        alertMessage: (message) => {
            dispatch(alertMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
