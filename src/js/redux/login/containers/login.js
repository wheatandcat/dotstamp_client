import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Login from "../components/login"
import { fetchPostsIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    loginCheck: params => {
      dispatch(fetchPostsIfNeeded("login/check/", types.SET_LOGIN_USER, params))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
