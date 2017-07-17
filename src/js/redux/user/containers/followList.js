import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import FollowList from "../components/followList"
import { fetchPostsIfNeeded } from "../../../utils/fetch"
import { paging } from "../actions/followList"
import * as types from "../../../constants/ActionTypes"
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getList: action => {
      dispatch(
        fetchPostsIfNeeded("/follows/list", types.GET_USER_FOLLOW_LIST, action)
      )
    },
    paging: (page, order) => {
      dispatch(paging(page, order))
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FollowList)
)
