// @flow
import React from "react"
import { Dropdown, Button, Glyphicon, MenuItem } from "react-bootstrap"
import {
  VIEW_STATUS_PUBLIC,
  VIEW_STATUS_PRIVATE
} from "../../../constants/contribution"

type Props = {
  disabled: boolean,
  onSave: Function,
  onChageStatus: Function
}

export default ({ disabled, onSave, onChageStatus }: Props) => (
  <Dropdown id="viweStatus" disabled={disabled}>
    <Button onClick={() => onSave()} bsStyle="success" disabled={disabled}>
      <Glyphicon glyph="edit" />&nbsp;投稿する
    </Button>
    <Dropdown.Toggle bsStyle="success" />
    <Dropdown.Menu className="super-colors">
      <MenuItem eventKey={VIEW_STATUS_PUBLIC} key={VIEW_STATUS_PUBLIC} active>
        <Glyphicon glyph="edit" />&nbsp;投稿する
      </MenuItem>
      <MenuItem
        eventKey={VIEW_STATUS_PRIVATE}
        key={VIEW_STATUS_PRIVATE}
        onClick={() => onChageStatus(VIEW_STATUS_PRIVATE)}
      >
        <Glyphicon glyph="floppy-disk" />&nbsp;下書き保存
      </MenuItem>
    </Dropdown.Menu>
  </Dropdown>
)
