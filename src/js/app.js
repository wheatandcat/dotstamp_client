import "babel-polyfill"

import React, { Component, PropTypes } from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import configureStore from "./store/configureStore"
import ContributionNew from "./contribution/containers/new"
import ContributionEdit from "./contribution/containers/edit"
import ContributionList from "./contribution/containers/list"
import ContributionShow from "./contribution/containers/show"

import UserContributionList from "./user/containers/contributionList"
import loginNew from "./login/containers/new"
import loginLogin from "./login/containers/login"

import CharacterList from "./character/containers/list"

import ErrorShow from "./error/containers/show"
import Header from "./utils/parts/header"

import { fetchPostsIfNeeded } from "./contribution/actions/list"


import { IndexRoute, Router, Route, hashHistory } from "react-router"

const store = configureStore()

class Menu extends Component {
    render () {
        return (
            <div className="container">
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
                        <Route name="/contribution/show" path="/contribution/show/:id" component={ContributionShow} />
                        <Route path="/user/contributionList" component={UserContributionList} />
                        <Route path="/character/list" component={CharacterList} />
                        <Route path="/login/new" component={loginNew} />
                        <Route path="/login/login" component={loginLogin} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}


render((
    <App></App>
    ), document.querySelector("#root"))
