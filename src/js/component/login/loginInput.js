// @flow
import React, { Component } from "react"
import { FormGroup, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Platform } from "./"

type Props = {
  onLogin: Function
}

export default class LoginInput extends Component {
  props: Props

  email: Object
  password: Object

  render() {
    return (
      <div>
        <FormGroup controlId="formHorizontalEmail">
          <input
            type="text"
            id="user"
            name="user"
            className="form-control"
            placeholder="メールアドレス"
            ref={input => {
              this.email = input
            }}
          />
        </FormGroup>
        <Form componentClass="fieldset" inline>
          <FormGroup controlId="formHorizontalPassword">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="パスワード"
              ref={input => {
                this.password = input
              }}
              size="45"
            />&nbsp;&nbsp;
            <Button
              id="submit"
              bsStyle="success"
              onClick={() =>
                this.props.onLogin(
                  this.email.value.trim(),
                  this.password.value.trim()
                )}
            >
              ログイン
            </Button>
            <Link to="/password/input">
              <Button bsStyle="link">パスワードを忘れた場合</Button>
            </Link>
            <hr />
            <br />
            <Platform label="ログイン" />
          </FormGroup>
        </Form>
        <br />
        <br />
        <Link to="/login/new">
          <Button bsStyle="link">メールアドレスを入力して登録する場合は、こちら</Button>
        </Link>
      </div>
    )
  }
}
