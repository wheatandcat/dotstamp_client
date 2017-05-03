// @flow
import React, {Component} from "react"
import {FormGroup, Button, ButtonToolbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import styles from "./styles.css"

type Props = {
  onNew: Function,
  onOpen: Function,
}

export default class NewInput extends Component {
  props: Props

  render() {
    return (
      <div>
        <FormGroup controlId="formHorizontalEmail">
          <input type="text" className="form-control" id="user" name="user" placeholder="メールアドレス" ref="email"/>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <input type="password" className="form-control" id="password" name="password" placeholder="パスワード" ref="password"/>
        </FormGroup>
        <FormGroup>
          <br/>
          <div>
            <Button bsStyle="link" className={styles.NoSpace} onClick={() => this.props.onOpen()}>利用規約</Button>
            に同意のうえ、「利用規約に同意して登録する」ボタンを押してください。
          </div>
          <br/>
          <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={() => this.props.onNew(this.refs.email.value.trim(), this.refs.password.value.trim())}>
              利用規約に同意して登録する
            </Button>
          </ButtonToolbar>
        </FormGroup>
        <br/>
        <br/>
        <Link to="/login/login">
          <Button bsStyle="link">登録済みならばログインから</Button>
        </Link>
      </div>
    )
  }
}
