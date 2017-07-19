// @flow
import React from "react"
import { Provider } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
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
import OauthNew from "./redux/oauth/containers/new"
import SoundShow from "./redux/sound/containers/show"
import questionShow from "./redux/question/containers/show"
import informationShow from "./redux/information/containers/show"
import { Page as About } from "./component/about/"
import { Page as Help } from "./component/help/"
import Menu from "./menu"

type Props = {
  store: Object,
  history: Object
}

export default ({ store, history }: Props) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={ContributionList} />
          <Route exact path="/index.html" component={ContributionList} />
          <Route path="/contribution/new" component={ContributionNew} />
          <Route path="/contribution/edit/:id" component={ContributionEdit} />
          <Route path="/contribution/list" component={ContributionList} />
          <Route path="/contribution/show/:id" component={ContributionShow} />
          <Route
            path="/contribution/search/:search/:order/:page"
            component={ContributionSearch}
          />
          <Route
            path="/user/contributionList"
            component={UserContributionList}
          />
          <Route path="/user/mypage" component={UserMypage} />
          <Route
            path="/user/followList/:order/:page"
            component={UserFollowList}
          />
          <Route path="/character/list" component={CharacterList} />
          <Route path="/login/new" component={loginNew} />
          <Route path="/login/input" component={loginLogin} />
          <Route path="/password/input" component={PasswordInput} />
          <Route
            path="/password/reset/:email/:keyword"
            component={PasswordReset}
          />
          <Route path="/sound/show/:id" component={SoundShow} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/question" component={questionShow} />
          <Route path="/information/:file" component={informationShow} />
          <Route path="/contribution/experience" component={ContributionNew} />
          <Route path="/oauth/" component={OauthNew} />
          <Route component={ContributionList} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
