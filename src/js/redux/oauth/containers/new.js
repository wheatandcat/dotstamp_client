// @flow
import React, { Component } from "react"
import {connect} from "react-redux"
import { withRouter } from "react-router-dom"
import {fetchPostsIfNeeded} from "../../../utils/fetch"
import {PASSWORD_LENGTH_MIN} from "../../../constants/common"
import {alert} from "../modules/new"
import {Page} from "../../../component/oauth/"
import * as types from "../../../constants/ActionTypes"

type Props = {
  location: Object,
  match: Object,
  alert: Function,
  new: Function,
  loginNew: Object,
}

class New extends Component {
  props: Props
  new(email :string, password: string) {
    if (!email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
      this.props.alert("使用できないメールアドレスです")
      return
    }

    if (password.length < PASSWORD_LENGTH_MIN) {
      this.props.alert("パスワードは8文字以上に設定して下さい")
      return
    }

    this.props.new({email: email, password: password})
  }
  render() {
    return (
      <Page
        email={decodeURIComponent(this.props.location.search).split("=")[1]}
        onNew={this.new.bind(this)}
        isAlert={this.props.loginNew.Warning}
        message={this.props.loginNew.Message}
      />
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    new: (params) => {
      dispatch(fetchPostsIfNeeded("login/new/", types.SET_LOGIN_USER, params))
    },
    alert: (message) => {
      dispatch(alert(message))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
