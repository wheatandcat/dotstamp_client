import PropTypes from "prop-types"
import React, { Component } from "react"
import Dropzone from "react-dropzone"
import {
  PageHeader,
  Glyphicon,
  ListGroup,
  ListGroupItem,
  Well
} from "react-bootstrap"
import { Collection } from "../../../component/slick/"
import AlertMessage from "../../error/containers/alertMessage"
import {
  UPLOAD_FILE_SIZE_MAX,
  VOICE_TYPE,
  VOICE_TYPE_MAP
} from "../../../constants/common"
import Footer from "../../../utils/parts/footer"
import { ImageUpload } from "../../../../css/character.css"
import { NoIcon, Menu } from "../../../component/character/"

export default class List extends Component {
  componentWillMount() {
    this.props.init()

    this.props.alertMessageInit()
    this.props.getList()
  }
  /**
   * 画像ドロップの監視する
   *
   * @param  {array} fileList ファイルリスト
   */
  handleDropFile(fileList) {
    this.uploadFile(fileList)
  }
  /**
   * ファイルをアップロードする
   *
   * @param  {array} fileList ファイルリスト
   */
  uploadFile(fileList) {
    const formData = new FormData()

    formData.append("file", fileList[0])

    if (fileList[0].size > UPLOAD_FILE_SIZE_MAX) {
      this.props.alertMessage("アップロード失敗！アップロードできる最大容量を超えています！！")
      return
    }

    this.props.upload(formData)
  }
  /**
   * キャラクターを選択する
   *
   * @param  {object} icon アイコン
   */
  selectmCharacter(icon) {
    this.props.setIcon(icon.ID)
  }
  /**
   * 保存する
   */
  save() {
    this.props.save({
      id: this.props.characterList.icon.id,
      voiceType: this.props.characterList.VoiceType[
        this.props.characterList.icon.id
      ]
    })
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    if (!this.props.characterList.load) {
      return <div />
    }

    const voiceType = this.props.characterList.VoiceType[
      this.props.characterList.icon.id
    ]

    return (
      <div>
        <div className="container">
          <PageHeader>
            <Glyphicon glyph="picture" />&nbsp;アイコン設定
          </PageHeader>
          <ListGroup>
            <ListGroupItem>
              <AlertMessage />
              <div>
                {(() => {
                  if (this.props.characterList.DefaultIcon) {
                    return <NoIcon />
                  }
                  return (
                    <Menu
                      fileName={this.props.characterList.icon.fileName}
                      IconId={this.props.characterList.icon.id}
                      voiceList={VOICE_TYPE}
                      voiceType={voiceType}
                      voiceLabel={VOICE_TYPE_MAP[voiceType]}
                      onSave={this.save.bind(this)}
                      onDelete={this.props.delete.bind(this)}
                      onVoiceType={this.props.setVoiceType.bind(this)}
                    />
                  )
                })()}
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <div>
                <Well bsStyle="info">
                  <Collection
                    list={this.props.characterList.list}
                    onClick={id => this.selectmCharacter(id)}
                  />
                </Well>
              </div>
            </ListGroupItem>
            <ListGroupItem>
              <Dropzone
                accept="image/jpeg,image/png,image/jpg"
                onDrop={this.handleDropFile.bind(this)}
                className={ImageUpload}
              >
                <div>
                  クリックして画像ファイルを指定するか、または画像ファイルをドラッグ&ドロップ
                  <br />
                  <br />
                  <p>
                    形式: png/jpeg/jpg
                  </p>
                  <p>
                    最大600kBまで
                  </p>
                </div>
              </Dropzone>
            </ListGroupItem>
          </ListGroup>
        </div>
        <Footer />
      </div>
    )
  }
}

List.propTypes = {
  characterList: PropTypes.object,
  setIcon: PropTypes.func,
  getList: PropTypes.func,
  delete: PropTypes.func,
  upload: PropTypes.func,
  save: PropTypes.func,
  init: PropTypes.func,
  alertMessage: PropTypes.func,
  alertMessageInit: PropTypes.func,
  setVoiceType: PropTypes.func
}
