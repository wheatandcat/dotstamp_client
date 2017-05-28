import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, ButtonGroup, Well, Glyphicon, Collapse } from "react-bootstrap"
import Footer from "../../../utils/parts/footer"
import ContributionShowFrame from "../components/show/frame"
import { Combination } from "../../../component/contribution/list/"

const VIEW_PAGE_LIMIT = 10

export default class List extends Component {
  componentWillMount() {
    this.getList(true)
  }
  /**
   * リストを取得する
   *
   * @param  {bool} init 初期取得フラグ
   */
  getList(init) {
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
   * @param  {bool} show 表示フラグ
   * @return {object} html
   */
  getItemList(list, show) {
    if (!show) {
      return <div />
    }

    let contribution = <div />
    let openID = -1

    list.forEach(item => {
      if (this.props.contributionList.itemMap[item.ID] != undefined) {
        const tmp = this.props.contributionList.itemMap[item.ID]
        contribution = (
          <ContributionShowFrame
            title={tmp.title}
            body={tmp.body}
            tagList={tmp.tagList}
          />
        )
        openID = item.ID
      }
    })

    return (
      <Combination
        List={list}
        OpenID={openID}
        Show={contribution}
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

    const newLine = list.length - order * VIEW_PAGE_LIMIT
    let oldList = list.slice(0, list.length - newLine)
    let newList = list.slice(list.length - newLine, list.length)
    if (this.props.contributionList.init) {
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
    if (!this.props.contributionList.next) {
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
              <Button bsStyle="primary">
                .stampとは
              </Button>
            </Link>
          </div>
        </Well>
        <div className="container">
          {this.getItemList(oldList, true)}

          <Collapse in={this.props.contributionList.next} timeout={3000}>
            {this.getItemList(newList, this.props.contributionList.next)}
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

List.propTypes = {
  contributionList: PropTypes.object,
  getList: PropTypes.func,
  next: PropTypes.func,
  addItem: PropTypes.func,
  deleteItem: PropTypes.func
}
