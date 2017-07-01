// @flow
import React, { Component } from "react"
import {
  FormGroup,
  Button,
  PageHeader,
  ControlLabel,
  Alert,
  ListGroupItem,
  ListGroup
} from "react-bootstrap"

type Props = {
  onAdd: Function,
  success: boolean,
  warning: boolean,
  message: string
}

const reports = (success: boolean, warning: boolean, message: string) => {
  if (success) {
    return (
      <ListGroup>
        <ListGroupItem bsStyle="success">メール送信しました。ご確認ください！</ListGroupItem>
      </ListGroup>
    )
  }

  if (warning) {
    return (
      <Alert bsStyle="warning">
        {message}
      </Alert>
    )
  }
}

export default class Input extends Component {
  props: Props

  email: Object

  render() {
    return (
      <div className="container">
        <PageHeader>パスワードを再設定する</PageHeader>
        {reports(this.props.success, this.props.warning, this.props.message)}
        <ControlLabel>メールアドレス</ControlLabel>
        <FormGroup controlId="formHorizontalEmail">
          <input
            type="text"
            className="form-control"
            ref={input => {
              this.email = input
            }}
            placeholder="メールアドレス"
          />
        </FormGroup>
        <Button
          bsStyle="success"
          onClick={() => this.props.onAdd(this.email.value.trim())}
        >
          送信する
        </Button>
      </div>
    )
  }
}
