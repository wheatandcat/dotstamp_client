// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import FormHeader from "../containers/form/header"

export default class Edit extends Component {
  componentWillMount() {
    this.edit(this.props.match.params.id)
  }
  /**
   * 編集する
   *
   * @param  {number} id 投稿ID
   */
  edit(id: number) {
    this.props.getDetail(id)
    this.props.setCharacterImageList()
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    const { title, viewStatus, id, sound } = this.props.contributionEdit

    return (
      <FormHeader
        title={title}
        viewStatus={viewStatus}
        contributionId={id}
        contributionTalk={this.props.contributionTalk}
        sound={sound}
      />
    )
  }
}

Edit.propTypes = {
  match: PropTypes.object,
  contributionEdit: PropTypes.object,
  contributionTalk: PropTypes.array,
  getDetail: PropTypes.func,
  setCharacterImageList: PropTypes.func,
  changeCharacter: PropTypes.func
}
