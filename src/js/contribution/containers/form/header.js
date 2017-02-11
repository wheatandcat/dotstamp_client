import { connect } from "react-redux"
import FormHeader from "../../components/form/header"
import {changeTitle, changeTag, changeHeight} from "../../actions/form"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"


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
            dispatch(fetchPostsIfNeeded(
                    "contribution/new/",
                    types.NEW_CONTRIBUTION_FORM,
                    action
                )
            )
        },
        save: (action) => {
            dispatch(fetchPostsIfNeeded(
                    "contribution/save/",
                    types.SAVE_CONTRIBUTION_FORM,
                    action
                )
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHeader)
