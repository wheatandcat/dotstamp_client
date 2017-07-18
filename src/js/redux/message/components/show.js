// @flow
import React, { Component } from "react"
import { Fade, Alert } from "react-bootstrap"
import { Absolute, FadeMessage } from "./../../../../css/common.css"

type Props = {
  messageShow: Object,
  close: Function
}

export default class Show extends Component {
  props: Props
  close() {
    setTimeout(() => {
      this.props.close()
    }, 600)
  }
  /**
   * 描画する
   */
  render() {
    const { show, style, message } = this.props.messageShow

    return (
      <Fade
        in={show}
        onEntering={this.close.bind(this)}
        className={`${Absolute} ${FadeMessage}`}
        unmountOnExit
      >
        <div>
          <Alert bsStyle={style}>
            {message}
          </Alert>
        </div>
      </Fade>
    )
  }
}
