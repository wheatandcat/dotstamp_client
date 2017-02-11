import { connect } from "react-redux"
import ContributionList from "../components/contributionList"
import {setContribution} from "../actions/contributionList"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getList: () => {
            dispatch(fetchPostsIfNeeded(
                    "user/contributionList/",
                    types.GET_USER_CONTRBUTION_LIST
                )
            )
        },
        setContribution: (contributionId) => {
            dispatch(setContribution(contributionId))
        },
        getDetail: (id) => {
            dispatch(fetchPostsIfNeeded(
                    "contribution/show/" + id,
                    types.GET_CONTRIBUTION_SHOW
                )
            )
        }
    }
}

// connectでReduxとReactコンポーネントを繋ぐ
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContributionList)
