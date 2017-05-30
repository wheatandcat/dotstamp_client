import PropTypes from "prop-types"
import React, { Component } from "react"
import { PageHeader, Glyphicon } from "react-bootstrap"
import { List } from "../../../component/contribution/list"
import { Center } from "./../../../../css/common.css"
import Pagination from "../../../utils/parts/pagination"
import { Link as Footer } from "../../../component/footer/"

export default class FollowList extends Component {
  componentWillMount() {
    this.getList(this.props.match.params.page, this.props.match.params.order)
  }
  /**
   * リストを取得する
   *
   * @param {number} page ページ
   * @param {number} order 順番
   */
  getList(page, order) {
    this.props.getList({
      order,
      page,
      limit: this.props.userFollowList.Limit
    })
  }
  /**
   * ページングする
   *
   * @param {number} page ページ
   * @param {number} order 順番
   */
  paging(page, order) {
    this.getList(page, order)
    this.props.paging(page, order)
    this.props.history.push(`/user/followList/${order}/${page}`)
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    let list = this.props.userFollowList.List
    if (!Array.isArray(list)) {
      list = []
    }

    let page = ""
    if (list.length == 0) {
      page = (
        <div className={Center}>
          フォロー済み投稿の登録はありません。
        </div>
      )
    } else {
      page = (
        <Pagination
          count={this.props.userFollowList.Count}
          limit={this.props.userFollowList.Limit}
          link="user/followList"
          order={parseInt(this.props.userFollowList.Order)}
          activePage={parseInt(this.props.userFollowList.Page)}
          paging={this.paging.bind(this)}
        />
      )
    }

    return (
      <div>
        <div className="container">
          <PageHeader>
            &nbsp;&nbsp;<Glyphicon glyph="thumbs-up" />&nbsp;フォロー済み投稿
          </PageHeader>
        </div>
        <div className="container">
          <List List={list} />
        </div>
        {page}
        <Footer />
      </div>
    )
  }
}

FollowList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  getList: PropTypes.func,
  paging: PropTypes.func,
  userFollowList: PropTypes.object
}
