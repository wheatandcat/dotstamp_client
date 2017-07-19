// @flow
import React, { Component } from "react"
import { PageHeader, Glyphicon } from "react-bootstrap"
import { List } from "../../../component/contribution/list"
import { Center } from "./../../../../css/common.css"
import Pagination from "../../../utils/parts/pagination"
import { Link as Footer } from "../../../component/footer/"
import type { State as UserFollowList } from "../reducers/followList"

type Props = {
  match: {
    params: {
      page: number,
      order: number
    }
  },
  history: Object,
  getList: Function,
  paging: Function,
  userFollowList: UserFollowList
}

export default class FollowList extends Component {
  componentWillMount() {
    this.getList(this.props.match.params.page, this.props.match.params.order)
  }
  props: Props
  /**
   * リストを取得する
   *
   * @param {number} page ページ
   * @param {number} order 順番
   */
  getList(page: number, order: number) {
    const { limit } = this.props.userFollowList
    this.props.getList({
      order,
      page,
      limit
    })
  }
  /**
   * ページングする
   *
   * @param {number} page ページ
   * @param {number} order 順番
   */
  paging(page: number, order: number) {
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
    const { count, limit, order } = this.props.userFollowList
    let list = this.props.userFollowList.list
    if (!Array.isArray(list)) {
      list = []
    }

    let page = ""
    if (list.length == 0) {
      page = <div className={Center}>フォロー済み投稿の登録はありません。</div>
    } else {
      page = (
        <Pagination
          count={count}
          limit={limit}
          link="user/followList"
          order={parseInt(order)}
          activePage={parseInt(this.props.userFollowList.page)}
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
          <List list={list} />
        </div>
        {page}
        <Footer />
      </div>
    )
  }
}
