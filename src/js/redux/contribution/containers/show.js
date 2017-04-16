import { connect } from "react-redux"
import Show from "../components/show/main"

import {setProblemType, openProblem, closeProblem} from "../actions/show"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        openProblem: () => {
            dispatch(openProblem())
        },
        closeProblem: () => {
            dispatch(closeProblem())
        },
        setProblemType: (problemType) => {
            dispatch(setProblemType(problemType))
        },
        getDetail: (id) => {
            dispatch(fetchPostsIfNeeded(
                    "contribution/show/" + id,
                    types.GET_CONTRIBUTION_SHOW
                )
            )
        },
        addFollow:(action) => {
            dispatch(fetchPostsIfNeeded(
                    "follow/add",
                    types.ADD_FOLLOW,
                    action
                )
            )
        },
        deleteFollow:(action) => {
            dispatch(fetchPostsIfNeeded(
                    "follow/delete",
                    types.DELETE_FOLLOW,
                    action
                )
            )
        },
        addProblem:(action) => {
            dispatch(fetchPostsIfNeeded(
                    "problem/add",
                    types.ADD_CONTRIBUTION_SHOW_PROBLEM,
                    action
                )
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
