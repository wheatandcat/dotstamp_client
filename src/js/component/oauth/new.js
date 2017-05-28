// @flow
import React, { Component } from "react"
import {
  ButtonToolbar,
  Button,
  Panel,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap"
import styles from "./styles.css"

type Props = {
  email: string,
  onNew: Function
}

export default class New extends Component {
  props: Props

  password: Object

  new() {
    this.props.onNew(this.props.email, this.password.value)
  }

  render() {
    return (
      <Panel header="新規登録" bsStyle="info" className={styles.form}>
        <FormGroup controlId="formHorizontalEmail">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            label="Email"
            type="email"
            placeholder="メールアドレス"
            value={this.props.email}
            disabled
          />
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            label="Password"
            type="password"
            placeholder="パスワード"
            inputRef={ref => {
              this.password = ref
            }}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={() => this.new()}>
              登録する
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Panel>
    )
  }
}
