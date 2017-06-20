// @flow
import React from "react"
import { List as TmpList, Open, Close } from "./"

type Props = {
  List: Array<Object>,
  OpenID: number,
  Show: React$Element<*>,
  onAdd: Function,
  onDelete: Function
}

function getList(
  list: Array<Object>,
  OpenID: number,
  show: React$Element<*>,
  onAdd: Function,
  onDelete: Function
) {
  const val = []

  list.forEach(item => {
    let Bottom

    if (item.ID == OpenID) {
      Bottom = (
        <Open ID={item.ID} Title={item.title} onDelete={onDelete}>
          {show}
        </Open>
      )
    } else {
      Bottom = <Close ID={item.ID} onAdd={onAdd} />
    }

    val.push({
      Content: item,
      Bottom
    })
  })

  return val
}

export default ({ List, OpenID, Show, onAdd, onDelete }: Props) =>
  <TmpList List={getList(List, OpenID, Show, onAdd, onDelete)} Content />
