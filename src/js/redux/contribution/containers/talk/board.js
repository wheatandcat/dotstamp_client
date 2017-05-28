import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import TalkBoard from "../../components/talk/board"
import { setTalkList } from "../../actions/talk"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    setTalkList: talkList => {
      dispatch(setTalkList(talkList))
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TalkBoard)
)
