// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Input as Form } from "../../../component/password/"

export default class Input extends Component {
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

Input.propTypes = {
  add: PropTypes.func,
  passwordInput: PropTypes.object
}
