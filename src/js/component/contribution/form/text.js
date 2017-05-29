// @flow
import React, { Component } from "react"
import styles from "./styles.css"

type DefaultProps = { body: string }

type Props = {
  edit: boolean,
  body: string,
  onChange: Function
}

type State = {
  body: string
}

export default class Text extends Component<DefaultProps, Props, State> {
  static defaultProps = { body: "" }
  state = { body: "" }
  props: Props

  body: Object

  text() {
    this.props.onChange(this.body.value)
    this.setState({ body: this.body.value })
  }

  render() {
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
          defaultValue={this.state.body}
        />
      </div>
    )
  }
}
