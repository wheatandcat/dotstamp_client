// @flow
import React from "react"
import { NewInput, AddForm } from "../../tag"

type Props = {
  add: Function,
  contributionId?: number,
  change: Function,
  remove: Function,
  tags: Array<*>
}

export default ({ add, contributionId, change, remove, tags }: Props) =>
  <div>
    {(() => {
      if (contributionId == null) return <NewInput onTag={change} />
      else return <AddForm tags={tags} onAdd={add} onDelete={remove} />
    })()}
  </div>
