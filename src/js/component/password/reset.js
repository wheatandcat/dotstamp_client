// @flow
import React, { Component } from "react"
import {
  FormGroup,
  Button,
  PageHeader,
  ControlLabel,
  Alert,
  Panel
} from "react-bootstrap"
import { Link } from "react-router-dom"

type Props = {
  onSave: Function,
  email: string,
  keyword: string,
  success: boolean,
  warning: boolean,
  message: string
}

export default class Reset extends Component {
  props: Props

  password: Object
  save() {
    this.props.onSave({
      email: this.props.email,
      keyword: this.props.keyword,
      password: this.password.value
    })
  }
  render() {
    if (this.props.warning) {
      return (
        <Alert bsStyle="danger">
          {this.props.message}
        </Alert>
      )
    }

    if (this.props.success) {
      return (
        <div>
          <PageHeader>パスワードを再設定する</PageHeader>
          <br />
          <Panel header="パスワードを変更しました" bsStyle="success">
            <Link to="/login/login">ログインする</Link>
          </Panel>
        </div>
      )
    }

    return (
      <div className="container">
        <PageHeader>パスワードを再設定する</PageHeader>
        <ControlLabel>パスワード</ControlLabel>

        <FormGroup controlId="formHorizontalEmail">
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
        <Button bsStyle="success" onClick={() => this.save()}>
          変更する
        </Button>
      </div>
    )
  }
}
