import {connect} from "react-redux"

import Show from "../components/show"
import {fetchTextIfNeeded} from "../../../utils/fetch"

import * as types from "../../../constants/ActionTypes"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        get: (file) => {
            dispatch(fetchTextIfNeeded(
                    "static/txt/" + file + ".txt",
                    types.GET_JSON,
                    {fileName: file}
                )
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
