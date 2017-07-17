// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Label } from "react-bootstrap"
import { VIEW_STATUS_PUBLIC } from "../../constants/contribution"
import styles from "./styles.css"
import { Public, Private } from "./index"

export default class Thumbnail extends Component {
  /**
   * 詳細画面リンクを取得する
   *
   * @param  {number} id 投稿ID
   * @return {string} 詳細画面リンク
   */
  getShowPath(id: number) {
    return `/contribution/show/${id}`
  }
  /**
   * 検索一致を取得する
   */
  getSearchMatch() {
    const { search, searchMatch } = this.props

    if (search == "") {
      return <span />
    }

    const index = search.indexOf(searchMatch)
    const len = search.length

    const start = index < 11 ? 0 : index - 10
    const end = len < index + 60 ? len : index + 60

    return (
      <div className={styles.Thin}>
        {this.replaceMatchText(
          `${search.substring(start, end)}...`,
          searchMatch
        )}
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
    const regex = new RegExp(`${search}(.*?)`, "g")

    return text.split(regex).map((line, i) => {
      if (line == "" && i > 0) {
        return (
          <span key={i} className={styles.Dark}>
            {search}
          </span>
        )
      }
      return line
    })
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    const {
      viewStatus,
      title,
      user,
      updatedAt,
      onSearch,
      movie,
      followCount,
      id,
      tags
    } = this.props
    console.log(this.props)

    if (viewStatus != VIEW_STATUS_PUBLIC) {
      return <Private title={title} user={user} updatedAt={updatedAt} />
    }

    let sound = <span />
    if (movie.movie_id != "") {
      sound = (
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;<Label bsStyle="warning">読み上げ公開</Label>
        </span>
      )
    }

    return (
      <Public
        followCount={followCount}
        id={id}
        onSearch={onSearch}
        searchMatch={this.getSearchMatch()}
        showPath={this.getShowPath(id)}
        sound={sound}
        tags={tags}
        title={title}
        updatedAt={updatedAt}
        user={user}
      />
    )
  }
}

Thumbnail.propTypes = {
  followCount: PropTypes.number,
  id: PropTypes.number,
  movie: PropTypes.object,
  onSearch: PropTypes.func,
  search: PropTypes.string,
  searchMatch: PropTypes.string,
  soundStatus: PropTypes.number,
  tags: PropTypes.array,
  title: PropTypes.string,
  user: PropTypes.object,
  updatedAt: PropTypes.string,
  viewStatus: PropTypes.number
}
