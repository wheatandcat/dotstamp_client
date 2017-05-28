import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Menu from "../components/menu"
import { message } from "../../message/actions/show"
import {
  openInformation,
  closeInformation,
  uploading,
  openUpload,
  closeUpload,
  makingMovie,
  open,
  close
} from "../action/menu"
import { fetchPostsIfNeeded } from "../../../utils/fetch"
import * as types from "../../../constants/ActionTypes"

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    open: () => {
      dispatch(open())
    },
    close: () => {
      dispatch(close())
    },
    openUpload: () => {
      dispatch(openUpload())
    },
    closeUpload: () => {
      dispatch(closeUpload())
    },
    makingMovie: () => {
      dispatch(makingMovie())
    },
    uploading: () => {
      dispatch(uploading())
    },
    openInformation: () => {
      dispatch(openInformation())
    },
    closeInformation: () => {
      dispatch(closeInformation())
    },
    message: (val, type) => {
      dispatch(message(val, type))
    },
    make: action => {
      dispatch(
        fetchPostsIfNeeded("movie/make/", types.MAKE_SOUND_SHOW_MOVIE, action)
      )
    },
    upload: action => {
      dispatch(
        fetchPostsIfNeeded("movie/upload/", types.UPLOAD_SOUND_YOUTUBE, action)
      ).then(() => {
        dispatch(
          fetchPostsIfNeeded(
            "sound/show/",
            types.GET_CONTRIBUTION_FORM_SOUND_DETAIL,
            action
          )
        )
      })
    },
    reflect: action => {
      dispatch(
        fetchPostsIfNeeded("sound/reflect/", types.REFLECT_SOUND_SHOW, action)
      ).then(() => {
        dispatch(
          fetchPostsIfNeeded(
            "sound/show/",
            types.GET_CONTRIBUTION_FORM_SOUND_DETAIL,
            action
          )
        )
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))
