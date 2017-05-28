// @flow
import React from "react"
import { Thumbnail } from "../../../component/thumbnail/"

type Props = {
  List: Array<Object>,
  Content?: boolean,
  onSearch?: Function
}

function getItem(item: Object, Content: ?boolean, onSearch?: Function) {
  if (Content) {
    return (
      <div key={item.Content.ID}>
        <Thumbnail {...item.Content} />
        {item.Bottom}
      </div>
    )
  }

  return (
    <div key={item.ID}>
      <Thumbnail {...item} OnSearch={onSearch} />
      <hr />
    </div>
  )
}

export default ({ List, Content, onSearch }: Props) => (
  <div>
    {List.map(item => getItem(item, Content, onSearch))}
  </div>
)
