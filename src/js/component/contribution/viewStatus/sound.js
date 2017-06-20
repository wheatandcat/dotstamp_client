// @flow
import React from "react"
import { Button, Glyphicon, Tooltip } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./styles.css"

type Props = {
  contributionId?: number,
  created: boolean,
  addSound: Function,
  experience: boolean
}

const sound = (
  contributionId?: number,
  created: boolean,
  addSound: Function
) => {
  if (!created) {
    return (
      <Button bsStyle="link" onClick={() => addSound()}>
        <Glyphicon glyph="bullhorn" />&nbsp;読み上げを作成する（β版）
      </Button>
    )
  }

  return (
    <Link to={`/sound/show/${String(contributionId)}`}>
      <Button bsStyle="link">
        <Glyphicon glyph="bullhorn" />&nbsp;読み上げを編集する（β版）
      </Button>
    </Link>
  )
}

export default ({ contributionId, created, addSound, experience }: Props) =>
  <span>
    {(() => {
      if (experience)
        return (
          <Tooltip
            id="tooltip-right"
            placement="right"
            className={"in " + styles.experience}
          >
            「お試し」投稿のデータは保存<br />できません。
          </Tooltip>
        )
    })()}
    {sound(contributionId, created, addSound)}
  </span>
