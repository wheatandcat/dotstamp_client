import { connect } from "react-redux"
import Show from "../components/show"
import {message} from "../../message/actions/show"
import {openVoiceList, closeVoiceList, changeBodySound, changeVoiceType, offMovieMakeListener} from "../action/show"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    message: (val, type) => {
      dispatch(message(val, type))
    },
    getDetail: (action) => {
      dispatch(fetchPostsIfNeeded("sound/show/", types.GET_CONTRIBUTION_FORM_SOUND_DETAIL, action))
    },
    saveBodySound: (action) => {
      dispatch(fetchPostsIfNeeded("sound/saveBody/", types.SAVE_SOUND_SHOW_BODY_SOUND, action, action))
    },
    check: (action) => {
      dispatch(fetchPostsIfNeeded("movie/check/", types.CHECK_SOUND_SHOW_MOVIE, action))
    },
    saveVoiceType: (action) => {
      dispatch(fetchPostsIfNeeded("sound/saveVoice/", types.SAVE_SOUND_SHOW_VOICE_TYPE, action, action))
    },
    saveVoiceTypeList: (action) => {
      dispatch(fetchPostsIfNeeded("sound/saveVoiceList/", types.SAVE_SOUND_SHOW_VOICE_TYPE_LIST, action)).then(() => {
        dispatch(fetchPostsIfNeeded("sound/show/", types.GET_CONTRIBUTION_FORM_SOUND_DETAIL, action))
      })
    },
    changeBodySound: (priority, bodySound) => {
      dispatch(changeBodySound(priority, bodySound))
    },
    changeVoiceType: (priority, voiceType) => {
      dispatch(changeVoiceType(priority, voiceType))
    },
    offMovieMakeListener: () => {
      dispatch(offMovieMakeListener())
    },
    openVoiceList: () => {
      dispatch(openVoiceList())
    },
    closeVoiceList: () => {
      dispatch(closeVoiceList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
