// @flow
import React, {Component} from "react"
import {Col, Button, ControlLabel, Glyphicon} from "react-bootstrap"
import {Group, Talk} from "./styles.css"
import {Balloon} from "./"

type Props = {
  UserFileName?: string,
  TalkType?: number,
  Body?: string,
  Priority: number,
}

export default class Edit extends Component {
  props: Props
  image() {
    return (
      <Button>
        <ControlLabel htmlFor={"image-file-edit-" + this.props.Priority} bsClass={Group}>
          <Glyphicon glyph="picture"/>
        </ControlLabel>
        <input
          type="file"
          id={"image-file-edit-" + this.props.Priority}
          name="image-file-edit" className="hidden"
          accept="image/jpeg,image/png,image/jpg"
        />
      </Button>
    )
  }

  render() {
    return (
      <div>
        <Col sm={22} md={10}>
          <Balloon
            UserFileName={this.props.UserFileName}
            TalkType={this.props.TalkType}
            Body={this.props.Body}
          />
        </Col>
        <Col sm={2} md={2} className={Talk}>

        </Col>
      </div>
    )
  }
}
