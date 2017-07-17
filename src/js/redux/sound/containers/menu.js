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
import { fetchPostsIfNeeded, fetchGetsIfNeeded } from "../../../utils/fetch"
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
    make: id => {
      dispatch(fetchPostsIfNeeded(`movies/${id}`, types.MAKE_SOUND_SHOW_MOVIE))
    },
    upload: id => {
      dispatch(
        fetchPostsIfNeeded(`movies/${id}/upload/`, types.UPLOAD_SOUND_YOUTUBE)
      ).then(() => {
        dispatch(
          fetchGetsIfNeeded(
            `sounds/${id}`,
            types.GET_CONTRIBUTION_FORM_SOUND_DETAIL
          )
        )
      })
    },
    reflect: action => {
      dispatch(
        fetchPostsIfNeeded(
          `sounds/${action.userContributionId}/reflect`,
          types.REFLECT_SOUND_SHOW,
          action
        )
      ).then(() => {
        dispatch(
          fetchGetsIfNeeded(
            `sounds/${action.userContributionId}`,
            types.GET_CONTRIBUTION_FORM_SOUND_DETAIL
          )
        )
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))
