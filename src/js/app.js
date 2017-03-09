/*global ENV*/
/*eslint no-console: ["error", { allow: ["log", "debug", "info", "warn"] }] */
import "babel-polyfill"

import React, { Component, PropTypes } from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import configureStore from "./store/configureStore"
import ContributionNew from "./contribution/containers/new"
import ContributionEdit from "./contribution/containers/edit"
import ContributionList from "./contribution/containers/list"
import ContributionShow from "./contribution/containers/show"
import ContributionSearch from "./contribution/containers/search"

import UserContributionList from "./user/containers/contributionList"
import UserMypage from "./user/containers/mypage"
import UserFollowList from "./user/containers/followList"

import loginNew from "./login/containers/new"
import loginLogin from "./login/containers/login"

import CharacterList from "./character/containers/list"

import PasswordInput from "./password/containers/input"
import PasswordReset from "./password/containers/reset"

import SoundShow from "./sound/containers/show"

import ErrorShow from "./error/containers/show"
import Header from "./utils/parts/header"

import questionShow from "./question/containers/show"

import informationShow from "./information/containers/show"

import About from "./utils/parts/about"
import Help from "./utils/parts/help"

import {IndexRoute, Router, Route, hashHistory} from "react-router"

const store = configureStore()

if (ENV=="production") {
    console.debug = function(){}
    console.info = function(){}
    console.log = function(){}
    console.warn = function(){}
}

window.onhashchange = function() {
    window.scrollTo(0, 0)
}


class Menu extends Component {
    render () {
        return (
            <div>
                <Header/>
                {this.props.children}
                <ErrorShow />
            </div>
        )
    }
}

Menu.propTypes = {
    children: PropTypes.object,
}

class App extends Component {
    componentWillMount () {

    }
    render () {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={Menu}>
                        <IndexRoute component={ContributionList} />
                        <Route path="/contribution/new" component={ContributionNew} />
                        <Route name="/contribution/edit" path="/contribution/edit/:id" component={ContributionEdit} />
                        <Route path="/contribution/list" component={ContributionList} />
                        <Route path="/contribution/show/:id" component={ContributionShow} />
                        <Route path="/contribution/search/:search/:order/:page" component={ContributionSearch} />
                        <Route path="/user/contributionList" component={UserContributionList} />
                        <Route path="/user/mypage" component={UserMypage} />
                        <Route path="/user/followList/:order/:page" component={UserFollowList} />
                        <Route path="/character/list" component={CharacterList} />
                        <Route path="/login/new" component={loginNew} />
                        <Route path="/login/login" component={loginLogin} />
                        <Route path="/password/input" component={PasswordInput} />
                        <Route path="/password/reset/:email/:keyword" component={PasswordReset} />
                        <Route path="/sound/show/:id" component={SoundShow} />
                        <Route path="/about" component={About} />
                        <Route path="/help" component={Help} />
                        <Route path="/question" component={questionShow} />
                        <Route path="/information/:file" component={informationShow} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}

render((
    <App></App>
    ), document.querySelector("#root"))
