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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
