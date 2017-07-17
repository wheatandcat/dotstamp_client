// @flow
import React from "react"
import { Col } from "react-bootstrap"
import { TALK_TYPE_IMAGE } from "../../../redux/contribution/actions/talk"
import { Image, Text } from "./index"

type Props = {
  talkType: number,
  body: string
}

function getBody(talkType: number, body: string) {
  if (talkType == TALK_TYPE_IMAGE) {
    return <Image fileName={body} />
  }

  return <Text label={body} />
}

export default ({ talkType, body }: Props) =>
  <Col sm={20} md={8} style={{ top: "15px" }}>
    {getBody(talkType, body)}
  </Col>
