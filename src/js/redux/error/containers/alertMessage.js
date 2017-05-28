import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import AlertMessage from "../components/alertMessage"
import { closeAlert } from "../actions/alertMessage"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    closeAlert: error => {
      dispatch(closeAlert(error))
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AlertMessage)
)
