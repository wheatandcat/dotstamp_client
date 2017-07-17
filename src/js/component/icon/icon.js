// @flow
import React from "react"
import { Icon, Default } from "../image/"

const IMAGE_ID_DEFAULT = 0

type Props = {
  id: number
}

function get(id: number) {
  if (id === IMAGE_ID_DEFAULT) {
    return <Default fileName="profile/default.png" />
  }

  return <Icon fileName={`${id}.jpg`} />
}

export default ({ id }: Props) =>
  <div>
    {get(id)}
  </div>
