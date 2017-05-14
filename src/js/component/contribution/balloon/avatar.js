// @flow
import React from "react"
import {Col} from "react-bootstrap"
import {Talk} from "../../image/"

type Props = {
  FileName: string,
}

export default ({
  FileName,
}: Props) => (
  <Col sm={2} md={2}>
    <Talk
      fileName={FileName}
    />
  </Col>
)
