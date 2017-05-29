// @flow
import React, { Component } from "react"
import { ButtonGroup, Button, ControlLabel, Glyphicon } from "react-bootstrap"
import styles from "./styles.css"

type Props = {
  disabled: boolean,
  onChange: Function
}

export default class LoginInput extends Component {
  props: Props

  file: Object

  render() {
    return (
      <ButtonGroup>
        <Button bsSize="small" disabled={this.props.disabled} bsStyle="info">
          <ControlLabel htmlFor="image-file" bsClass={styles.upload}>
            <Glyphicon glyph="picture" />
          </ControlLabel>
          <input
            type="file"
            id="image-file"
            name="image-file"
            className="hidden"
            accept="image/jpeg,image/png,image/jpg"
            ref={input => {
              this.file = input
            }}
            onChange={this.props.onChange}
            disabled={this.props.disabled}
          />
        </Button>
      </ButtonGroup>
    )
  }
}
