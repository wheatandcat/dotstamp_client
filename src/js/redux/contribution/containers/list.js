import {connect} from "react-redux"
import List from "../components/list"
import {next, deleteItem} from "../actions/list"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getList: (action, receiveParam) => {
      dispatch(fetchPostsIfNeeded("contribution/list/", types.GET_CONTRIBUTION_LIST, action, receiveParam))
    },
    next: () => {
      dispatch(next())
    },
    addItem: (id) => {
      dispatch(fetchPostsIfNeeded("contribution/show/" + id, types.ADD_CONTRIBUTION_LIST_ITEM))
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
