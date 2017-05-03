// @flow
import React, {Component} from "react"
import {FormGroup, Button, Form} from "react-bootstrap"
import {Link} from "react-router-dom"

type Props = {
  onLogin: Function,
}

export default class LoginInput extends Component {
  props: Props

  render() {
    return (
      <div>
        <FormGroup controlId="formHorizontalEmail">
          <input type="text" id="user" name="user" className="form-control" placeholder="メールアドレス" ref="email"/>
        </FormGroup>
        <Form componentClass="fieldset" inline>
          <FormGroup controlId="formHorizontalPassword">
            <input type="password" className="form-control" id="password" name="password" placeholder="パスワード" ref="password" size="45"/>&nbsp;&nbsp;
            <Button bsStyle="success" onClick={() => this.props.onLogin(this.refs.email.value.trim(), this.refs.password.value.trim())}>
              ログイン
            </Button>
            <br/>
            <Link to="/password/input">
              <Button bsStyle="link">パスワードを忘れた場合は、こちら</Button>
            </Link>
          </FormGroup>
        </Form>
        <br/>
        <br/>
        <Link to="/login/new">
          <Button bsStyle="link">メールアドレスを入力して登録する場合は、こちら</Button>
        </Link>
      </div>
    )
  }
}
