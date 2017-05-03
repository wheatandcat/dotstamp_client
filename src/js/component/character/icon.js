// @flow
import React from "react"
import {Button, Glyphicon} from "react-bootstrap"
import Image , {IMAGE_DISPLAY_TYPE_CHARACTER_MAIN} from "../../utils/image"

type Props = {
  fileName: string,
  IconId: number,
  onDelete: Function,
}

export default ({
  fileName,
  IconId,
  onDelete,
}: Props) => (
  <Image fileName={fileName} imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER_MAIN} >
    <div className="center-block">
      <Button
        bsStyle="danger"
        onClick={() => onDelete(IconId)}
      >
        <Glyphicon glyph="trash"/>&nbsp;アイコンを削除する
      </Button>
    </div>
  </Image>
)
