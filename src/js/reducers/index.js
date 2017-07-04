import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import contributionEdit from "../redux/contribution/reducers/edit"
import contributionList from "../redux/contribution/reducers/list"
import contributionShow from "../redux/contribution/reducers/show"
import contributionTalk from "../redux/contribution/reducers/talk"
import contributionForm from "../redux/contribution/reducers/form"
import contributionSearch from "../redux/contribution/reducers/search"

import errorShow from "../redux/error/reducers/show"
import errorAlertMessage from "../redux/error/reducers/alertMessage"

import userContributionList from "../redux/user/reducers/contributionList"
import userMypage from "../redux/user/reducers/mypage"
import userFollowList from "../redux/user/reducers/followList"

import characterList from "../redux/character/reducers/list"

import loginNew from "../redux/login/reducers/new"
import loginAuth from "../redux/login/reducers/auth"

import questionShow from "../redux/question/reducers/show"

import passwordInput from "../redux/password/reducers/input"
import passwordReset from "../redux/password/reducers/reset"

import soundShow from "../redux/sound/reducers/show"
import soundMenu from "../redux/sound/reducers/menu"

import informationShow from "../redux/information/reducers/show"

import messageShow from "../redux/message/reducers/show"
import sound from "../redux/modules/soundLength"

const rootReducer = combineReducers({
  contributionEdit,
  contributionList,
  contributionShow,
  contributionTalk,
  contributionForm,
  contributionSearch,
  errorShow,
  errorAlertMessage,
  userContributionList,
  userMypage,
  userFollowList,
  loginNew,
  loginAuth,
  characterList,
  questionShow,
  passwordInput,
  passwordReset,
  soundShow,
  soundMenu,
  sound,
  informationShow,
  messageShow,
  routing
})

export default rootReducer
