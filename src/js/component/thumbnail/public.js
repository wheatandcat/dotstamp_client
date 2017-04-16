import PropTypes from "prop-types"
import React, { Component } from "react"
import {Media, Glyphicon} from "react-bootstrap"
import Icon from "../../utils/parts/icon"
import Tag from "../../utils/parts/tag"
import {Link} from "react-router"
import {DateFormat} from "../../utils/common"

import {Strong, LittleStrong, Gap} from "../../../css/common.css"
import {Body, Image, Follow} from "../../../css/contribution.css"

export default class Public extends Component {
  render() {
    return (
      <Media>
        <Media.Left className={Image} align="middle">
          <Icon imageId={this.props.User.ProfileImageID}/>
        </Media.Left>
        <Media.Body className={Body}>
          <p>
            {this.props.User.Name}&nbsp;さんが {DateFormat(this.props.UpdatedAt)}に投稿 {this.props.Sound}
          </p>
          <Media.Heading>
            <Link to={this.props.ShowPath} className={Strong}>
              {this.props.Title}
            </Link>
            <div className={Gap}>
              <Tag list={this.props.Tag} search={this.props.OnSearch}/>
            </div>
          </Media.Heading>
          <div>
            {this.props.SearchMatch}
          </div>
        </Media.Body>
        <Media.Right className={Follow}>
          <Glyphicon glyph="thumbs-up"/>
          <span className={LittleStrong}>&nbsp;{this.props.FollowCount}</span>
        </Media.Right>
      </Media>
    )
  }
}

Public.propTypes = {
  FollowCount: PropTypes.number,
  ID: PropTypes.number,
  OnSearch: PropTypes.func,
  SearchMatch:  PropTypes.element,
  ShowPath: PropTypes.string,
  Sound:  PropTypes.element,
  Tag: PropTypes.array,
  Title: PropTypes.string,
  UpdatedAt: PropTypes.string,
  User: PropTypes.object,
}
