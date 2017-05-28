import PropTypes from "prop-types"
import React, { Component } from "react"
import ErrorShow from "./redux/error/containers/show"
import Header from "./utils/parts/header"

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <ErrorShow />
      </div>
    )
  }
}

Menu.propTypes = {
  children: PropTypes.object
}
