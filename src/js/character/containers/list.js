import { connect } from "react-redux"
import List from "../components/list"
import ActionsList from "../actions/list"
import ActionsErrorShow from "../../error/actions/show"

import { IMAGE_DISPLAY_TYPE_CHARACTER } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        getList: (response) => {
            dispatch(ActionsList.getList(response, IMAGE_DISPLAY_TYPE_CHARACTER))
        },
        setIcon: (id) => {
            dispatch(ActionsList.setIcon(id))
        },
        deleteIcon: (id) => {
            dispatch(ActionsList.deleteIcon(id))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
