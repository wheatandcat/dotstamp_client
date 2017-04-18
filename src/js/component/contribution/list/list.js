// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import {Thumbnail} from "../../../component/thumbnail/"

export default class List extends Component {
  render() {
    if (!this.props.Show) {
      return (<div />)
    }

    return (
      <div>
        {this.props.List.map((item) => {
          return (
            <div key={item.ID}>
              <Thumbnail {...item}/>
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
  Show: PropTypes.bool,
}
