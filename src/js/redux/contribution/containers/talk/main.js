import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Talk from "../../components/talk/main"
import { setEditBody, deleteBody } from "../../actions/talk"
import { alertMessage } from "../../../error/actions/alertMessage"
import { fetchUploadIfNeeded } from "../../../../utils/fetch"
import * as types from "../../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    setEditBody: (priority, body, changeCharacter, directionType) => {
      dispatch(setEditBody(priority, body, changeCharacter, directionType))
    },
    deleteBody: priority => {
      dispatch(deleteBody(priority))
    },
    alertMessage: message => {
      dispatch(alertMessage(message))
    },
    upload: (urlParam, formData, params) => {
      dispatch(
        fetchUploadIfNeeded(
          `contributions/upload/${urlParam}`,
          types.EDIT_CONTRIBUTION_FORM_BODY_IMAGE,
          formData,
          params
        )
      )
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Talk))
