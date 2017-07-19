// @flow
import React, { Component } from "react"
import {
  FormGroup,
  Form,
  FormControl,
  Glyphicon,
  Button,
  Col,
  DropdownButton,
  MenuItem
} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Pagination from "../../../utils/parts/pagination"
import {
  ORDER_TYPE_NEW,
  ORDER_TYPE_FOLLOW_COUNT
} from "../../../constants/contribution"
import { Center } from "./../../../../css/common.css"
import { Link as Footer } from "../../../component/footer/"
import { List } from "../../../component/contribution/list"
import type { State as ContributionSearch } from "../reducers/search"

type Props = {
  match: Object,
  contributionSearch: ContributionSearch,
  search: Function,
  paging: Function,
  setOrder: Function
}

let tmpSearch = ""

export default class Search extends Component {
  input: {
    value: ""
  }
  componentWillMount() {
    const { search, order, page } = this.props.match.params

    this.search(search, order, page)
    this.props.paging(search, order, page)
  }
  props: Props
  /**
   * コマンドを送信する
   *
   * @param  {object} e エレメント
   */
  sendCommand(e: Object) {
    const ENTER = 13
    if (e.keyCode == ENTER) {
      this.setSearch()
    }
  }
  /**
   * 検索する
   *
   * @param {string} search 検索
   * @param {number} order 順番
   * @param {number} page ページ
   */
  search(search: string, order: number, page: number) {
    const { limit } = this.props.contributionSearch

    this.props.search({
      search,
      order,
      page,
      limit
    })
  }
  /**
   * 検索を設定する
   */
  setSearch() {
    const { order } = this.props.contributionSearch
    const val = this.input.value.trim()
    if (val == "") {
      return
    }
    if (val == tmpSearch) {
      return
    }

    this.search(val, order, 1)

    tmpSearch = val
  }
  /**
   * ページングする
   *
   * @param {number} page ページ
   * @param {number} order 順番
   */
  paging(page: number, order: number) {
    const { search } = this.props.contributionSearch
    this.search(search, order, page)
    this.props.paging(search, order, page)
  }
  /**
   * 順番を設定する
   *
   * @param {number} order 順番
   */
  setOrder(order: number) {
    const { search, page } = this.props.contributionSearch
    this.search(search, order, page)
  }
  /**
   * リストを取得する
   */
  getList() {
    const { search } = this.props.contributionSearch

    let list = this.props.contributionSearch.list
    if (!Array.isArray(list)) {
      list = []
    }

    if (list.length == 0) {
      return (
        <div className={Center}>
          「{search}」に一致する記事は見つかりませんでした。
        </div>
      )
    }

    return <List list={list} onSearch={this.search} />
  }
  /**
   * 描画する
   */
  render() {
    let list = this.props.contributionSearch.list
    const { count, limit, order, page, search } = this.props.contributionSearch

    if (!Array.isArray(list)) {
      list = []
    }

    let pagination = ""
    if (list.length > 0) {
      pagination = (
        <Pagination
          count={count}
          limit={limit}
          link="user/followList"
          order={parseInt(order)}
          activePage={parseInt(page)}
          paging={this.paging.bind(this)}
        />
      )
    }

    return (
      <div>
        <div className="container">
          <div>
            <br />
            <Form horizontal componentClass="div">
              <FormGroup>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="検索ワード"
                    defaultValue={this.props.match.params.search}
                    inputRef={ref => {
                      this.input = ref
                    }}
                    onKeyDown={this.sendCommand.bind(this)}
                  />
                </Col>
                <Col sm={2}>
                  <Button onClick={() => this.setSearch()}>
                    <Glyphicon glyph="search" />&nbsp;検索&nbsp;
                  </Button>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={10} />
                <Col sm={2}>
                  <DropdownButton
                    title={
                      order === ORDER_TYPE_FOLLOW_COUNT ? "フォロー順" : "　新着順　"
                    }
                    id="search-order-dropdown"
                    pullRight
                    onSelect={this.setOrder.bind(this)}
                  >
                    <LinkContainer
                      to={`/contribution/search/${search}/${ORDER_TYPE_NEW}/${page}`}
                    >
                      <MenuItem eventKey={ORDER_TYPE_NEW}>新規順</MenuItem>
                    </LinkContainer>
                    <LinkContainer
                      to={`/contribution/search/${search}/${ORDER_TYPE_FOLLOW_COUNT}/${page}`}
                    >
                      <MenuItem eventKey={ORDER_TYPE_FOLLOW_COUNT}>
                        フォロー順
                      </MenuItem>
                    </LinkContainer>
                  </DropdownButton>
                </Col>
              </FormGroup>
            </Form>
          </div>
          <hr /> {this.getList()}
          {pagination}
        </div>
        <Footer />
      </div>
    )
  }
}
