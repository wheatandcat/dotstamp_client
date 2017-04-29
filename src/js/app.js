/*global process*/
/*eslint no-console: ["error", { allow: ["log", "debug", "info", "warn"] }] */
import "babel-polyfill"

import PropTypes from "prop-types"

import React, { Component } from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { ConnectedRouter, push } from "react-router-redux"

import {history, store} from "./store/configureStore"
import ContributionNew from "./redux/contribution/containers/new"
import ContributionEdit from "./redux/contribution/containers/edit"
import ContributionList from "./redux/contribution/containers/list"
import ContributionShow from "./redux/contribution/containers/show"
import ContributionSearch from "./redux/contribution/containers/search"

import UserContributionList from "./redux/user/containers/contributionList"
import UserMypage from "./redux/user/containers/mypage"
import UserFollowList from "./redux/user/containers/followList"

import loginNew from "./redux/login/containers/new"
import loginLogin from "./redux/login/containers/login"

import CharacterList from "./redux/character/containers/list"

import PasswordInput from "./redux/password/containers/input"
import PasswordReset from "./redux/password/containers/reset"

import SoundShow from "./redux/sound/containers/show"

import ErrorShow from "./redux/error/containers/show"
import Header from "./utils/parts/header"

import questionShow from "./redux/question/containers/show"

import informationShow from "./redux/information/containers/show"

import About from "./utils/parts/about"
import Help from "./utils/parts/help"

if (process.env.ENV=="production") {
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
        <ConnectedRouter history={history}>
          <div>
            <Menu />
            <Switch>
              <Route exact path="/" component={ContributionList} />
              <Route exact path="/index.html" component={ContributionList} />
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
              <Route path="/contribution/experience" component={ContributionNew} />
              <Route component={ContributionList}/>
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

// store.dispatch(push("/user/contributionList"))
// console.log(store)



render((
  <App></App>
), document.querySelector("#root"))
