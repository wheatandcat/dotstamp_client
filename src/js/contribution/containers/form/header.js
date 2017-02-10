import { connect } from "react-redux"
import FormHeader from "../../components/form/header"
import {changeTitle, changeTag, changeHeight} from "../../actions/form"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"
import ActionsErrorShow from "../../../error/actions/show"


function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        changeTitle: (title) => {
            dispatch(changeTitle(title))
        },
        changeTag: (tag) => {
            dispatch(changeTag(tag))
        },
        changeHeight: (height) => {
            dispatch(changeHeight(height))
        },
        new: (action) => {
            console.log (action)
            dispatch(fetchPostsIfNeeded(
                    "contribution/new/",
                    types.NEW_CONTRIBUTION_FORM,
                    action
                )
            )
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHeader)
