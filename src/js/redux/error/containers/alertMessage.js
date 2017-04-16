import {connect} from "react-redux"

import AlertMessage from "../components/alertMessage"
import {closeAlert} from "../actions/alertMessage"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    closeAlert: (error) => {
      dispatch(closeAlert(error))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage)
