import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
  Tooltip,
  Label,
  Dropdown,
  Button,
  MenuItem,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Form,
  Glyphicon
} from "react-bootstrap"
import {
  VIEW_STATUS_PUBLIC,
  VIEW_STATUS_PRIVATE,
  TAG_MAX_NUMBER
} from "../../../../constants/contribution"
import FormMain from "../../containers/form/main"
import TalkBoard from "../../containers/talk/board"
import AlertMessage from "../../../error/containers/alertMessage"
import MessageSow from "../../../message/containers/show"
import { Guide } from "../../../../component/contribution/help"

import { Preview, Group, GroupList } from "./../../../../../css/form.css"
import { Item } from "./../../../../../css/tag.css"
import { Front, Absolute, Close } from "./../../../../../css/common.css"

let self

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
      self.refs.preview.scrollTop -= 30
    }

    if (event.keyCode == 40) {
      self.refs.preview.scrollTop += 30
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
      const node = this.refs.preview
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
    const title = this.refs.title.value.trim()
    const tag = contributionId == null ? this.refs.tag.value.trim() : ""
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
   * タイトルを変更する
   */
  changeTitle() {
    this.props.changeTitle(this.refs.title.value)
  }
  /**
   * タグを変更する
   */
  changeTag() {
    this.props.changeTag(this.refs.tag.value)
  }

  /**
   * タグ入力を取得する
   *
   * @return {object}  html
   */
  getInputTag() {
    return (
      <FormGroup>
        <input
          type="text"
          id="tag"
          className="form-control"
          placeholder="タグをスペース区切りで5つまで入力（例：映画 2001年宇宙の旅）"
          ref="tag"
          value={this.props.contributionForm.tag}
          onChange={this.changeTag.bind(this)}
        />
      </FormGroup>
    )
  }
  /**
   * タグ追加する
   */
  addTag() {
    const tag = this.refs.addTag.value.trim()
    if (tag.length > 20) {
      this.props.alertMessage("タグは20文字まで")
      return
    }

    this.props.addTag({
      userContributionId: this.props.contributionId,
      name: tag
    })

    this.refs.addTag.value = ""
  }
  /**
   * タグを削除する
   */
  deleteTag(id) {
    this.props.deleteTag({
      userContributionId: this.props.contributionId,
      id
    })
  }
  /**
   * タグ入力
   */
  addTagInput() {
    let tagList = this.props.contributionForm.tagList
    if (!Array.isArray(tagList)) {
      tagList = []
    }

    if (tagList.length >= TAG_MAX_NUMBER) {
      return (
        <FormGroup>
          <Label bsStyle="danger">
            タグ登録は10個まで
          </Label>
        </FormGroup>
      )
    }

    return (
      <FormGroup>
        <input
          type="text"
          className="form-control"
          placeholder="タグを追加する"
          ref="addTag"
        />
        <Button onClick={() => this.addTag()}>
          追加
        </Button>
      </FormGroup>
    )
  }
  /**
   * タグを取得する
   *
   * @return {object} html
   */
  getTag() {
    if (this.props.contributionId == null) {
      return this.getInputTag()
    }

    let tagList = this.props.contributionForm.tagList
    if (!Array.isArray(tagList)) {
      tagList = []
    }

    return (
      <FormGroup>
        <Form inline>
          {tagList.map(tag => (
            <span key={tag.ID}>
              &nbsp;
              <Label bsStyle="info" className={Item}>
                <Glyphicon
                  glyph="remove"
                  className={Close}
                  onClick={() => this.deleteTag(tag.ID)}
                />&nbsp;
                <span>{tag.Name}</span>
              </Label>
            </span>
          ))}
          &nbsp; {this.addTagInput()}
        </Form>
      </FormGroup>
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
   * 表示状態を取得する
   *
   * @return {object} html
   */
  getViewStatus() {
    const viewStausMap = []
    viewStausMap[VIEW_STATUS_PUBLIC] = {
      eventKey: 1,
      text: "投稿する　",
      glyph: "edit",
      status: VIEW_STATUS_PUBLIC
    }
    viewStausMap[VIEW_STATUS_PRIVATE] = {
      eventKey: 2,
      text: "下書き保存",
      glyph: "floppy-disk",
      status: VIEW_STATUS_PRIVATE
    }

    const viewStaus = item => {
      if (item.status == this.props.contributionForm.viewStatus) {
        return (
          <MenuItem eventKey={item.eventKey} key={item.eventKey} active>
            <Glyphicon glyph={item.glyph} />&nbsp;{item.text}
          </MenuItem>
        )
      }

      return (
        <MenuItem
          eventKey={item.eventKey}
          key={item.eventKey}
          onClick={() => this.props.setViewStatus(item.status)}
        >
          <Glyphicon glyph={item.glyph} />&nbsp;{item.text}
        </MenuItem>
      )
    }

    const status = viewStausMap[this.props.contributionForm.viewStatus]

    const disabled = this.props.contributionForm.Experience

    return (
      <Dropdown id="viweStatus" disabled={disabled} ref="viweStatus">
        <Button
          onClick={() => this.save()}
          bsStyle="success"
          disabled={disabled}
        >
          <Glyphicon glyph={status.glyph} />&nbsp;{status.text}
        </Button>
        <Dropdown.Toggle bsStyle="success" />
        <Dropdown.Menu className="super-colors">
          {viewStausMap.map(item => viewStaus(item))}
        </Dropdown.Menu>
      </Dropdown>
    )
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
    let sound = ""
    if (this.props.contributionId != null) {
      if (!this.props.contributionEdit.Sound) {
        sound = (
          <Button bsStyle="link" onClick={() => this.addSound()}>
            <Glyphicon glyph="bullhorn" />&nbsp;読み上げを作成する（β版）
          </Button>
        )
      } else {
        sound = (
          <Link to={`/sound/show/${this.props.contributionId}`}>
            <Button bsStyle="link">
              <Glyphicon glyph="bullhorn" />&nbsp;読み上げを編集する（β版）
            </Button>
          </Link>
        )
      }
    }

    let experience = ""
    if (this.props.contributionForm.Experience) {
      experience = (
        <Tooltip
          id="tooltip-right"
          placement="right"
          className="in"
          positionLeft={170}
          positionTop={160}
        >
          「お試し」投稿のデータは保存<br />できません。
        </Tooltip>
      )
    }

    return (
      <div>
        <MessageSow />
        {" "}
        <Guide
          show={this.props.contributionForm.help}
          onHide={this.props.closeHelp}
        />
        {experience}
        <ListGroup className={Group}>
          <ListGroupItem>
            <AlertMessage />
            <FormGroup>
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="タイトル(100文字以内)"
                ref="title"
                value={this.props.contributionForm.title}
                onChange={this.changeTitle.bind(this)}
              />
            </FormGroup>
            {this.getTag()}
            {this.getViewStatus()}
            {sound}
          </ListGroupItem>
          <ListGroupItem>
            <div className={Absolute}>
              <Button
                bsSize="small"
                bsStyle="info"
                className={Front}
                onClick={() => this.props.openHelp()}
              >
                <Glyphicon glyph="info-sign" />&nbsp;ヒント
              </Button>
            </div>
            <div className={Preview} ref="preview" style={this.getBoardStyle()}>
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
