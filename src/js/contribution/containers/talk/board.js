import { connect } from "react-redux"
import TalkBoard from "../../components/talk/board"
import ActionsTalk from "../../actions/talk"
import ActionsErrorShow from "../../../error/actions/show"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        setTalkList: (talkList) => {
            dispatch(ActionsTalk.setTalkList(talkList))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkBoard)
