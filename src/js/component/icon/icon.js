// @flow
import React from "react"
import {Icon} from "../image/"

const IMAGE_ID_DEFAULT = 0

export type Props = {
  ID: number,
}

function get(ID: number) {
  if (ID == IMAGE_ID_DEFAULT) {
    return (
      <Icon fileName="profile/default.png" />
    )
  }

  return (
    <Icon fileName={ID + ".jpg"} />
  )
}

export default ({
  ID,
}: Props) => (
  <div>
    {get(ID)}
  </div>
)
