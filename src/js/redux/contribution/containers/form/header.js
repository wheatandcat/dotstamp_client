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
import {
  fetchGetsIfNeeded,
  fetchPostsIfNeeded,
  fetchPutsIfNeeded,
  fetchDeleteIfNeeded
} from "../../../../utils/fetch"
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
          "contributions/new/",
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
        fetchPutsIfNeeded(
          `contributions/${action.userContributionId}`,
          types.SAVE_CONTRIBUTION_FORM,
          action,
          action
        )
      )
    },
    addTag: action => {
      dispatch(fetchPostsIfNeeded("tags/", types.ADD_CONTRIBUTION_TAG, action))
    },
    deleteTag: action => {
      dispatch(
        fetchDeleteIfNeeded(
          `tags/?id=${action.id}&cid=${action.userContributionId}`,
          types.DELETE_CONTRIBUTION_TAG
        )
      )
    },
    addSound: action => {
      dispatch(
        fetchPostsIfNeeded(
          `sounds/${action.userContributionId}`,
          types.ADD_CONTRIBUTION_FORM_SOUND,
          null,
          action
        )
      )
    },
    soundlength: () => {
      dispatch(fetchGetsIfNeeded("sounds/length/", types.GET_SOUND_LENGTH))
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormHeader)
)
