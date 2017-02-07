import { combineReducers } from "redux"
import contributionEdit from "../contribution/reducers/edit"
import contributionList from "../contribution/reducers/list"
import contributionShow from "../contribution/reducers/show"
import contributionTalk from "../contribution/reducers/talk"
import contributionForm from "../contribution/reducers/form"

import errorShow from "../error/reducers/show"

import userContributionList from "../user/reducers/contributionList"
import userMypage from "../user/reducers/mypage"

import characterList from "../character/reducers/list"

import loginNew from "../login/reducers/new"
import loginAuth from "../login/reducers/auth"

// 機能ごとのstateを管理
const rootReducer = combineReducers({
    contributionEdit: contributionEdit,
    contributionList: contributionList,
    contributionShow: contributionShow,
    contributionTalk: contributionTalk,
    contributionForm: contributionForm,
    errorShow: errorShow,
    userContributionList: userContributionList,
    userMypage: userMypage,
    loginNew: loginNew,
    loginAuth: loginAuth,
    characterList: characterList
})

export default rootReducer
