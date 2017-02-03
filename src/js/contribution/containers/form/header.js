import { connect } from "react-redux"
import FormHeader from "../../components/form/header"

import ActionsForm from "../../actions/form"
import ActionsErrorShow from "../../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        changeTitle: (title) => {
            dispatch(ActionsForm.changeTitle(title))
        },
        changeTag: (tag) => {
            dispatch(ActionsForm.changeTag(tag))
        },
        changeHeight: (height) => {
            dispatch(ActionsForm.changeHeight(height))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHeader)
