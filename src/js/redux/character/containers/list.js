import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import List from "../components/list"
import { setDefaultList, init, setIcon, setVoiceType } from "../actions/list"
import {
  fetchGetsIfNeeded,
  fetchPutsIfNeeded,
  fetchDeleteIfNeeded,
  fetchUploadIfNeeded
} from "../../../utils/fetch"
import {
  alertMessage,
  alertMessageInit
} from "../../error/actions/alertMessage"

import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(init())
    },
    setDefaultList: () => {
      dispatch(setDefaultList())
    },
    alertMessageInit: () => {
      dispatch(alertMessageInit())
    },
    getList: () => {
      dispatch(fetchGetsIfNeeded("characters/", types.GET_CHARACTER_LIST))
    },
    setIcon: id => {
      dispatch(setIcon(id))
    },
    setVoiceType: voiceType => {
      dispatch(setVoiceType(voiceType))
    },
    save: action => {
      dispatch(
        fetchPutsIfNeeded("characters/", types.SAVE_CHARACTER_LIST, action)
      )
    },
    delete: id => {
      dispatch(
        fetchDeleteIfNeeded(`characters/${id}`, types.DELETE_CHARACTER_LIST)
      )
    },
    upload: formData => {
      dispatch(
        fetchUploadIfNeeded(
          "characters/",
          types.UPLOAD_CHARACTER_LIST,
          formData
        )
      ).then(() => {
        dispatch(fetchGetsIfNeeded("characters/", types.GET_CHARACTER_LIST))
      })
    },
    alertMessage: message => {
      dispatch(alertMessage(message))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
