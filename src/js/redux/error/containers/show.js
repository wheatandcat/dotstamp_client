import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Show from "../components/show"
import { showError, closeError, openBugReport } from "../actions/show"
import { fetchPostsIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    showError: error => {
      dispatch(showError(error))
    },
    closeError: () => {
      dispatch(closeError())
    },
    openBugReport: () => {
      dispatch(openBugReport())
    },
    addBugReport: action => {
      dispatch(fetchPostsIfNeeded("bug/", types.ADD_ERROR_BUG_REPORT, action))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
