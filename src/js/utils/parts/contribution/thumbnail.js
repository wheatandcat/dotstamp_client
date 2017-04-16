import PropTypes from "prop-types"
import React, { Component } from "react"
import {Label, Media, Glyphicon} from "react-bootstrap"
import Icon from "../../parts/icon"
import Tag from "../../parts/tag"
import {Link} from "react-router"
import {DateFormat} from "../../common"
import {VIEW_STATUS_PUBLIC} from "../../../constants/contribution"


import {Disable, Alert, Strong, LittleStrong, Gap, Dark, Thin} from "../../../../css/common.css"
import {Body, Image, Follow} from "../../../../css/contribution.css"

export default class Thumbnail extends Component {
  /**
     * 詳細画面リンクを取得する
     *
     * @param  {number} id 投稿ID
     * @return {string} 詳細画面リンク
     */
  getShowPath(id) {
    return "/contribution/show/" + id
  }
  /**
     * 検索一致を取得する
     */
  getSearchMatch() {
    let search = this.props.Search

    if (search == "") {
      return ""
    }

    let index = search.indexOf(this.props.searchMatch)
    let len = search.length

    let start = (index < 11)
      ? 0
      : index - 10
    let end = (len < index + 60)
      ? len
      : index + 60

    return (
      <div className={Thin}>
        {this.replaceMatchText(search.substring(start, end) + "...", this.props.searchMatch)}
      </div>
    )
  }
  /**
     * 改行を変換する
     *
     * @param  {string} text テキスト
     * @return {string} 改行変換後テキスト
     */
  replaceMatchText(text, search) {
    let regex = new RegExp(search + "(.*?)", "g")

    return text.split(regex).map(function(line, i) {
      if (line == "" && i > 0) {
        return (
          <span key={i} className={Dark}>
            {search}
          </span>
        )
      } else {
        return line
      }
    })
  }
  /**
     * 非公開を取得する
     */
  getPrivate() {
    return (
      <Media className={Disable}>
        <Media.Left className={Image}>
          <Icon imageId={this.props.User.ProfileImageID}/>
        </Media.Left>
        <Media.Body className={Body}>
          <p>
            {this.props.User.Name}&nbsp;さんが {DateFormat(this.props.UpdatedAt)}に投稿
          </p>
          <Media.Heading>
            <br/>
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
  /**
     * 描画する
     *
     * @return {object} html
     */
  render() {
    if (this.props.ViewStatus != VIEW_STATUS_PUBLIC) {
      return this.getPrivate()
    }

    let search = function() {}
    if (this.props.search != undefined) {
      search = this.props.search
    }

    let sound = ""
    if (this.props.Movie.movie_id != "") {
      sound = (
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;<Label bsStyle="warning">読み上げ公開</Label>
        </span>
      )
    }

    console.log (this.props)
    console.log ("------------")

    return (
      <Media>
        <Media.Left className={Image} align="middle">
          <Icon imageId={this.props.User.ProfileImageID}/>
        </Media.Left>
        <Media.Body className={Body}>
          <p>
            {this.props.User.Name}&nbsp;さんが {DateFormat(this.props.UpdatedAt)}に投稿 {sound}
          </p>
          <Media.Heading>
            <Link to={this.getShowPath(this.props.ID)} className={Strong}>
              {this.props.Title}
            </Link>
            <div className={Gap}>
              <Tag list={this.props.Tag} search={search}/>
            </div>
          </Media.Heading>
          <div>
            {this.getSearchMatch()}
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

Thumbnail.propTypes = {
  Title: PropTypes.string,
  ID: PropTypes.number,
  User: PropTypes.object,
  UpdatedAt: PropTypes.string,
  Tag: PropTypes.array,
  Search: PropTypes.string,
  searchMatch: PropTypes.string,
  FollowCount: PropTypes.number,
  ViewStatus: PropTypes.number,
  search: PropTypes.func,
  SoundStatus: PropTypes.number,
  Movie: PropTypes.object
}
