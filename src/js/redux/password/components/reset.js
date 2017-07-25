// @flow
import React, { Component } from "react"
import { Reset as Form } from "../../../component/password/"
import type { State as PasswordReset } from "../reducers/reset"

type Props = {
  match: {
    params: {
      email: string,
      keyword: string
    }
  },
  check: (email: string, keyword: string) => void,
  save: () => void,
  passwordReset: PasswordReset
}

export default class Reset extends Component {
  componentWillMount() {
    this.props.check(
      this.props.match.params.email,
      this.props.match.params.keyword
    )
  }
  props: Props
  render() {
    const { fetch, warning, message } = this.props.passwordReset

    return (
      <Form
        email={this.props.match.params.email}
        keyword={this.props.match.params.keyword}
        onSave={this.props.save.bind(this)}
        success={fetch}
        warning={warning}
        message={message}
      />
    )
  }
}
