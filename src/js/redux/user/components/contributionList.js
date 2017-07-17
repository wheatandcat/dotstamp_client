// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Typeahead } from "react-bootstrap-typeahead"
import {
  Modal,
  Tabs,
  Tab,
  PageHeader,
  Glyphicon,
  Row,
  Col,
  Nav,
  NavItem,
  ButtonToolbar,
  Button
} from "react-bootstrap"
import ContributionShow from "../../contribution/containers/show"
import { DateTimeFormat } from "../../../utils/common"

import {
  VIEW_STATUS_PUBLIC,
  VIEW_STATUS_PRIVATE
} from "../../../constants/contribution"
let load = false
let tite = ""
export default class ContributionList extends Component {
  componentWillMount() {
    this.props.init()
    this.getList()
  }
  componentWillUpdate() {
    const { contributionId } = this.props.userContributionList
    if (!load && contributionId != 0) {
      load = true
      this.setContribution(contributionId)
    }
  }
  /**
   * リストを取得する
   */
  getList() {
    this.props.getList()
  }
  /**
   * 投稿を設定する
   *
   * @param  {number} id 投稿ID
   */
  setContribution(id: number) {
    this.props.setContribution(id)
    this.props.getDetail(id)
  }
  /**
   * 作品を削除する
   *
   * @param  {number} id 投稿ID
   */
  deleteContribution(id: number) {
    this.props.delete(id)
  }
  /**
   * 編集パスを取得する
   *
   * @param  {number} id 投稿ID
   * @return {string} 編集パス
   */
  getEditPath(id: number) {
    return `/contribution/edit/${id}`
  }
  /**
   * タイトルを変更する
   *
   * @param  {string[]} text テキスト
   */
  changeTitle(text: Array<string>) {
    this.searchTitle(text[0])
  }
  /**
   * タイトルを入力する
   *
   * @param  {object} text テキスト
   */
  inputTitle(text: Object) {
    this.searchTitle(text.target.value)
  }
  /**
   * タイトルを検索する
   *
   * @param  {string} text テキスト
   */
  searchTitle(text: string) {
    const { all, viewStatus } = this.props.userContributionList

    const list = []
    let count = 0
    const length = all.length
    tite = text

    all.forEach(item => {
      if (item.Title.indexOf(text) != -1) {
        if (item.view_status == viewStatus) {
          list.push(item)
        }
      }

      count++
      if (count >= length) {
        this.props.setTitleSearch(list)
      }
    })
  }
  /**
   * 公開状態を設定する
   *
   * @param  {numbet} status 状態
   */
  setViewStatus(status: number) {
    this.props.setViewStatus(status)
    this.searchTitle(tite)
  }
  /**
   * 削除確認を取得する
   */
  getDeleteConfirm() {
    const { deleteConfirm, contributionId } = this.props.userContributionList

    return (
      <Modal show={deleteConfirm} onHide={this.props.closeDeleteConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>投稿削除</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          投稿を削除します。よろしいですか？
          <br />
          <br />
          <ButtonToolbar>
            <Button
              bsStyle="danger"
              onClick={() => this.deleteContribution(contributionId)}
            >
              削除する
            </Button>
            <Button onClick={() => this.props.closeDeleteConfirm()}>
              キャンセル
            </Button>
          </ButtonToolbar>
        </Modal.Body>
      </Modal>
    )
  }

  /**
   * 操作を取得する
   */
  getControl() {
    const { contributionId } = this.props.userContributionList
    let disabled = false
    let text = ""
    if (contributionId == 0) {
      disabled = true
      text = "（※選択されていません）"
    }

    return (
      <ButtonToolbar>
        <Link to={this.getEditPath(contributionId)}>
          <Button bsStyle="success" disabled={disabled}>
            <Glyphicon glyph="edit" />&nbsp;編集
          </Button>
        </Link>
        <Button
          bsStyle="danger"
          onClick={() => this.props.openDeleteConfirm()}
          disabled={disabled}
        >
          <Glyphicon glyph="trash" />&nbsp;削除
        </Button>
        {text}
      </ButtonToolbar>
    )
  }
  /**
   * 描画する
   */
  render() {
    const { contributionId, titles } = this.props.userContributionList

    let list = this.props.userContributionList.List
    if (!Array.isArray(list)) {
      list = []
    }

    let body = this.props.contributionShow.body
    if (!Array.isArray(body)) {
      body = []
    }

    let side
    if (list.length == 0) {
      side = <div>一致する投稿はありませんでした。</div>
    } else {
      side = (
        <Nav bsStyle="pills" stacked>
          {list.map(item =>
            <NavItem key={item.id} eventKey={item.id}>
              <p>
                {item.title}
              </p>
              {DateTimeFormat(item.createdAt)}
            </NavItem>
          )}
        </Nav>
      )
    }

    let contribution = ""

    if (contributionId != 0) {
      contribution = (
        <div
          style={{
            zoom: "75%"
          }}
        >
          <ContributionShow
            params={{
              id: 0
            }}
          />
        </div>
      )
    }

    return (
      <div className="container">
        {this.getDeleteConfirm()}
        <PageHeader>
          <Glyphicon glyph="list-alt" />&nbsp;投稿一覧
        </PageHeader>
        <Tab.Container
          id="left-tabs-example"
          onSelect={this.setContribution.bind(this)}
          activeKey={contributionId}
        >
          <Row>
            <Col sm={3}>
              <Tabs
                defaultActiveKey={VIEW_STATUS_PRIVATE}
                animation={false}
                id="noanim-tab"
                onSelect={this.setViewStatus.bind(this)}
              >
                <Tab eventKey={VIEW_STATUS_PRIVATE} title="下書き" />
                <Tab eventKey={VIEW_STATUS_PUBLIC} title="公開中" />
              </Tabs>
              <Typeahead
                options={titles}
                maxVisible={2}
                placeholder="タイトル検索"
                onChange={this.changeTitle.bind(this)}
                onBlur={this.inputTitle.bind(this)}
              />
              <br /> {side}
            </Col>
            <Col sm={8}>
              <div>{this.getControl()}</div>
              <hr /> {contribution}
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

ContributionList.propTypes = {
  getList: PropTypes.func,
  getDetail: PropTypes.func,
  delete: PropTypes.func,
  setContribution: PropTypes.func,
  contributionShow: PropTypes.object,
  userContributionList: PropTypes.object,
  setTitleSearch: PropTypes.func,
  setViewStatus: PropTypes.func,
  init: PropTypes.func,
  closeDeleteConfirm: PropTypes.func,
  openDeleteConfirm: PropTypes.func
}
