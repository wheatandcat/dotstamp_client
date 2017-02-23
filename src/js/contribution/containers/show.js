import { connect } from "react-redux"
import Show from "../components/show/main"

import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
