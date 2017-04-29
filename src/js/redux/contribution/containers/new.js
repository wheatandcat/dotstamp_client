import {connect} from "react-redux"
import { withRouter } from "react-router-dom"
import New from "../components/new"
import * as types from "../../../constants/ActionTypes"
import {setDefaultList} from "../../character/actions/list"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
import {init} from "../actions/new"

import {IMAGE_DISPLAY_TYPE_CHARACTER} from "../../../utils/image"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    init: (experience) => {
      dispatch(init(experience))
    },
    setDefaultList: () => {
      dispatch(setDefaultList())
    },
    setCharacterImageList: () => {
      dispatch(fetchPostsIfNeeded("characterImage/list/", types.GET_CHARACTER_LIST, {}, {imageType: IMAGE_DISPLAY_TYPE_CHARACTER}))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
