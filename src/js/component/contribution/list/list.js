// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import {Thumbnail} from "../../../component/thumbnail/"

export default class List extends Component {
  render() {
    return (
      <div>
        {this.props.List.map((item) => {
          return (
            <div key={item.Content.ID}>
              <Thumbnail {...item.Content}/>
              {item.Bottom}
            </div>
          )
        })}
      </div>
    )
  }
}

List.propTypes = {
  List: PropTypes.array,
}
