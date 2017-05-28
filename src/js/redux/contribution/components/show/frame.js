import PropTypes from "prop-types"
import React, { Component } from "react"
import ContributionTalk from "../../containers/talk/main"
export default class Frame extends Component {
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    let body = this.props.body
    if (!Array.isArray(body)) {
      body = []
    }

    return (
      <div>
        <div className="container">
          {body.map(obj => (
            <ContributionTalk key={obj.Priority} talk={obj} editMode={false} />
          ))}
        </div>
      </div>
    )
  }
}

Frame.propTypes = {
  title: PropTypes.string,
  body: PropTypes.array,
  tagList: PropTypes.array,
  user: PropTypes.object,
  updatedAt: PropTypes.string,
  followCount: PropTypes.number
}
