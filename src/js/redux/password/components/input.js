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
    return (
      <Form
        onAdd={this.add.bind(this)}
        success={this.props.passwordInput.fetch}
        warning={this.props.passwordInput.warning}
        message={this.props.passwordInput.message}
      />
    )
  }
}

Input.propTypes = {
  add: PropTypes.func,
  passwordInput: PropTypes.object
}
