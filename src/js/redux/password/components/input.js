// @flow
import React, { Component } from "react"
import { Input as Form } from "../../../component/password/"
import type { State as PasswordInput } from "../reducers/input"

type Props = {
  add: ({ email: string }) => void,
  passwordInput: PasswordInput
}

export default class Input extends Component {
  props: Props
  add(email: string) {
    this.props.add({
      email
    })
  }
  render() {
    const { fetch, warning, message } = this.props.passwordInput

    return (
      <Form
        onAdd={this.add.bind(this)}
        success={fetch}
        warning={warning}
        message={message}
      />
    )
  }
}
