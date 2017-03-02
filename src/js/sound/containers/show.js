import { connect } from "react-redux"
import Show from "../components/show"

import {on} from "../../loading/actions/show"
import {changeBodySound, changeVoiceType} from "../action/show"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
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
                    action
                )
            )
        },
        saveVoiceType: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "sound/saveVoice/",
                    types.SAVE_SOUND_SHOW_VOICE_TYPE,
                    action
                )
            )
        },
        make: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "sound/make/",
                    types.MAKE_SOUND_SHOW,
                    action
                )
            )
        },
        reflect: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "sound/reflect/",
                    types.REFLECT_SOUND_SHOW,
                    action
                )
            ).then(() => {
                dispatch(fetchPostsIfNeeded(
                    "sound/show/",
                    types.GET_CONTRIBUTION_FORM_SOUND_DETAIL,
                    action
                ))
            })
        },
        onLoading: () => {
            dispatch(on())
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
