// @flow
import React from "react"
import {Thumbnail} from "../../../component/thumbnail/"

type Props = {
  List: Array<Object>,
}

export default ({
  List,
}: Props) => (
  <div>
    {List.map((item) => {
      return (
        <div key={item.Content.ID}>
          <Thumbnail {...item.Content}/>
          {item.Bottom}
        </div>
      )
    })}
  </div>
)
