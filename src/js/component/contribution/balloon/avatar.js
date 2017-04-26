// @flow
import React from "react"
import {Col} from "react-bootstrap"
import ImageBallon, {IMAGE_DISPLAY_TYPE_CHARACTER_TALK} from "../../../utils/image"

type Props = {
  FileName?: string,
}

export default ({
  FileName,
}: Props) => (
  <Col sm={2} md={2}>
    <ImageBallon
      fileName={FileName}
      imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER_TALK}
    />
  </Col>
)
