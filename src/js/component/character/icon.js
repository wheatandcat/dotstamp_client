// @flow
import React from "react"
import { Button, Glyphicon } from "react-bootstrap"
import { CharacterMain } from "../image/"

type Props = {
  fileName: string,
  iconId: number,
  onDelete: Function
}

// TODO: foo bar
export default ({ fileName, iconId, onDelete }: Props) =>
  <CharacterMain fileName={fileName}>
    <div className="center-block">
      <Button bsStyle="danger" onClick={() => onDelete(iconId)}>
        <Glyphicon glyph="trash" />&nbsp;アイコンを削除する
      </Button>
    </div>
  </CharacterMain>
