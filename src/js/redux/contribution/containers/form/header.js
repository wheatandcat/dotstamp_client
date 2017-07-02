import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import FormHeader from "../../components/form/header"
import {
  openHelp,
  closeHelp,
  changeTitle,
  changeTag,
  changeHeight,
  setViewStatus
} from "../../actions/form"
import {
  alertMessage,
  alertMessageInit
} from "../../../error/actions/alertMessage"
import { message } from "../../../message/actions/show"
import { fetchGetsIfNeeded, fetchPostsIfNeeded } from "../../../../utils/fetch"
import * as types from "../../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    alertMessageInit: () => {
      dispatch(alertMessageInit())
    },
    changeTitle: title => {
      dispatch(changeTitle(title))
    },
    changeTag: tag => {
      dispatch(changeTag(tag))
    },
    changeHeight: height => {
      dispatch(changeHeight(height))
    },
    alertMessage: message => {
      dispatch(alertMessage(message))
    },
    message: (val, type) => {
      dispatch(message(val, type))
    },
    openHelp: () => {
      dispatch(openHelp())
    },
    closeHelp: () => {
      dispatch(closeHelp())
    },
    new: action => {
      dispatch(
        fetchPostsIfNeeded(
          "contribution/new/",
          types.NEW_CONTRIBUTION_FORM,
          action
        )
      )
    },
    setViewStatus: viewStatus => {
      dispatch(setViewStatus(viewStatus))
    },
    save: action => {
      dispatch(
        fetchPostsIfNeeded(
          "contribution/save/",
          types.SAVE_CONTRIBUTION_FORM,
          action,
          action
        )
      )
    },
    addTag: action => {
      dispatch(
        fetchPostsIfNeeded("tag/add/", types.ADD_CONTRIBUTION_TAG, action)
      )
    },
    deleteTag: action => {
      dispatch(
        fetchPostsIfNeeded("tag/delete/", types.DELETE_CONTRIBUTION_TAG, action)
      )
    },
    addSound: action => {
      dispatch(
        fetchPostsIfNeeded(
          "sound/add/",
          types.ADD_CONTRIBUTION_FORM_SOUND,
          action,
          action
        )
      )
    },
    soundlength: () => {
      dispatch(fetchGetsIfNeeded("sound/length/", types.GET_SOUND_LENGTH))
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormHeader)
)
