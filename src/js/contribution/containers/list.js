import { connect } from "react-redux"
import List from "../components/list"
import {getList, next, addItem, deleteItem, fetchPostsIfNeeded} from "../actions/list"
import ActionsErrorShow from "../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getList: (list, init) => {
            dispatch(getList(list, init))
        },
        next: () => {
            dispatch(next())
        },
        addItem: (response) => {
            dispatch(addItem(response))
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id))
        },
        fetchPostsIfNeeded:(action) => {
            dispatch(fetchPostsIfNeeded("contributionList", action))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
