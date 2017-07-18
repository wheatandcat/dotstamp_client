// @flow
import React, { Component } from "react"
import { Alert, Glyphicon } from "react-bootstrap"

type Props = {
  closeAlert: Function,
  errorAlertMessage: Object
}

export default class AlertMessage extends Component {
  props: Props
  /**
   * 警告を取得する
   */
  getAlert() {
    const { warning, message } = this.props.errorAlertMessage

    if (!warning) {
      return ""
    }

    return (
      <Alert bsStyle="danger">
        <Glyphicon glyph="remove" onClick={() => this.props.closeAlert()} />
        &nbsp;
        {message}
      </Alert>
    )
  }
  /**
   * 描画する
   */
  render() {
    return (
      <div>
        {this.getAlert()}
      </div>
    )
  }
}
