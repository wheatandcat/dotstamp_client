// @flow
import React from "react"
import {Thumbnail} from "../../../component/thumbnail/"

type Props = {
  List: Array<Object>,
  Content?: boolean,
}


function getItem(item: Object, Content:? boolean) {
  if (Content) {
    return (
      <div key={item.Content.ID}>
        <Thumbnail {...item.Content}/>
        {item.Bottom}
      </div>
    )
  }

  return (
    <div key={item.ID}>
      <Thumbnail {...item}/>
      <hr />
    </div>
  )
}

export default ({
  List,
  Content,
}: Props) => (
  <div>
    {List.map((item) => {
      return getItem(item, Content)
    })}
  </div>
)
