// @flow
import React, { Component } from "react"
import { FormGroup, Form, Label, Glyphicon } from "react-bootstrap"
import { AddInput } from "./"
import styles from "./styles.css"
const TAG_MAX_NUMBER = 10

type Props = {
  tagList: Array<Object>,
  onAdd: Function,
  onDelete: Function
}

export default class AddForm extends Component {
  props: Props

  label: Object
  input() {
    if (this.props.tagList.length >= TAG_MAX_NUMBER) {
      return (
        <FormGroup>
          <Label bsStyle="danger">タグ登録は10個まで</Label>
        </FormGroup>
      )
    }

    return <AddInput onAdd={this.props.onAdd} />
  }

  render() {
    return (
      <FormGroup>
        <Form inline>
          {this.props.tagList.map(tag =>
            <span key={tag.ID}>
              &nbsp;
              <Label bsStyle="info" className={styles.tag}>
                <Glyphicon
                  glyph="remove"
                  className={styles.close}
                  onClick={() => this.props.onDelete(tag.ID)}
                />
                &nbsp;
                <span>{tag.Name}</span>
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
