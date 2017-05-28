// @flow
import React from "react"
import { Button, Glyphicon } from "react-bootstrap"
import { CharacterMain } from "../image/"

type Props = {
  fileName: string,
  IconId: number,
  onDelete: Function
}

export default ({ fileName, IconId, onDelete }: Props) => (
  <CharacterMain fileName={fileName}>
    <div className="center-block">
      <Button bsStyle="danger" onClick={() => onDelete(IconId)}>
        <Glyphicon glyph="trash" />&nbsp;アイコンを削除する
      </Button>
    </div>
  </CharacterMain>
)
