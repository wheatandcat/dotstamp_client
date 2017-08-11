// @flow
import React, { Component } from "react"
import { FormGroup, Form, Label, Glyphicon } from "react-bootstrap"
import { AddInput } from "./"
import styles from "./styles.css"
const TAG_MAX_NUMBER = 10

type Tag = {
  id: number,
  name: string
}

type Props = {
  tags: Array<Tag>,
  onAdd: () => void,
  onDelete: (id: number) => void
}

export default class AddForm extends Component {
  props: Props

  label: {
    value: string
  }
  input() {
    const { tags, onAdd } = this.props

    if (tags.length >= TAG_MAX_NUMBER) {
      return (
        <FormGroup>
          <Label bsStyle="danger">タグ登録は10個まで</Label>
        </FormGroup>
      )
    }

    return <AddInput onAdd={onAdd} />
  }

  render() {
    const { tags, onDelete } = this.props

    return (
      <FormGroup>
        <Form inline>
          {tags.map(tag =>
            <span key={tag.id}>
              &nbsp;
              <Label bsStyle="info" className={styles.tag}>
                <Glyphicon
                  glyph="remove"
                  className={styles.close}
                  onClick={() => onDelete(tag.id)}
                />
                &nbsp;
                <span>{tag.name}</span>
              </Label>
            </span>
          )}
          &nbsp;
          {this.input()}
        </Form>
      </FormGroup>
    )
  }
}
