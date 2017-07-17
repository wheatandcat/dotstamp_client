import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import New from "../components/new"
import * as types from "../../../constants/ActionTypes"
import { setDefaultList } from "../../character/actions/list"
import { fetchGetsIfNeeded } from "../../../utils/fetch"
import { init } from "../actions/new"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    init: experience => {
      dispatch(init(experience))
    },
    setDefaultList: () => {
      dispatch(setDefaultList())
    },
    setCharacterImageList: () => {
      dispatch(fetchGetsIfNeeded("characters/", types.GET_CHARACTER_LIST))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
