// @flow
import React from "react"
import { Thumbnail } from "../../thumbnail/"

type Props = {
  list: Array<Object>,
  content?: boolean,
  onSearch?: Function
}

function getItem(item: Object, content: ?boolean, onSearch?: Function) {
  if (content) {
    return (
      <div key={item.Content.id}>
        <Thumbnail {...item.Content} />
        {item.bottom}
      </div>
    )
  }

  return (
    <div key={item.id}>
      <Thumbnail {...item} onSearch={onSearch} />
      <hr />
    </div>
  )
}

export default ({ list, content, onSearch }: Props) =>
  <div>
    {list.map(item => getItem(item, content, onSearch))}
  </div>
