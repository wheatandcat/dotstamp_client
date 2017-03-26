import { connect } from "react-redux"
import Show from "../components/show"
import {message} from "../../message/actions/show"
import {changeBodySound, changeVoiceType} from "../action/show"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        message: (val, type) => {
            dispatch(message(val, type))
        },
        getDetail: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "sound/show/",
                    types.GET_CONTRIBUTION_FORM_SOUND_DETAIL,
                    action
                )
            )
        },
        saveBodySound: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "sound/saveBody/",
                    types.SAVE_SOUND_SHOW_BODY_SOUND,
                    action,
                    action
                )
            )
        },
        saveVoiceType: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "sound/saveVoice/",
                    types.SAVE_SOUND_SHOW_VOICE_TYPE,
                    action,
                    action
                )
            )
        },
        changeBodySound: (priority, bodySound) => {
            dispatch(changeBodySound(priority, bodySound))
        },
        changeVoiceType: (priority, voiceType) => {
            dispatch(changeVoiceType(priority, voiceType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
