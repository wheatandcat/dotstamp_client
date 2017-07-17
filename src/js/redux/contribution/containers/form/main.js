import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import FormMain from "../../components/form/main"
import {
  addBody,
  editBody,
  changeCharacter,
  changeBody,
  cancelEdit
} from "../../actions/form"
import { alertMessage } from "../../../error/actions/alertMessage"
import { fetchUploadIfNeeded } from "../../../../utils/fetch"
import * as types from "../../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    addBody: (body, character, directionType, talkType) => {
      dispatch(addBody(body, character, directionType, talkType))
    },
    editBody: (body, character, directionType, priority) => {
      dispatch(editBody(body, character, directionType, priority))
    },
    cancelEdit: () => {
      dispatch(cancelEdit())
    },
    changeCharacter: character => {
      dispatch(changeCharacter(character))
    },
    changeBody: body => {
      dispatch(changeBody(body))
    },
    alertMessage: message => {
      dispatch(alertMessage(message))
    },
    upload: (urlParam, formData, params) => {
      dispatch(
        fetchUploadIfNeeded(
          `contributions/upload/${urlParam}`,
          types.UPLOAD_CONTRIBUTION_FORM,
          formData,
          params
        )
      )
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormMain)
)
