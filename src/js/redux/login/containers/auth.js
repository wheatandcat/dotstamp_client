import {connect} from "react-redux"
import Auth from "../components/auth"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
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
      dispatch(fetchPostsIfNeeded("login/logout/", types.LOGOUT_LOGIN_AUTH))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Auth)
