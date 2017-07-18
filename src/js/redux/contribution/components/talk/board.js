// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import HTML5Backend from "react-dnd-html5-backend"
import { DragDropContext } from "react-dnd"
import Item from "./item"

let self

class Board extends Component {
  componentWillMount() {
    self = this
  }

  /**
   * アイテムを移動した
   *
   * @param  {number} priority 優先度
   * @param  {number} afterPriority 移動後の優先度
   */
  handleMoveItem(priority, afterPriority) {
    const talkList = self.props.talkList.concat()
    let beforeTalk, afterTalk

    talkList.map(talk => {
      if (talk.priority == priority) {
        beforeTalk = talk
      }
      if (talk.priority == afterPriority) {
        afterTalk = talk
      }
    })

    const beforeIndex = talkList.indexOf(beforeTalk)
    const afterIndex = talkList.indexOf(afterTalk)

    talkList[beforeIndex] = afterTalk
    talkList[afterIndex] = beforeTalk

    self.props.setTalkList(talkList)
  }
  /**
   * 描画する
   *
   * @return {object} html
  */
  render() {
    if (!Array.isArray(this.props.talkList)) {
      return <div />
    }

    return (
      <div>
        {this.props.talkList.map(talk =>
          <Item
            key={talk.priority}
            priority={talk.priority}
            talk={talk}
            moveItem={this.handleMoveItem}
          />
        )}
      </div>
    )
  }
}

Board.propTypes = {
  talkList: PropTypes.array
}

// Appコンポーネントをドラッグ＆ドロップのコンテキストとする
export default DragDropContext(HTML5Backend)(Board)
