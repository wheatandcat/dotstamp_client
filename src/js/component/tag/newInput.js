// @flow
import React, { Component } from "react"
import { FormGroup, FormControl } from "react-bootstrap"

type Props = {
  onTag: (label: string) => void
}

export default class NewInput extends Component {
  props: Props

  label: {
    value: string
  }

  tag() {
    this.props.onTag(this.label.value)
  }

  render() {
    return (
      <FormGroup>
        <FormControl
          label="Tag"
          type="tag"
          placeholder="タグをスペース区切りで5つまで入力（例：映画 2001年宇宙の旅）"
          inputRef={ref => {
            this.label = ref
          }}
          onChange={() => this.tag()}
        />
      </FormGroup>
    )
  }
}
