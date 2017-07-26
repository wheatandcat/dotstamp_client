// @flow
import React, { Component } from "react"
import type { State as LoginAuth } from "../reducers/auth"
import { Page } from "../../../component/header"

type Props = {
  auth: () => void,
  logout: () => void,
  loginAuth: LoginAuth
}

export default class Auth extends Component {
  componentWillMount() {
    // 認証する
    this.props.auth()
  }
  props: Props

  /**
   * 描画する
   */
  render() {
    return (
      <Page
        name={this.props.loginAuth.name}
        login={this.props.loginAuth.login}
        logout={this.props.logout}
      />
    )
  }
}
