// @flow
import React from "react"
import Images, {IMAGE_DISPLAY_TYPE_ICON} from "../../utils/image"

const IMAGE_ID_DEFAULT = 0

export type Props = {
  ID: number,
}

function get(ID: number) {
  if (ID == IMAGE_ID_DEFAULT) {
    return (
      <Images fileName="profile/default.png" />
    )
  }

  return (
    <Images fileName={ID + ".jpg"} imageDisplayType={IMAGE_DISPLAY_TYPE_ICON} />
  )
}

export default ({
  ID,
}: Props) => (
  <div>
    {get(ID)}
  </div>
)
