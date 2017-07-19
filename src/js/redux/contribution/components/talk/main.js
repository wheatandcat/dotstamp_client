// @flow
import React, { Component } from "react"
import { TALK_TYPE_IMAGE } from "../../actions/talk"
import { UPLOAD_FILE_SIZE_MAX } from "../../../../constants/common"
import { line } from "./../../../../../css/common.css"
import {
  Balloon,
  EditImage,
  EditText
} from "./../../../../component/contribution/balloon/"
import type { State as ContributionEdit } from "./../../reducers/edit"

type Props = {
  talk: Object,
  editMode: boolean,
  deleteBody: Function,
  setEditBody: Function,
  contributionEdit: ContributionEdit,
  alertMessage: Function,
  upload: Function
}

export default class Talk extends Component {
  props: Props
  /**
   * 画像指定を変更の監視する
   *
   * @param  {object} e イベントオブジェクト
   */
  handleChangeFile(e: Object) {
    const files = e.target.files

    if (files.length == 0) {
      return
    }

    if (files[0].size > UPLOAD_FILE_SIZE_MAX) {
      this.props.alertMessage("アップロード失敗！アップロードできる最大容量を超えています！！（画像は600kBまで)")
      return
    }

    this.uploadFile([files[0]])
  }
  /**
   * ファイルをアップロードする
   *
   * @param  {array} files ファイルリスト
   */
  uploadFile(files: Array<*>) {
    const formData = new FormData()
    formData.append("file", files[0])

    let contributionId = this.props.contributionEdit.id
    if (contributionId == null) {
      contributionId = 0
    }

    this.props.upload(
      `?userContributionId=${contributionId}`,
      formData,
      this.props.talk
    )
  }
  /**
   * 本文を削除する
   *
   * @param  {number} priority 優先度
   */
  deleteBody(priority: number) {
    this.props.deleteBody(priority)
  }
  /**
   * 本文を編集設定にする
   *
   * @param  {object} talk 会話
   */
  setEditBody(talk: {
    priority: number,
    body: string,
    character: Object,
    directionType: number,
    talkType: number
  }) {
    this.props.setEditBody(
      talk.priority,
      talk.body,
      talk.character,
      talk.directionType,
      talk.talkType
    )
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    const { character, talkType, body, priority } = this.props.talk

    if (!this.props.editMode) {
      return (
        <div>
          <Balloon
            userFileName={character.fileName}
            type={talkType}
            talk={body}
          />
          <hr className={line} />
        </div>
      )
    }

    if (talkType == TALK_TYPE_IMAGE) {
      return (
        <div>
          <EditImage
            userFileName={this.props.talk.character.fileName}
            type={talkType}
            talk={body}
            priority={priority}
            onChangeImage={this.handleChangeFile.bind(this)}
            onDelete={this.deleteBody.bind(this)}
          />
          <hr className={line} />
        </div>
      )
    }

    return (
      <div>
        <EditText
          userFileName={character.fileName}
          type={talkType}
          talk={body}
          item={this.props.talk}
          priority={priority}
          onChangeText={this.setEditBody.bind(this)}
          onDelete={this.deleteBody.bind(this)}
        />
        <hr className={line} />
      </div>
    )
  }
}
