import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Show from "../components/show"
import { message } from "../../message/actions/show"
import {
  openVoiceList,
  closeVoiceList,
  changeBodySound,
  changeVoiceType,
  offMovieMakeListener
} from "../action/show"
import { fetchPutsIfNeeded, fetchGetsIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    message: (val, type) => {
      dispatch(message(val, type))
    },
    getDetail: id => {
      dispatch(
        fetchGetsIfNeeded(
          `sounds/${id}/`,
          types.GET_CONTRIBUTION_FORM_SOUND_DETAIL
        )
      )
    },
    saveBodySound: action => {
      dispatch(
        fetchPutsIfNeeded(
          "sounds/body/",
          types.SAVE_SOUND_SHOW_BODY_SOUND,
          action,
          action
        )
      )
    },
    check: id => {
      dispatch(fetchGetsIfNeeded(`movies/${id}`, types.CHECK_SOUND_SHOW_MOVIE))
    },
    saveVoiceType: action => {
      dispatch(
        fetchPutsIfNeeded(
          "sounds/voice/",
          types.SAVE_SOUND_SHOW_VOICE_TYPE,
          action,
          action
        )
      )
    },
    saveVoiceTypeList: action => {
      dispatch(
        fetchPutsIfNeeded(
          `sounds/${action.userContributionId}/voice/all`,
          types.SAVE_SOUND_SHOW_VOICE_TYPE_LIST,
          action
        )
      ).then(() => {
        dispatch(
          fetchGetsIfNeeded(
            `sounds/${action.userContributionId}`,
            types.GET_CONTRIBUTION_FORM_SOUND_DETAIL
          )
        )
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
