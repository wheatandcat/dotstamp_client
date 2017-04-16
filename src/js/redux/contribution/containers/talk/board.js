import { connect } from "react-redux"
import TalkBoard from "../../components/talk/board"
import {setTalkList} from "../../actions/talk"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        setTalkList: (talkList) => {
            dispatch(setTalkList(talkList))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkBoard)
