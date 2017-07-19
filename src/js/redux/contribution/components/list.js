// @flow
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, ButtonGroup, Well, Glyphicon, Collapse } from "react-bootstrap"
import { Link as Footer } from "../../../component/footer/"
import ContributionShowFrame from "../components/show/frame"
import { Combination } from "../../../component/contribution/list/"
import type { State as ContributionList } from "../reducers/list"

const VIEW_PAGE_LIMIT = 10

type Props = {
  contributionList: ContributionList,
  getList: Function,
  next: Function,
  addItem: Function,
  deleteItem: Function
}

export default class List extends Component {
  componentWillMount() {
    this.getList(true)
  }
  props: Props
  /**
   * リストを取得する
   *
   * @param  {boolean} init 初期取得フラグ
   */
  getList(init: boolean) {
    const action = {
      order: this.props.contributionList.order
    }

    this.props.getList(action, { init })
  }
  /**
   * 次のページを取得する
   */
  next() {
    this.getList(false)
  }
  /**
   * アイテムリストを取得する
   *
   * @param  {array[]} list リスト
   * @param  {boolean} show 表示フラグ
   * @return {object} html
   */
  getItemList(list: Array<*>, show: boolean) {
    if (!show) {
      return <div />
    }

    let contribution = <div />
    let openID = -1
    const { itemMap } = this.props.contributionList

    list.forEach(item => {
      if (itemMap[item.id] != undefined) {
        const tmp = itemMap[item.id]
        contribution = <ContributionShowFrame list={tmp.body} />
        openID = item.id
      }
    })

    return (
      <Combination
        list={list}
        openID={openID}
        show={contribution}
        onAdd={this.props.addItem}
        onDelete={this.props.deleteItem}
      />
    )
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    let list = this.props.contributionList.list
    if (list == undefined) {
      list = []
    }

    let order = this.props.contributionList.order - 1
    if (order < 0) {
      order = 0
    }

    const { init, next } = this.props.contributionList

    const newLine = list.length - order * VIEW_PAGE_LIMIT
    let oldList = list.slice(0, list.length - newLine)
    let newList = list.slice(list.length - newLine, list.length)
    if (init) {
      oldList = list
      newList = []
    }

    let nextButton
    if (newLine >= VIEW_PAGE_LIMIT) {
      nextButton = (
        <Button bsStyle="success" onClick={() => this.next()}>
          <Glyphicon glyph="chevron-down" />次のページを読み込む
        </Button>
      )
    } else {
      nextButton = (
        <Button bsStyle="success" disabled>
          <Glyphicon glyph="minus" />
        </Button>
      )
    }

    const self = this
    if (!next) {
      setTimeout(() => {
        self.props.next()
      }, 200)
    }

    return (
      <div>
        <Well>
          <div className="container">
            <h3>新着投稿</h3>
            <Link to="/about">
              <Button bsStyle="primary">.stampとは</Button>
            </Link>
          </div>
        </Well>
        <div className="container">
          {this.getItemList(oldList, true)}

          <Collapse in={next} timeout={3000}>
            {this.getItemList(newList, next)}
          </Collapse>
          <br />
          <br />
          <ButtonGroup vertical block>
            {nextButton}
          </ButtonGroup>
        </div>
        <Footer />
      </div>
    )
  }
}
