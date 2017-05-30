// @flow
import React from "react"
import ContributionTalk from "../talk/main"

type Props = {
  list: Array<Object>
}

export default ({ list }: Props) => (
  <div>
    <div className="container">
      {list.map(item => (
        <ContributionTalk key={item.Priority} talk={item} editMode={false} />
      ))}
    </div>
  </div>
)
