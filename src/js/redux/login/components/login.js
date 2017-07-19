// @flow
import React, { Component } from "react"
import { Glyphicon, PageHeader, Col, Grid, Row } from "react-bootstrap"
import { Hello, LoginInput } from "../../../component/login/"

type Props = {
  loginCheck: Function
}

export default class Login extends Component {
  props: Props
  /**
   * ログインする
   */
  login(email: string, password: string) {
    this.props.loginCheck({ email, password })
  }
  /**
   * 描画する
   */
  render() {
    return (
      <div>
        <div className="container">
          <PageHeader>
            <Glyphicon glyph="log-in" />&nbsp;ログイン
          </PageHeader>
        </div>
        <Grid>
          <br />
          <br />
          <Row>
            <Col xs={9} md={6}>
              <Hello />
            </Col>
            <Col xs={9} md={6}>
              <LoginInput onLogin={this.login.bind(this)} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
