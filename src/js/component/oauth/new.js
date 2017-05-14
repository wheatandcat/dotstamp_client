// @flow
import React, {Component} from "react"
import {ButtonToolbar, Button, Panel, FormGroup, ControlLabel, FormControl} from "react-bootstrap"
import styles from "./styles.css"

type Props = {
  email: string,
  onNew: Function,
}

export default class New extends Component {
  props: Props

  password: Object

  render() {
    return (
      <Panel
        header="新規登録する"
        bsStyle="info"
        className={styles.form}
      >
        <FormGroup controlId="formHorizontalEmail">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            label="Email"
            type="email"
            placeholder="Email"
            value={this.props.email}
            disabled
          />
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            label="Password"
            type="password"
            placeholder="Password"
            inputRef={ref => { this.password = ref }}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <ButtonToolbar>
            <Button
              bsStyle="success"
              bsSize="large"
              onClick={() => this.props.onNew()}
            >
              利用規約に同意して登録する
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Panel>
    )
  }
}
