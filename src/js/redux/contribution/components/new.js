// @flow
import React, { Component } from "react"
import FormHeader from "../containers/form/header"
import type { State as ContributionTalk } from "../reducers/talk"

type Props = {
  init: Function,
  contributionTalk: ContributionTalk,
  setCharacterImageList: Function,
  changeCharacter: Function,
  setDefaultList: Function
}

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
  props: Props
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
