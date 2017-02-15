import { connect } from "react-redux"
import Input from "../components/input"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        add: (ation) => {
            dispatch(fetchPostsIfNeeded(
                    "user/forget_password/add/",
                    types.ADD_PASSWORD,
                    ation
                )
            )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
