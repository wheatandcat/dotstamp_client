// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { List, Open, Close } from "./"

export default class Combination extends Component {
  render() {
    const list = []

    this.props.List.forEach(item => {
      let Bottom

      if (item.ID == this.props.OpenID) {
        Bottom = (
          <Open ID={item.ID} Title={item.title} onDelete={this.props.onDelete}>
            {this.props.Show}
          </Open>
        )
      } else {
        Bottom = <Close ID={item.ID} onAdd={this.props.onAdd} />
      }

      list.push({
        Content: item,
        Bottom
      })
    })

    return <List List={list} Content />
  }
}

Combination.propTypes = {
  List: PropTypes.array,
  OpenID: PropTypes.number,
  Show: PropTypes.element,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func
}
