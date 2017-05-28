import PropTypes from "prop-types"
import React, { Component } from "react"
import { DragSource, DropTarget } from "react-dnd"
import ContributionTalk from "../../containers/talk/main"

// ドラッグ元のインターフェースを持たせる
const itemSource = {
  beginDrag(props) {
    return { priority: props.priority }
  }
}

// ドラッグ元の機能と独自コンポーネントをつなぐ
const collectSource = function(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

// ドラッグ先も同様にインターフェースとコンポーネントの結びつきを用意
const itemTarget = {
  hover(props, monitor) {
    const draggedPriority = monitor.getItem().priority

    if (draggedPriority != props.priority) {
      props.moveItem(draggedPriority, props.priority)
    }
  }
}

const collectTarget = function(connect) {
  return { connectDropTarget: connect.dropTarget() }
}

// アイテムコンポーネント
let Item = class Item extends Component {
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    // 全体のドラッグ操作を許す場合
    return this.props.connectDragSource(
      this.props.connectDropTarget(
        <div>
          <ContributionTalk talk={this.props.talk} editMode />
        </div>
      )
    )
  }
}

Item.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  priority: PropTypes.any.isRequired,
  moveItem: PropTypes.func.isRequired,
  talk: PropTypes.object
}

// ドラッグ＆ドロップの機能を`Item`コンポーネントにかぶせる
Item = DropTarget("item", itemTarget, collectTarget)(Item)
Item = DragSource("item", itemSource, collectSource)(Item)

export default Item
