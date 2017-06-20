// @flow
import React from "react"
import { Slick, List } from "./"

const DISPLAY_ICON_NUM_MIN = 1

type Props = {
  list: Array<Object>,
  defaultValue?: number,
  balloon?: boolean,
  balloonImage?: Object,
  onClick: Function
}

export default ({
  list,
  defaultValue,
  balloon,
  balloonImage,
  onClick
}: Props) =>
  <div>
    {(() => {
      if (list.length <= DISPLAY_ICON_NUM_MIN) {
        return <List list={list} />
      }
      return (
        <Slick
          list={list}
          defaultValue={defaultValue}
          balloon={balloon}
          balloonImage={balloonImage}
          onClick={onClick}
        />
      )
    })()}
  </div>
