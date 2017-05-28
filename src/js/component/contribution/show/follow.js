// @flow
import React from "react"
import { Button, Glyphicon } from "react-bootstrap"
import styles from "./styles.css"

export type Props = {
  count: ?number,
  actived?: boolean,
  disabled?: boolean,
  onAdd: Function,
  onDelete: Function
}

function getDisabled() {
  return (
    <Button bsStyle="success" bsSize="small" disabled block>
      <Glyphicon glyph="thumbs-up" />&nbsp;フォローする(ゲストユーザーは使用できません)
    </Button>
  )
}

function getActived(onDelete: Function) {
  return (
    <Button bsStyle="success" bsSize="small" block onClick={() => onDelete()}>
      <Glyphicon glyph="thumbs-up" />&nbsp;フォロー済み
    </Button>
  )
}

function get(onAdd: Function) {
  return (
    <Button bsStyle="success" bsSize="small" block onClick={() => onAdd()}>
      <Glyphicon glyph="thumbs-up" />&nbsp;フォローする
    </Button>
  )
}

export default ({ count, actived, disabled, onAdd, onDelete }: Props) => (
  <div>
    <div className={styles.center}>
      <Glyphicon glyph="thumbs-up" />
      <span className={styles.followCount}>&nbsp;{count}</span>
    </div>
    <div>
      {(() => {
        if (disabled) {
          return getDisabled()
        } else if (actived) {
          return getActived(onDelete)
        } else {
          return get(onAdd)
        }
      })()}
    </div>
  </div>
)
