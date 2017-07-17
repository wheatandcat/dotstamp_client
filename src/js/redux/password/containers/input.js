import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Input from "../components/input"
import { fetchPostsIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    add: ation => {
      dispatch(
        fetchPostsIfNeeded("user/forget_password/", types.ADD_PASSWORD, ation)
      )
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Input))
