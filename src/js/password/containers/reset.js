import { connect } from "react-redux"
import Reset from "../components/reset"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        check: (email, keyword) => {
            dispatch(fetchPostsIfNeeded(
                    "user/forget_password/check/" + email + "/" + keyword,
                    types.CHECK_PASSWORD
                )
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset)
