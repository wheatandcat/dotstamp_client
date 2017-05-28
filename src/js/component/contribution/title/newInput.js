// @flow
import React, { Component } from "react"
import { FormGroup, FormControl } from "react-bootstrap"

type Props = {
  defaultValue?: string,
  onTitle: Function
}

export default class NewInput extends Component {
  props: Props

  label: Object

  title() {
    this.props.onTitle(this.label.value)
  }

  render() {
    if (this.props.defaultValue && this.label) {
      this.label.value = this.props.defaultValue
    }

    return (
      <FormGroup>
        <FormControl
          label="Title"
          type="title"
          placeholder="タイトル(100文字以内)"
          inputRef={ref => {
            this.label = ref
          }}
          defaultValue={this.props.defaultValue}
          onChange={() => this.title()}
        />
      </FormGroup>
    )
  }
}
