// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Reset as Form } from "../../../component/password/"

export default class Reset extends Component {
  componentWillMount() {
    this.props.check(
      this.props.match.params.email,
      this.props.match.params.keyword
    )
  }
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

Reset.propTypes = {
  match: PropTypes.object,
  check: PropTypes.func,
  save: PropTypes.func,
  passwordReset: PropTypes.object
}
