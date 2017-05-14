import {connect} from "react-redux"
import { withRouter } from "react-router-dom"
import Show from "../components/edit"
import * as types from "../../../constants/ActionTypes"
import {fetchPostsIfNeeded} from "../../../utils/fetch"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: (id) => {
      dispatch(fetchPostsIfNeeded("contribution/edit/" + id, types.GET_CONTRIBUTION_EDIT))
    },
    setCharacterImageList: () => {
      dispatch(fetchPostsIfNeeded("characterImage/list/", types.GET_CHARACTER_LIST))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
