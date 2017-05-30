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
    return (
      <Form
        email={this.props.match.params.email}
        keyword={this.props.match.params.keyword}
        onSave={this.props.save.bind(this)}
        success={this.props.passwordReset.fetch}
        warning={this.props.passwordReset.warning}
        message={this.props.passwordReset.message}
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
