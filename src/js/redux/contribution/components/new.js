// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import FormHeader from "../containers/form/header"

export default class New extends Component {
  componentWillMount() {
    const hash = location.pathname

    this.props.init(hash.indexOf("contribution/experience") > -1)

    if (hash.indexOf("contribution/experience") == -1) {
      this.getList()
    } else {
      this.props.setDefaultList()
    }
  }
  /**
   * リストを取得する
   */
  getList() {
    this.props.setCharacterImageList()
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    return (
      <FormHeader
        title=""
        contributionId={null}
        contributionTalk={this.props.contributionTalk}
      />
    )
  }
}

New.propTypes = {
  init: PropTypes.func,
  contributionTalk: PropTypes.array,
  setCharacterImageList: PropTypes.func,
  changeCharacter: PropTypes.func,
  setDefaultList: PropTypes.func
}
