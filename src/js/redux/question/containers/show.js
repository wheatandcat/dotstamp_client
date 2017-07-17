import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Show from "../components/show"
import { fetchPostsIfNeeded } from "../../../utils/fetch"

import { init } from "../actions/show"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(init())
    },
    add: action => {
      dispatch(fetchPostsIfNeeded("question/", types.ADD_QUESTION, action))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
