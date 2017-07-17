// @flow
import React from "react"
import { List as TmpList, Open, Close } from "./"

type Props = {
  list: Array<Object>,
  openID: number,
  show: React$Element<*>,
  onAdd: Function,
  onDelete: Function
}

function getList(
  list: Array<Object>,
  openID: number,
  show: React$Element<*>,
  onAdd: Function,
  onDelete: Function
) {
  const val = []

  list.forEach(item => {
    let bottom

    if (item.id == openID) {
      bottom = (
        <Open id={item.id} onDelete={onDelete}>
          {show}
        </Open>
      )
    } else {
      bottom = <Close id={item.id} onAdd={onAdd} />
    }

    val.push({
      Content: item,
      bottom
    })
  })

  return val
}

export default ({ list, openID, show, onAdd, onDelete }: Props) =>
  <TmpList list={getList(list, openID, show, onAdd, onDelete)} content />
