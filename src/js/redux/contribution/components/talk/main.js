import PropTypes from "prop-types"
import React, {Component} from "react"
import {TALK_TYPE_IMAGE} from "../../actions/talk"
import {UPLOAD_FILE_SIZE_MAX} from "../../../../constants/common"
import {line} from "./../../../../../css/common.css"
import {Balloon, EditImage, EditText} from "./../../../../component/contribution/balloon/"


export default class Talk extends Component {
  /**
   * 画像指定を変更の監視する
   *
   * @param  {object} e イベントオブジェクト
   */
  handleChangeFile(e) {
    let fileList = e.target.files

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
   * ファイルをアップロードする
   *
   * @param  {array} fileList ファイルリスト
   */
  uploadFile(fileList) {
    let formData = new FormData()
    formData.append("file", fileList[0])

    let contributionId = this.props.contributionEdit.id
    if (contributionId == null) {
      contributionId = 0
    }

    this.props.upload("?userContributionId=" + contributionId, formData, this.props.talk)
  }
  /**
   * 本文を削除する
   *
   * @param  {number} priority 優先度
   */
  deleteBody(priority) {
    this.props.deleteBody(priority)
  }
  /**
   * 本文を編集設定にする
   *
   * @param  {object} talk 会話
   */
  setEditBody(talk) {
    this.props.setEditBody(talk.Priority, talk.Body, talk.Character, talk.DirectionType, talk.TalkType)
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    //         {this.getDirectionTypeHtml(this.props.talk)}
    if (!this.props.editMode) {
      return (
        <div>
          <Balloon
            UserFileName={this.props.talk.Character.FileName}
            Type={this.props.talk.TalkType}
            Talk={this.props.talk.Body}
          />
          <hr className={line}/>
        </div>
      )
    }

    if (this.props.talk.TalkType == TALK_TYPE_IMAGE) {
      return (
        <div>
          <EditImage
            UserFileName={this.props.talk.Character.FileName}
            Type={this.props.talk.TalkType}
            Talk={this.props.talk.Body}
            Priority={this.props.talk.Priority}
            onChangeImage={this.handleChangeFile.bind(this)}
            onDelete={this.deleteBody.bind(this)}
          />
          <hr className={line}/>
        </div>
      )
    }

    return (
      <div>
        <EditText
          UserFileName={this.props.talk.Character.FileName}
          Type={this.props.talk.TalkType}
          Talk={this.props.talk.Body}
          Item={this.props.talk}
          Priority={this.props.talk.Priority}
          onChangeText={this.setEditBody.bind(this)}
          onDelete={this.deleteBody.bind(this)}
        />
        <hr className={line}/>
      </div>
    )

  }
}

Talk.propTypes = {
  talk: PropTypes.object,
  editMode: PropTypes.bool,
  deleteBody: PropTypes.func,
  setEditBody: PropTypes.func,
  contributionEdit: PropTypes.object,
  alertMessage: PropTypes.func,
  upload: PropTypes.func
}
