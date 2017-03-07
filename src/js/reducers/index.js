import {combineReducers} from "redux"
import contributionEdit from "../contribution/reducers/edit"
import contributionList from "../contribution/reducers/list"
import contributionShow from "../contribution/reducers/show"
import contributionTalk from "../contribution/reducers/talk"
import contributionForm from "../contribution/reducers/form"
import contributionSearch from "../contribution/reducers/search"

import errorShow from "../error/reducers/show"
import errorAlertMessage from "../error/reducers/alertMessage"

import userContributionList from "../user/reducers/contributionList"
import userMypage from "../user/reducers/mypage"
import userFollowList from "../user/reducers/followList"

import characterList from "../character/reducers/list"

import loginNew from "../login/reducers/new"
import loginAuth from "../login/reducers/auth"

import questionShow from "../question/reducers/show"

import passwordInput from "../password/reducers/input"
import passwordReset from "../password/reducers/reset"

import soundShow from "../sound/reducers/show"

// 機能ごとのstateを管理
const rootReducer = combineReducers({
    contributionEdit: contributionEdit,
    contributionList: contributionList,
    contributionShow: contributionShow,
    contributionTalk: contributionTalk,
    contributionForm: contributionForm,
    contributionSearch,
    errorShow: errorShow,
    errorAlertMessage,
    userContributionList: userContributionList,
    userMypage: userMypage,
    userFollowList,
    loginNew,
    loginAuth: loginAuth,
    characterList: characterList,
    questionShow,
    passwordInput,
    passwordReset,
    soundShow,
})

export default rootReducer
