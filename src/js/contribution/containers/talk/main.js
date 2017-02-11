import { connect } from "react-redux"
import Talk from "../../components/talk/main"
import {setEditBody, deleteBody} from "../../actions/talk"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        setEditBody: (priority, body, changeCharacter, directionType) => {
            dispatch(setEditBody(priority, body, changeCharacter, directionType))
        },
        deleteBody: (priority) => {
            dispatch(deleteBody(priority))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Talk)
