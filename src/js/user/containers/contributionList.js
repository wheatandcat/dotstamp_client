import { connect } from "react-redux"
import ContributionList from "../components/contributionList"
import Actions from "../actions/contributionList"
import ActionsErrorShow from "../../error/actions/show"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getList: (contributionList) => {
            dispatch(Actions.getList(contributionList))
        },
        setContribution: (contributionId) => {
            dispatch(Actions.setContribution(contributionId))
        },
        getDetail: (id) => {
            dispatch(fetchPostsIfNeeded(
                    "contribution/show/" + id,
                    types.GET_CONTRIBUTION_SHOW
                )
            )
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

// connectでReduxとReactコンポーネントを繋ぐ
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContributionList)
