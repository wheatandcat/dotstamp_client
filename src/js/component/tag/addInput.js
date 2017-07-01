// @flow
import React, { Component } from "react"
import { FormControl, Button, InputGroup } from "react-bootstrap"
import styles from "./styles.css"

type Props = {
  onAdd: Function
}

export default class AddInput extends Component {
  props: Props

  label: Object

  addTag() {
    this.props.onAdd(this.label.value)

    this.label.value = ""
  }

  render() {
    return (
      <InputGroup className={styles.addInput}>
        <FormControl
          label="Tag"
          type="tag"
          placeholder="タグを追加する"
          inputRef={ref => {
            this.label = ref
          }}
        />
        <InputGroup.Button>
          <Button onClick={() => this.addTag()}>追加</Button>
        </InputGroup.Button>
      </InputGroup>
    )
  }
}
