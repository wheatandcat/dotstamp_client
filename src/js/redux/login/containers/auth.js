import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Auth from "../components/auth"
import { fetchPostsIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    auth: () => {
      dispatch(fetchPostsIfNeeded("login/auth/", types.SET_LOGIN_AUTH))
    },
    logout: () => {
      dispatch(fetchPostsIfNeeded("logout/", types.LOGOUT_LOGIN_AUTH))
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Auth)
)
