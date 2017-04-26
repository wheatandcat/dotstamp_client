// @flow
import React from "react"
import {Col} from "react-bootstrap"
import {TALK_TYPE_IMAGE} from "../../../redux/contribution/actions/talk"
import {Image, Text} from "./index"

type Props = {
  TalkType: number,
  Body: string,
}

function getBody(TalkType :number, Body :string) {
  if (TalkType == TALK_TYPE_IMAGE) {
    return <Image FileName={Body}/>
  }

  return <Text Label={Body}/>
}

export default ({
  TalkType,
  Body,
}: Props) => (
  <Col sm={20} md={8} style={{top: "15px"}}>
    {getBody(TalkType, Body)}
  </Col>
)
