// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Button, ListGroup, ListGroupItem, Glyphicon } from "react-bootstrap"
import FormMain from "../../containers/form/main"
import TalkBoard from "../../containers/talk/board"
import AlertMessage from "../../../error/containers/alertMessage"
import MessageSow from "../../../message/containers/show"
import { Guide } from "../../../../component/contribution/help"
import { NewInput, AddForm } from "../../../../component/tag"
import { Status, Sound } from "../../../../component/contribution/viewStatus"
import {
  NewInput as NewTitleInput
} from "../../../../component/contribution/title"

import { Preview, Group, GroupList } from "./../../../../../css/form.css"
import { Front } from "./../../../../../css/common.css"

let self: Object

window.addEventListener("resize", () => {
  if (self == undefined) {
    return
  }

  self.props.changeHeight(window.innerHeight)
})

window.addEventListener("keydown", event => {
  if (self == undefined) {
    return
  }

  if (!event.shiftKey) {
    return
  }

  if (event.keyCode == 17) {
    self.save()
  }

  if (event.altKey) {
    if (event.keyCode == 38) {
      self.preview.scrollTop -= 30
    }

    if (event.keyCode == 40) {
      self.preview.scrollTop += 30
    }
  }
})

function checkDiff() {
  if (self == undefined) {
    return false
  }

  const title = self.props.contributionForm.title
  const body = self.props.contributionTalk

  if (
    title == self.props.contributionEdit.saveData.title &&
    JSON.stringify(body) == self.props.contributionEdit.saveData.body
  ) {
    return false
  }

  return true
}

const checkContributionEdit = function(hash) {
  if (self == undefined) {
    return false
  }

  if (
    hash.indexOf("contribution/new") == -1 &&
    hash.indexOf("contribution/edit") == -1
  ) {
    return false
  }

  if (self.props.contributionId == null) {
    const title = self.props.contributionForm.title
    const body = self.props.contributionTalk
    if (title == "" && JSON.stringify(body) == "[]") {
      return false
    }
  } else if (!checkDiff()) {
    return false
  }

  return true
}

window.onbeforeunload = function() {
  const hash = location.pathname
  if (checkContributionEdit(hash)) {
    return true
  }
}

export default class Header extends Component {
  preview: Object
  componentWillMount() {
    this.props.alertMessageInit()

    self = this
    if (this.props.title != "") {
      this.props.changeTitle(this.props.title)
    }

    this.props.changeHeight(window.innerHeight)

    this.props.closeHelp()
  }
  /**
   * 描写更新後に実行する
   */
  componentDidUpdate() {
    // スクロールを下へ
    if (this.props.contributionForm.boardScroll) {
      this.setScroll()
    }
  }
  /**
   * スクロール設定する
   */
  setScroll() {
    if (this.props.contributionTalk.length > 0) {
      const node = this.preview
      node.scrollTop = node.scrollHeight
    }
  }
  /**
   * 保存する
   */
  save() {
    if (this.props.contributionForm.Experience) {
      return
    }

    const contributionId = this.props.contributionId
    const title = this.props.contributionForm.title.trim()
    const tag = contributionId == null
      ? this.props.contributionForm.tag.trim()
      : ""
    const body = this.props.contributionTalk

    const action = {
      userContributionId: contributionId,
      title,
      tag,
      body: JSON.stringify(body),
      viewStatus: this.props.contributionForm.viewStatus
    }

    if (action.title == "") {
      this.props.alertMessage("タイトルを入力して下さい")
      return
    } else if (action.title.length > 100) {
      this.props.alertMessage(`タイトルが100文字を超えています。(${action.title.length}文字)`)
      return
    } else if (action.body == "[]") {
      this.props.alertMessage("本文を入力して下さい")
      return
    } else if (action.tag.split(" ").length > 10) {
      this.props.alertMessage("タグ登録は10個までです")
      return
    }

    this.props.message("保存しました", "success")

    if (
      this.props.contributionEdit.saveData.viewStatus ==
      this.props.contributionForm.viewStatus
    ) {
      if (!checkDiff()) {
        return
      }
    }

    if (contributionId == null) {
      this.props.new(action)
    } else {
      this.props.save(action, action)
    }
  }
  /**
   * タグ追加する
   */
  addTag(name: Object) {
    const tag = name.trim()
    if (tag.length > 20) {
      this.props.alertMessage("タグは20文字まで")
      return
    }

    this.props.addTag({
      userContributionId: this.props.contributionId,
      name: tag
    })
  }
  /**
   * タグを削除する
   */
  deleteTag(id: number) {
    this.props.deleteTag({
      userContributionId: this.props.contributionId,
      id
    })
  }
  /**
   * タグを取得する
   *
   * @return {object} html
   */
  getTag() {
    if (this.props.contributionId == null) {
      return <NewInput onTag={this.props.changeTag.bind(this)} />
    }

    return (
      <AddForm
        tagList={this.props.contributionForm.tagList}
        onAdd={this.addTag.bind(this)}
        onDelete={this.deleteTag.bind(this)}
      />
    )
  }
  /**
   * ボードスタイルを取得する
   *
   * @return {object} スタイル
   */
  getBoardStyle() {
    const height = this.props.contributionForm.height - 480

    return {
      height: `${height}px`
    }
  }
  /**
   * 音声を追加する
   */
  addSound() {
    this.props.addSound({ userContributionId: this.props.contributionId })
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    return (
      <div>
        <MessageSow />
        <Guide
          open={this.props.contributionForm.help}
          onHide={this.props.closeHelp}
        />
        <ListGroup className={Group}>
          <ListGroupItem>
            <AlertMessage />
            <NewTitleInput
              defaultValue={this.props.contributionForm.title}
              onTitle={this.props.changeTitle.bind(this)}
            />
            {this.getTag()}
            <Status
              viewStatus={this.props.contributionForm.viewStatus}
              disabled={this.props.contributionForm.Experience}
              onChageStatus={this.props.setViewStatus.bind(this)}
              onPublic={this.save.bind(this)}
              onPrivate={this.save.bind(this)}
            />
            <Sound
              contributionId={this.props.contributionId}
              created={this.props.contributionEdit.Sound}
              addSound={this.addSound.bind(this)}
              experience={this.props.contributionForm.Experience}
            />
          </ListGroupItem>
          <ListGroupItem>
            <Button
              bsSize="small"
              bsStyle="info"
              className={Front}
              onClick={() => this.props.openHelp()}
            >
              <Glyphicon glyph="info-sign" />&nbsp;ヒント
            </Button>
            <div
              className={Preview}
              ref={input => {
                this.preview = input
              }}
              style={this.getBoardStyle()}
            >
              <TalkBoard talkList={this.props.contributionTalk} />
            </div>
          </ListGroupItem>
          <ListGroupItem bsClass={GroupList}>
            <footer>
              <FormMain contributionId={this.props.contributionId} />
            </footer>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

Header.propTypes = {
  changeTitle: PropTypes.func,
  changeHeight: PropTypes.func,
  changeTag: PropTypes.func,
  setViewStatus: PropTypes.func,
  contributionForm: PropTypes.object,
  contributionEdit: PropTypes.object,
  contributionId: PropTypes.number,
  contributionTalk: PropTypes.array,
  title: PropTypes.string,
  new: PropTypes.func,
  save: PropTypes.func,
  addTag: PropTypes.func,
  deleteTag: PropTypes.func,
  alertMessage: PropTypes.func,
  alertMessageInit: PropTypes.func,
  addSound: PropTypes.func,
  openHelp: PropTypes.func,
  closeHelp: PropTypes.func,
  message: PropTypes.func
}
