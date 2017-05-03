// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import {Label} from "react-bootstrap"
import {VIEW_STATUS_PUBLIC} from "../../constants/contribution"
import styles from "./styles.css"
import {Public, Private} from "./index"

export default class Thumbnail extends Component {
  /**
   * 詳細画面リンクを取得する
   *
   * @param  {number} id 投稿ID
   * @return {string} 詳細画面リンク
   */
  getShowPath(id: number) {
    return "/contribution/show/" + id
  }
  /**
   * 検索一致を取得する
   */
  getSearchMatch() {
    let search = this.props.Search

    if (search == "") {
      return (<span />)
    }

    let index = search.indexOf(this.props.SearchMatch)
    let len = search.length

    let start = (index < 11)
      ? 0
      : index - 10
    let end = (len < index + 60)
      ? len
      : index + 60

    return (
      <div className={styles.Thin}>
        {this.replaceMatchText(search.substring(start, end) + "...", this.props.SearchMatch)}
      </div>
    )
  }
  /**
   * 改行を変換する
   *
   * @param  {string} text テキスト
   * @return {string} 改行変換後テキスト
   */
  replaceMatchText(text: string, search: string) {
    let regex = new RegExp(search + "(.*?)", "g")

    return text.split(regex).map(function(line, i) {
      if (line == "" && i > 0) {
        return (
          <span key={i} className={styles.Dark}>
            {search}
          </span>
        )
      } else {
        return line
      }
    })
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    if (this.props.ViewStatus != VIEW_STATUS_PUBLIC) {
      return (
        <Private
          Title={this.props.Title}
          User={this.props.User}
          UpdatedAt={this.props.UpdatedAt}
        />
      )
    }

    let OnSearch = this.props.OnSearch

    let sound = (<span />)
    if (this.props.Movie.movie_id != "") {
      sound = (
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;<Label bsStyle="warning">読み上げ公開</Label>
        </span>
      )
    }

    return (
      <Public
        FollowCount={this.props.FollowCount}
        ID={this.props.ID}
        OnSearch={OnSearch}
        SearchMatch={this.getSearchMatch()}
        ShowPath={this.getShowPath(this.props.ID)}
        Sound={sound}
        Tag={this.props.Tag}
        Title={this.props.Title}
        UpdatedAt={this.props.UpdatedAt}
        User={this.props.User}
      />
    )
  }
}

Thumbnail.propTypes = {
  FollowCount: PropTypes.number,
  ID: PropTypes.number,
  Movie: PropTypes.object,
  OnSearch: PropTypes.func,
  Search: PropTypes.string,
  SearchMatch: PropTypes.string,
  SoundStatus: PropTypes.number,
  Tag: PropTypes.array,
  Title: PropTypes.string,
  User: PropTypes.object,
  UpdatedAt: PropTypes.string,
  ViewStatus: PropTypes.number,
}
