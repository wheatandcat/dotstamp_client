import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Show from "../components/edit"
import * as types from "../../../constants/ActionTypes"
import { fetchGetsIfNeeded } from "../../../utils/fetch"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: id => {
      dispatch(
        fetchGetsIfNeeded(
          `contributions/edit/${id}`,
          types.GET_CONTRIBUTION_EDIT
        )
      )
    },
    setCharacterImageList: () => {
      dispatch(fetchGetsIfNeeded("characters/", types.GET_CHARACTER_LIST))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
