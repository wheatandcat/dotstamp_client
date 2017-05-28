import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Mypage from "../components/mypage"
import { changeUserName } from "../actions/mypage"
import { fetchPostsIfNeeded, fetchUploadIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => {
      dispatch(fetchPostsIfNeeded("user/show/", types.SET_USER))
    },
    upload: formData => {
      dispatch(
        fetchUploadIfNeeded(
          "user/profile/upload/",
          types.UPLOAD_USER_PROFILE,
          formData
        )
      ).then(() => {
        dispatch(fetchPostsIfNeeded("user/show/", types.SET_USER))
      })
    },
    changeUserName: name => {
      dispatch(changeUserName(name))
    },
    save: action => {
      dispatch(fetchPostsIfNeeded("user/save/", types.SAVE_USER, action))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Mypage))
