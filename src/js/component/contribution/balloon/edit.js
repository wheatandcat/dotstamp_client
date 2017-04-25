// @flow
import React from "react"
import {Col, Button, ButtonToolbar, ControlLabel, Glyphicon, Well} from "react-bootstrap"
import {TALK_TYPE_IMAGE} from "../../../redux/contribution/actions/talk"
import {Group, Talk} from "./styles.css"
import {Balloon} from "./"


type Props = {
  UserFileName: string,
  TalkType: number,
  Body: string,
  Item: Object,
  Priority: number,
  onChangeImage: Function,
  onChangeText: Function,
  onDelete: Function,
}

function image(Priority :number, onChangeImage: Function) {
  return (
    <Button>
      <ControlLabel htmlFor={"image-file-edit-" + Priority} bsClass={Group}>
        <Glyphicon glyph="picture"/>
      </ControlLabel>
      <input
        type="file"
        id={"image-file-edit-" + Priority}
        name="image-file-edit" className="hidden"
        accept="image/jpeg,image/png,image/jpg"
        onChange={onChangeImage}
      />
    </Button>
  )
}

function text(Item: Object, Priority :number, onChangeText: Function) {
  return (
    <Button onClick={() => onChangeText(Item, Priority)}>
      <Glyphicon glyph="edit"/>
    </Button>
  )
}

function getBody(TalkType :number, Item :Object, Priority :number, onChangeText: Function, onChangeImage: Function) {
  if (TalkType == TALK_TYPE_IMAGE) {
    return image(Priority, onChangeImage)
  }

  return text(Item, Priority, onChangeText)
}

export default ({
  UserFileName,
  TalkType,
  Body,
  Priority,
  Item,
  onChangeText,
  onChangeImage,
  onDelete,
}: Props) => (
  <div>
    <Col sm={22} md={10}>
      <Balloon
        UserFileName={UserFileName}
        TalkType={TalkType}
        Body={Body}
      />
    </Col>
    <Col sm={2} md={2} className={Talk}>
      <Well>
        <ButtonToolbar>
          {getBody(TalkType, Item, Priority, onChangeText, onChangeImage)}
          <Button onClick={() => onDelete(Priority)}>
            <Glyphicon glyph="trash"/>
          </Button>
        </ButtonToolbar>
      </Well>
    </Col>
  </div>
)
