import { connect } from "react-redux"
import List from "../components/list"
import ActionsList from "../actions/list"
import ActionsErrorShow from "../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getList: (list, init) => {
            dispatch(ActionsList.getList(list, init))
        },
        next: () => {
            dispatch(ActionsList.next())
        },
        addItem: (response) => {
            dispatch(ActionsList.addItem(response))
        },
        deleteItem: (id) => {
            dispatch(ActionsList.deleteItem(id))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
