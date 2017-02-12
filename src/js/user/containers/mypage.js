import { connect } from "react-redux"

import Mypage from "../components/mypage"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getUser: () => {
            dispatch(fetchPostsIfNeeded(
                    "user/show/",
                    types.SET_USER
                )
            )
        },
    }
}

// connectでReduxとReactコンポーネントを繋ぐ
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mypage)
