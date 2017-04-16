import {connect} from "react-redux"
import Search from "../components/search"

import {fetchPostsIfNeeded} from "../../../utils/fetch"
import {setOrder, paging} from "../actions/search"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        search: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "contribution/search/",
                    types.GET_CONTRIBUTION_SEARCH_LIST,
                    action,
                    action
                )
            )
        },
        paging: (search, order, page) => {
            dispatch(paging(search, order, page))
        },
        setOrder: (order) => {
            dispatch(setOrder(order))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
