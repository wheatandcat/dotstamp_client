import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import ContributionList from "../components/contributionList"
import {
  init,
  setViewStatus,
  setContribution,
  setTitleSearch,
  openDeleteConfirm,
  closeDeleteConfirm
} from "../actions/contributionList"
import {
  fetchPostsIfNeeded,
  fetchGetsIfNeeded,
  fetchDeleteIfNeeded
} from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(init())
    },
    openDeleteConfirm: () => {
      dispatch(openDeleteConfirm())
    },
    closeDeleteConfirm: () => {
      dispatch(closeDeleteConfirm())
    },
    getList: () => {
      dispatch(
        fetchPostsIfNeeded(
          "users/contribution/list/",
          types.GET_USER_CONTRBUTION_LIST,
          { order: 1 }
        )
      )
    },
    setContribution: contributionId => {
      dispatch(setContribution(contributionId))
    },
    getDetail: id => {
      dispatch(
        fetchGetsIfNeeded(`contributions/${id}`, types.GET_CONTRIBUTION_SHOW)
      )
    },
    setTitleSearch: list => {
      dispatch(setTitleSearch(list))
    },
    setViewStatus: viewStatus => {
      dispatch(setViewStatus(viewStatus))
    },
    delete: id => {
      dispatch(
        fetchDeleteIfNeeded(
          `contributions/${id}`,
          types.DELETE_CONTRIBUTION_SHOW
        )
      ).then(() => {
        dispatch(
          fetchPostsIfNeeded(
            "/users/contribution/list/",
            types.GET_USER_CONTRBUTION_LIST,
            { order: 1 }
          )
        )
      })
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContributionList)
)
