import { connect } from "react-redux"

import ContributionList from "../components/contributionList"
import Actions from "../actions/contributionList"
import ActionsContributionShow from "../../contribution/actions/show"
import ActionsErrorShow from "../../error/actions/show"

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
        getDetail: (title, body, tagList) => {
            dispatch(ActionsContributionShow.getDetail(title, body, tagList))
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
