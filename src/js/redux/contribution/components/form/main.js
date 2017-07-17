// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Well } from "react-bootstrap"
import { TALK_TYPE_TEXT, TALK_TYPE_IMAGE } from "../../actions/talk"
import { UPLOAD_FILE_SIZE_MAX } from "../../../../constants/common"
import {
  Action as FromAction,
  Text
} from "../../../../component/contribution/form/"
import { Collection } from "../../../../component/slick/"
import { defaultIcon, talk } from "./styles.css"

let self

window.addEventListener("keydown", event => {
  if (self == undefined) {
    return
  }

  if (!event.shiftKey) {
    return
  }

  if (event.keyCode == 91) {
    self.addBodyText()
  }

  if (event.keyCode == 13) {
    self.refs.body.focus()
  }

  if (event.keyCode == 73) {
    self.refs.file.click()
  }
})

export default class Main extends Component {
  componentWillMount() {
    self = this
  }
  changeBody(value: string) {
    this.props.changeBody(value)
  }
  /**
   * テキスト本文を追加する
   */
  addBodyText() {
    const input = this.props.contributionForm.body
    if (input.value == "") {
      return
    }
    const body = input.trim()

    if (!body) {
      return
    }

    if (body.length > 256) {
      this.props.alertMessage("最大文字数を超えています！（256文字まで)")
      return
    }

    if (this.props.contributionForm.edit) {
      // 編集中の場合は、こちらを使用
      return this.props.editBody(
        body,
        this.props.contributionForm.character,
        this.props.contributionForm.directionType,
        this.props.contributionForm.priority
      )
    }

    this.addBody(
      body,
      this.props.contributionForm.character,
      this.props.contributionForm.directionType,
      TALK_TYPE_TEXT
    )
  }
  /**
   * 本文追加する
   */
  addBody(
    body: string,
    character: Object,
    directionType: number,
    talkType: number
  ) {
    return this.props.addBody(body, character, directionType, talkType)
  }
  /**
   * 画像指定を変更の監視する
   *
   * @param  {object} e イベントオブジェクト
   */
  handleChangeFile(e: Object) {
    const fileList = e.target.files

    if (fileList.length == 0) {
      return
    }

    if (fileList[0].size > UPLOAD_FILE_SIZE_MAX) {
      this.props.alertMessage("アップロード失敗！アップロードできる最大容量を超えています！！（画像は600kBまで)")
      return
    }

    this.uploadFile([fileList[0]])
  }
  /**
   * 画像ドロップの監視する
   *
   * @param  {array} files ファイルリスト
   */
  handleDropFile(files: Array<*>) {
    this.uploadFile(files)
  }
  /**
   * ファイルをアップロードする
   *
   * @param  {array} files ファイルリスト
   */
  uploadFile(files: Array<*>) {
    const formData = new FormData()
    formData.append("file", files[0])

    let contributionId = this.props.contributionId
    if (contributionId == null) {
      contributionId = 0
    }

    this.props.upload(`?userContributionId=${contributionId}`, formData, {
      character: this.props.contributionForm.character,
      directionType: this.props.contributionForm.directionType,
      talkType: TALK_TYPE_IMAGE
    })
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    return (
      <div>
        <div>
          {(() => {
            if (this.props.characterList.defaultIcon) {
              return <div className={defaultIcon}>デフォルトアイコン表示中...</div>
            }
          })()}
          <Well bsStyle="info" className={talk}>
            <Collection
              list={this.props.characterList.list}
              onClick={id => this.props.changeCharacter(id)}
            />
          </Well>
        </div>
        <FromAction
          disabled={this.props.contributionForm.experience}
          onAdd={this.addBodyText.bind(this)}
          onUpload={this.handleChangeFile.bind(this)}
          cancel={this.props.contributionForm.edit}
          onCancel={this.props.cancelEdit.bind(this)}
        />
        <Text
          edit={this.props.contributionForm.edit}
          body={this.props.contributionForm.body}
          onChange={this.changeBody.bind(this)}
        />
      </div>
    )
  }
}

Main.propTypes = {
  changeBody: PropTypes.func,
  addBody: PropTypes.func,
  changeCharacter: PropTypes.func,
  contributionForm: PropTypes.object,
  characterList: PropTypes.object,
  editBody: PropTypes.func,
  upload: PropTypes.func,
  contributionId: PropTypes.number,
  alertMessage: PropTypes.func,
  cancelEdit: PropTypes.func
}
