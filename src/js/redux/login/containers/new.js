import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import New from "../components/new"
import { alert } from "../actions/new"
import { fetchPostsIfNeeded, fetchTextIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    new: params => {
      dispatch(fetchPostsIfNeeded("users/new/", types.SET_LOGIN_USER, params))
    },
    open: () => {
      dispatch(
        fetchTextIfNeeded("static/txt/terms.txt", types.OPEN_LOGIN_TERMS, {
          fileName: "terms"
        })
      )
    },
    alert: message => {
      dispatch(alert(message))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
