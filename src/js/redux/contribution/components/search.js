import PropTypes from "prop-types"
import React, { Component } from "react"
import {FormGroup, Form, FormControl, Glyphicon, Button, Col, DropdownButton, MenuItem} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import Pagination from "../../../utils/parts/pagination"
import {ORDER_TYPE_NEW, ORDER_TYPE_FOLLOW_COUNT} from "../../../constants/contribution"
import {Center} from "./../../../../css/common.css"
import Footer from "../../../utils/parts/footer"
import {List} from "../../../component/contribution/list"

var tmpSearch = ""

export default class Search extends Component {
  componentWillMount() {
    this.search(
      this.props.match.params.search,
      this.props.match.params.order,
      this.props.match.params.page
    )

    this.props.paging(
      this.props.match.params.search,
      this.props.match.params.order,
      this.props.match.params.page
    )
  }
  /**
   * コマンドを送信する
   *
   * @param  {object} e エレメント
   */
  sendCommand(e) {
    let ENTER = 13
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
  search(search, order, page) {
    this.props.search({search: search, order: order, page: page, limit: this.props.contributionSearch.Limit})
  }
  /**
   * 検索を設定する
   */
  setSearch() {
    let val = this.input.value.trim()
    if (val == "") {
      return
    }
    if (val == tmpSearch) {
      return
    }

    this.search(val, this.props.contributionSearch.Order, 1)

    tmpSearch = val
  }
  /**
   * ページングする
   *
   * @param {number} page ページ
   * @param {number} order 順番
   */
  paging(page, order) {
    this.search(this.props.contributionSearch.Search, order, page)
    this.props.paging(this.props.contributionSearch.Search, order, page)
  }
  /**
   * 順番を設定する
   *
   * @param {number} order 順番
   */
  setOrder(order) {
    this.search(this.props.contributionSearch.Search, order, this.props.contributionSearch.Page)
  }
  /**
   * リストを取得する
   */
  getList() {
    let list = this.props.contributionSearch.List
    if (!Array.isArray(list)) {
      list = []
    }

    if (list.length == 0) {
      return (
        <div className={Center}>
          「{this.props.contributionSearch.Search}」に一致する記事は見つかりませんでした。
        </div>
      )
    }

    return (
      <List
        List={list}
        onSearch={this.search}
      />
    )

  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {

    let list = this.props.contributionSearch.List
    if (!Array.isArray(list)) {
      list = []
    }

    let pagination = ""
    if (list.length > 0) {
      pagination = (
        <Pagination
          count={this.props.contributionSearch.Count}
          limit={this.props.contributionSearch.Limit}
          link="user/followList"
          order={parseInt(this.props.contributionSearch.Order)}
          activePage={parseInt(this.props.contributionSearch.Page)}
          paging={this.paging.bind(this)}
        />)
    }

    let order = "　新着順　"
    if (this.props.contributionSearch.Order == ORDER_TYPE_FOLLOW_COUNT) {
      order = "フォロー順"
    }

    return (
      <div>
        <div className="container">
          <div>
            <br/>
            <Form horizontal componentClass="div">
              <FormGroup>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="検索ワード"
                    defaultValue={this.props.match.params.search}
                    inputRef={ref => {this.input = ref}}
                    onKeyDown={this.sendCommand.bind(this)}
                  />
                </Col>
                <Col sm={2}>
                  <Button onClick={() => this.setSearch()}>
                    <Glyphicon glyph="search"/>&nbsp;検索&nbsp;
                  </Button>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={10}/>
                <Col sm={2}>
                  <DropdownButton
                    title={order} id="search-order-dropdown"
                    pullRight
                    onSelect={this.setOrder.bind(this)}
                  >
                    <LinkContainer to={"/contribution/search/" + this.props.contributionSearch.Search + "/" + ORDER_TYPE_NEW + "/" + this.props.contributionSearch.Page}>
                      <MenuItem eventKey={ORDER_TYPE_NEW}>新規順</MenuItem>
                    </LinkContainer>
                    <LinkContainer to={"/contribution/search/" + this.props.contributionSearch.Search + "/" + ORDER_TYPE_FOLLOW_COUNT + "/" + this.props.contributionSearch.Page}>
                      <MenuItem eventKey={ORDER_TYPE_FOLLOW_COUNT}>フォロー順</MenuItem>
                    </LinkContainer>
                  </DropdownButton>
                </Col>
              </FormGroup>
            </Form>

          </div>
          <hr/> {this.getList()}
          {pagination}
        </div>
        <Footer/>
      </div>
    )
  }
}

Search.propTypes = {
  match: PropTypes.object,
  contributionSearch: PropTypes.object,
  search: PropTypes.func,
  paging: PropTypes.func,
  setOrder: PropTypes.func
}
