// @flow
import React from "react"
import { Tag } from "./"

type Props = {
  list: Array<Object>,
  onSearch?: Function
}

export default ({ list, onSearch }: Props) =>
  <div>
    {list.map(item =>
      <span key={item.id}>
        <Tag label={item.name} onSearch={onSearch} />
      </span>
    )}
  </div>
