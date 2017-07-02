// @flow
import React, { Component } from "react"
import { FormGroup, Button, ButtonToolbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Platform } from "./"
import styles from "./styles.css"

type Props = {
  onNew: Function,
  onOpen: Function
}

export default class NewInput extends Component {
  props: Props

  email: Object
  password: Object

  render() {
    return (
      <div>
        <FormGroup controlId="formHorizontalEmail">
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
            placeholder="メールアドレス"
            ref={input => {
              this.email = input
            }}
          />
        </FormGroup>
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
          />
        </FormGroup>
        <FormGroup>
          <br />
          <div>
            <Button
              bsStyle="link"
              className={styles.NoSpace}
              onClick={() => this.props.onOpen()}
            >
              利用規約
            </Button>
            に同意のうえ、「利用規約に同意して登録する」ボタンを押してください。
          </div>
          <br />
          <ButtonToolbar>
            <Button
              bsStyle="success"
              bsSize="large"
              onClick={() =>
                this.props.onNew(
                  this.email.value.trim(),
                  this.password.value.trim()
                )}
            >
              利用規約に同意して登録する
            </Button>
          </ButtonToolbar>
        </FormGroup>
        <hr />
        <br />
        <Platform label="アカウント登録" />
        <Link to="/login">
          <Button bsStyle="link">登録済みならばログインから</Button>
        </Link>
      </div>
    )
  }
}
