// @flow
import React from "react"
import ContributionTalk from "../../containers/talk/main"

type Props = {
  list: Array<Object>
}

export default ({ list }: Props) =>
  <div>
    <div className="container">
      {list.map(item =>
        <ContributionTalk key={item.priority} talk={item} editMode={false} />
      )}
    </div>
  </div>
