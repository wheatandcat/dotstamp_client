// @flow
import React, { Component } from "react"
import styles from "./styles.css"

type DefaultProps = { body: string }

type Props = {
  edit: boolean,
  body: string,
  onChange: Function
}

export default class Text extends Component<DefaultProps, Props, *> {
  static defaultProps = { body: "" }
  props: Props

  body: Object

  text() {
    this.props.onChange(this.body.value)
  }

  render() {
    if (this.body && this.props.body != this.body.value) {
      this.body.value = this.props.body
    }

    return (
      <div className={styles.gap}>
        <textarea
          name="body"
          id="body"
          className={
            this.props.edit ? "form-control " + styles.edit : "form-control"
          }
          rows="4"
          placeholder="本文。（最大:256文字まで）"
          ref={input => {
            this.body = input
          }}
          onChange={this.text.bind(this)}
        />
      </div>
    )
  }
}
