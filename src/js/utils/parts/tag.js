import PropTypes from "prop-types"
import React, { Component } from "react"
import { Label } from "react-bootstrap"
import { Item } from "./../../../css/tag.css"
import { Link } from "react-router-dom"
import { ORDER_TYPE_NEW } from "../../constants/contribution"

export default class Tag extends Component {
  /**
   * 検索を設定する
   *
   * @param {string} search 検索
   */
  setSearch(search) {
    this.props.search(search, 1, ORDER_TYPE_NEW)
  }
  /**
   * アイテムを取得する
   *
   * @param {object} item アイテム
   * @return {object} html
   */
  getItem(item) {
    const hash = location.hash
    if (hash.indexOf("/contribution/search") != -1) {
      const url =
        "contribution/search/" + item.Name + "/" + ORDER_TYPE_NEW + "/1"
      return (
        <Link to={url} onClick={() => this.setSearch(item.Name)}>
          <Label bsStyle="info" className={Item}>
            {item.Name}
          </Label>
        </Link>
      )
    }

    return (
      <Link
        to={"contribution/search/" + item.Name + "/" + ORDER_TYPE_NEW + "/1"}
      >
        <Label bsStyle="info" className={Item}>
          {item.Name}
        </Label>
      </Link>
    )
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    const list = this.props.list
    return (
      <div>
        {list.map(item => (
          <span key={item.ID}>
            {this.getItem(item)}
          </span>
        ))}
      </div>
    )
  }
}

Tag.propTypes = {
  list: PropTypes.array,
  search: PropTypes.func
}
