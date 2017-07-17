import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import List from "../components/list"
import { next, deleteItem } from "../actions/list"
import { fetchGetsIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getList: (action, receiveParam) => {
      dispatch(
        fetchGetsIfNeeded(
          `contributions/list/${action.order}`,
          types.GET_CONTRIBUTION_LIST,
          receiveParam
        )
      )
    },
    next: () => {
      dispatch(next())
    },
    addItem: id => {
      dispatch(
        fetchGetsIfNeeded(
          `contributions/${id}`,
          types.ADD_CONTRIBUTION_LIST_ITEM
        )
      )
    },
    deleteItem: id => {
      dispatch(deleteItem(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
