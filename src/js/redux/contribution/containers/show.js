import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Show from "../components/show/main"
import { setProblemType, openProblem, closeProblem } from "../actions/show"
import {
  fetchGetsIfNeeded,
  fetchPostsIfNeeded,
  fetchDeleteIfNeeded
} from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    openProblem: () => {
      dispatch(openProblem())
    },
    closeProblem: () => {
      dispatch(closeProblem())
    },
    setProblemType: problemType => {
      dispatch(setProblemType(problemType))
    },
    getDetail: id => {
      dispatch(
        fetchGetsIfNeeded(`contributions/${id}`, types.GET_CONTRIBUTION_SHOW)
      )
    },
    addFollow: id => {
      dispatch(fetchPostsIfNeeded(`follows/${id}`, types.ADD_FOLLOW))
    },
    deleteFollow: id => {
      dispatch(fetchDeleteIfNeeded(`follows/${id}`, types.DELETE_FOLLOW))
    },
    addProblem: action => {
      dispatch(
        fetchPostsIfNeeded(
          "problem/",
          types.ADD_CONTRIBUTION_SHOW_PROBLEM,
          action
        )
      )
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
