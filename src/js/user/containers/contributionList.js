import { connect } from "react-redux"
import ContributionList from "../components/contributionList"
import {init, setViewStatus, setContribution, setTitleSearch, openDeleteConfirm, closeDeleteConfirm} from "../actions/contributionList"
import {fetchPostsIfNeeded} from "../../utils/fetch"
import * as types from "../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        init: () => {
            dispatch(init())
        },
        openDeleteConfirm: () => {
            dispatch(openDeleteConfirm())
        },
        closeDeleteConfirm: () => {
            dispatch(closeDeleteConfirm())
        },
        getList: () => {
            dispatch(fetchPostsIfNeeded(
                    "user/contributionList/",
                    types.GET_USER_CONTRBUTION_LIST,
                    {order: 1}
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
        },
        setTitleSearch: (list) => {
            dispatch(setTitleSearch(list))
        },
        setViewStatus: (viewStatus) => {
            dispatch(setViewStatus(viewStatus))
        },
        delete: (id) => {
            dispatch(fetchPostsIfNeeded(
                    "contribution/delete/" + id,
                    types.DELETE_CONTRIBUTION_SHOW
                )
            ).then(() => {
                dispatch(fetchPostsIfNeeded(
                        "user/contributionList/",
                        types.GET_USER_CONTRBUTION_LIST,
                        {order: 1}
                    )
                )
            })
        }
    }
}

// connectでReduxとReactコンポーネントを繋ぐ
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContributionList)
