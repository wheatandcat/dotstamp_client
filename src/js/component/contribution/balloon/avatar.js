// @flow
import React from "react"
import {Col} from "react-bootstrap"
import {Character} from "../../image/"

type Props = {
  FileName: string,
}

export default ({
  FileName,
}: Props) => (
  <Col sm={2} md={2}>
    <Character
      fileName={FileName}
    />
  </Col>
)
