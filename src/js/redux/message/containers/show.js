import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Show from "../components/show"
import { init, message, close } from "../actions/show"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    message: (val, style) => {
      dispatch(message(val, style))
    },
    init: () => {
      dispatch(init())
    },
    close: () => {
      dispatch(close())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
