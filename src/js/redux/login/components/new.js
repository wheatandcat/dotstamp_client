import PropTypes from "prop-types"
/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, { Component } from "react"
import {Link} from "react-router"
import {PageHeader, Alert, ButtonToolbar, FormGroup, Col, Button, Grid, Row} from "react-bootstrap"
import {PASSWORD_LENGTH_MIN} from "../../../constants/common"
import Envelope from "../../../utils/parts/envelope"
import {NoSpace} from "../../../../css/common.css"
export default class New extends Component {
  componentWillMount() {}
  /**
     * 新規登録する
     */
  new() {
    let email = this.refs.email.value.trim()
    let password = this.refs.password.value.trim()

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
  /**
     * 警告を取得する
     *
     * @return {object} html
     */
  getAlert() {
    if (!this.props.loginNew.Warning) {
      return ""
    }

    return (
      <Alert bsStyle="danger">
        {this.props.loginNew.Message}
      </Alert>
    )
  }

  /**
     * 描画する
     *
     * @return {object} html
     */
  render() {
    return (
      <div>
        <div className="container">
          <PageHeader>
            .stamp&nbsp;&nbsp;新規ユーザ登録をする
          </PageHeader>
        </div>
        <Grid>
          <br/>
          <br/>
          <Row className="show-grid">
            <Col md={6}>
              <Envelope open={this.props.loginNew.Open} text={this.props.loginNew.Text}/>
            </Col>
            <Col md={6}>
              {this.getAlert()}
              <FormGroup controlId="formHorizontalEmail">
                <input type="text" className="form-control" id="user" name="user" placeholder="メールアドレス" ref="email"/>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <input type="password" className="form-control" id="password" name="password" placeholder="パスワード" ref="password"/>
              </FormGroup>
              <FormGroup>
                <br/>
                <div>
                  <Button bsStyle="link" className={NoSpace} onClick={() => this.props.open()}>利用規約</Button>
                  に同意のうえ、「利用規約に同意して登録する」ボタンを押してください。
                </div>
                <br/>
                <ButtonToolbar>
                  <Button bsStyle="success" bsSize="large" onClick={() => this.new()}>
                    利用規約に同意して登録する
                  </Button>
                </ButtonToolbar>
              </FormGroup>
              <br/>
              <br/>
              <Link to="login/login">
                <Button bsStyle="link">登録済みならばログインから</Button>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

New.propTypes = {
  new: PropTypes.func,
  open: PropTypes.func,
  loginNew: PropTypes.object,
  alert: PropTypes.func
}
