// @flow
import React, { Component } from "react"
import { FormGroup, Col, ControlLabel } from "react-bootstrap"

type DefaultProps = { name: string }

type Props = {
  name: string,
  onChange: (name: string) => void
}

type State = {
  name: string
}

export default class UserName extends Component<DefaultProps, Props, State> {
  static defaultProps = { name: "" }
  state = { name: "" }
  props: Props

  name: {
    value: string
  }

  change() {
    this.props.onChange(this.name.value)
    this.setState({ name: this.name.value })
  }
  render() {
    return (
      <div>
        <ControlLabel>ユーザ名</ControlLabel>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={8}>
            <input
              type="text"
              className="form-control"
              ref={input => {
                this.name = input
              }}
              value={this.props.name}
              onChange={this.change.bind(this)}
            />
          </Col>
        </FormGroup>
      </div>
    )
  }
}
