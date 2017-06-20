// @flow
import React from "react"
import { Icon, Default } from "../image/"

const IMAGE_ID_DEFAULT = 0

type Props = {
  ID: number
}

function get(ID: number) {
  if (ID === IMAGE_ID_DEFAULT) {
    return <Default fileName="profile/default.png" />
  }

  return <Icon fileName={`${ID}.jpg`} />
}

export default ({ ID }: Props) =>
  <div>
    {get(ID)}
  </div>
