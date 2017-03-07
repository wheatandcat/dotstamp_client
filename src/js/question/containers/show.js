import {connect} from "react-redux"

import Show from "../components/show"
import {fetchPostsIfNeeded} from "../../utils/fetch"

import {init} from "../actions/show"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        init: () => {
            dispatch(init())
        },
        add: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "question/add/",
                    types.ADD_QUESTION,
                    action
                )
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
