import { connect } from "react-redux"

import Mypage from "../components/mypage"
import ActionsErrorShow from "../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

// connectでReduxとReactコンポーネントを繋ぐ
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mypage)
