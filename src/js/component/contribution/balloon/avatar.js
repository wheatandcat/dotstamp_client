// @flow
import React from "react"
import { Col } from "react-bootstrap"
import { Character } from "../../image/"

type Props = {
  fileName: string
}

export default ({ fileName }: Props) =>
  <Col sm={2} md={2}>
    <Character fileName={fileName} />
  </Col>
