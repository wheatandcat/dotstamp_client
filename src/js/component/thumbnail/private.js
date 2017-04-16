import PropTypes from "prop-types"
import React, { Component } from "react"
import {Media} from "react-bootstrap"
import Icon from "../../utils/parts/icon"
import {DateFormat} from "../../utils/common"
import {Disable, Alert} from "../../../css/common.css"
import {Body, Image, Follow} from "../../../css/contribution.css"

export default class Private extends Component {
  render() {
    return (
      <Media className={Disable}>
        <Media.Left className={Image} align="middle">
          <Icon imageId={this.props.User.ProfileImageID}/>
        </Media.Left>
        <Media.Body className={Body}>
          <p>
            {this.props.User.Name}&nbsp;さんが {DateFormat(this.props.UpdatedAt)}に投稿
          </p>
          <Media.Heading>
            <div>
              {this.props.Title}<small>
                <span className={Alert}>（※現在非公開の投稿です）</span>
              </small>
            </div>
          </Media.Heading>
        </Media.Body>
        <Media.Right className={Follow}></Media.Right>
      </Media>
    )
  }
}

Private.propTypes = {
  Title: PropTypes.string,
  User: PropTypes.object,
  UpdatedAt: PropTypes.string,
}
