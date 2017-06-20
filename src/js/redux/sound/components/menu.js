import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Table,
  Alert,
  Modal,
  ButtonToolbar,
  Well,
  FormGroup,
  Checkbox,
  Glyphicon,
  Button
} from "react-bootstrap"
import Sound from "../../../utils/sound"
import {
  STATUS_PUBLIC,
  STATUS_UPLOADING,
  STATUS_RUNNING
} from "../../../constants/contribution"
import { NoSpace } from "../../../../css/common.css"
import { getTopUrl } from "../../../utils/common"
import { Form } from "../../../component/youtube/"
import { Link } from "react-router-dom"

let self
window.document.getElementById("uploadToken").onchange = function() {
  if (self == undefined) {
    return false
  }

  self.props.message("認証成功。YouTubeのアップロード開始します", "success")
  self.uploadYoutube()
}

export default class Menu extends Component {
  componentWillMount() {
    self = this
  }
  /**
     * 反映する
     */
  reflect() {
    this.props.reflect({
      userContributionId: this.props.userContributionId,
      overwrite: this.overwrite.checked
    })

    this.props.message("記事の内容を反映中です", "success")
  }
  /**
     * 作成する
     */
  make() {
    this.props.makingMovie()
    this.props.close()
    this.props.make({ userContributionId: this.props.userContributionId })
  }
  /**
     * [getReMakeConfirm description]
     * @return [type] [description]
     */
  getReMakeConfirm() {
    return (
      <Modal
        show={this.props.soundMenu.Open}
        onHide={this.props.close}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>動画を作り直す</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert bsStyle="danger">
            <strong>注意！！</strong><br />
            動画作成には、10分以上かかる場合があります
          </Alert>
          <div>
            動画ファイルを作り直しますか？
          </div>
          <br />
          <ButtonToolbar>
            <Button onClick={this.props.close}>キャンセル</Button>
            &nbsp; &nbsp;
            <Button bsStyle="warning" onClick={() => this.make()}>作り直す</Button>
          </ButtonToolbar>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    )
  }
  /**
     * 動画作成を取得する
     *
     * @return {object} html
     */
  getMakeMovie() {
    if (this.props.soundShow.MovieStatus == STATUS_RUNNING) {
      return (
        <Button bsStyle="warning" active>
          動画を作成中...
        </Button>
      )
    }

    if (this.props.soundShow.MovieStatus == STATUS_UPLOADING) {
      return (
        <Button bsStyle="warning" disabled>
          動画を作成する
        </Button>
      )
    }

    if (!this.props.soundShow.MakeMovie) {
      return (
        <Button bsStyle="warning" onClick={() => this.make()}>
          動画を作成する
        </Button>
      )
    }

    return (
      <Button bsStyle="warning" onClick={this.props.open}>
        動画を作り直す
      </Button>
    )
  }
  /**
     * アップロードする
     */
  upload() {
    this.props.uploading()
    this.props.closeUpload()

    window.open(
      `${getTopUrl()}api/movie/connect/${this.props.userContributionId}`,
      "child",
      "width=500,height=250"
    )
  }

  /**
     * getUploadConfirm アップロードを確認を取得する
     */
  getUploadConfirm() {
    return (
      <Modal
        show={this.props.soundMenu.OpenUpload}
        onHide={this.props.closeUpload}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>YouTubeに動画をアップロード</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert bsStyle="danger">
            <strong>注意！！この操作を行う前に以下をご確認下さい。</strong><br />
            ・アップロードは、10分以上かかる可能性があります。<br />
            ・Googleのアカウントが必要です。<br />
            ・事前にYouTubeのマイチャンネルの作成が必要です。<br />
            ・アップロードした動画は自身のマイチャンネルに追加されます<br />
            ・再生時間が短すぎる動画はアップロードできないみたいなのでご注意下さい<br />
            ・Youtubeに15分以上の動画をアップロードするにはアカウント認証が必要です。詳細は、
            <a
              href="https://support.google.com/youtube/answer/71673?hl=ja"
              target="_blank"
              rel="noreferrer noopener"
            >
              こちら
            </a>
          </Alert>
          <div>
            YouTubeに動画をアップロードしますか？
          </div>
          <br />
          <ButtonToolbar>
            <Button onClick={this.props.closeUpload}>キャンセル</Button>
            &nbsp; &nbsp;
            <Button bsStyle="danger" onClick={this.upload.bind(this)}>
              YouTubeにアップロードする
            </Button>
          </ButtonToolbar>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    )
  }
  /**
     * YouTubeにアップロードを取得する
     *
     * @return {object} html
     */
  getUploadYoutube() {
    if (
      !this.props.soundShow.MakeMovie ||
      this.props.soundShow.MovieStatus == STATUS_RUNNING
    ) {
      return (
        <Button bsStyle="danger" disabled>
          YouTubeに動画をアップロードする
        </Button>
      )
    }

    if (this.props.soundShow.MovieStatus == STATUS_UPLOADING) {
      return (
        <Button bsStyle="danger" active>
          YouTubeに動画をアップロード中...
        </Button>
      )
    }

    if (this.props.soundShow.MovieStatus == STATUS_PUBLIC) {
      return (
        <Button bsStyle="danger" disabled>
          YouTubeに動画をアップロード済み
        </Button>
      )
    }

    return (
      <Button bsStyle="danger" onClick={this.props.openUpload}>
        YouTubeに動画をアップロードする
      </Button>
    )
  }
  /**
     * YouTubeにアップロードする
     */
  uploadYoutube() {
    this.props.upload({ userContributionId: this.props.userContributionId })
  }
  /**
     * 情報を取得する
     */
  getInformation() {
    let downloadMp3 = (
      <span>
        ファイル無し &nbsp;(
        <Button bsStyle="link" bsSize="small" onClick={() => this.make()}>
          作成する
        </Button>
        )
      </span>
    )
    let downloadMp4 = (
      <span>
        ファイル無し &nbsp;(
        <Button bsStyle="link" bsSize="small" onClick={() => this.make()}>
          作成する
        </Button>
        )
      </span>
    )

    if (this.props.soundMenu.Making) {
      downloadMp3 = <span>作成中...</span>
      downloadMp4 = <span>作成中...</span>
    }

    if (this.props.soundShow.MakeMovie) {
      downloadMp3 = (
        <Button
          bsStyle="success"
          bsSize="small"
          href={`${getTopUrl()}static/files/sound/${this.props
            .userContributionId}.mp3`}
          target="_blank"
        >
          ダウンロード
        </Button>
      )
      downloadMp4 = (
        <Button
          bsStyle="success"
          bsSize="small"
          href={`${getTopUrl()}static/files/movie/${this.props
            .userContributionId}.mp4`}
          target="_blank"
        >
          ダウンロード
        </Button>
      )
    }

    let upload = "アップロードしていません"

    if (this.props.soundShow.MovieID != "") {
      upload = "アップロード済み"
    }

    let message = ""
    if (this.props.soundMenu.Information.Message != "") {
      message = (
        <Alert bsStyle="success">
          <strong>アップロード完了しました！</strong><br />
          <Button
            bsStyle="link"
            href="https://www.youtube.com/my_videos"
            target="_blank"
          >
            YouTubeマイチャンネル
          </Button>
        </Alert>
      )
    }

    return (
      <Modal
        show={this.props.soundMenu.Information.Show}
        onHide={this.props.closeInformation}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Glyphicon glyph="info-sign" />&nbsp;詳細情報
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
          <Table responsive>
            <thead>
              <tr>
                <th>音声</th>
                <th>動画</th>
                <th>YouTube</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{downloadMp3}</td>
                <td>{downloadMp4}</td>
                <td>{upload}</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <strong>動画情報</strong>
          </div>
          <Form videoId={this.props.soundShow.MovieID} screen />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeInformation}>
            閉じる
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  /**
     * 描画する
     *
     * @return {object} html
     */
  render() {
    let download = ""
    if (this.props.soundShow.MakeMovie) {
      download = (
        <div className="pull-right">
          <Sound
            url={`${getTopUrl()}static/files/sound/${this.props
              .userContributionId}.mp3?=${+new Date().getTime()}`}
          />
        </div>
      )
    }

    return (
      <div>
        {this.getInformation()}
        {this.getUploadConfirm()}
        {this.getReMakeConfirm()}
        <div>
          <Well className={NoSpace}>
            <br />
            <FormGroup>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <Button onClick={() => this.reflect()}>
                <Glyphicon glyph="refresh" />&nbsp;記事の内容を反映される
              </Button>
              &nbsp; &nbsp;
              <Checkbox
                inputRef={ref => {
                  this.overwrite = ref
                }}
                inline
              >
                既存のデータも上書して反映する
              </Checkbox>
            </FormGroup>
          </Well>
        </div>
        <div>
          <br />
          <ButtonToolbar>
            {download}
            &nbsp; &nbsp; {this.getMakeMovie()}
            &nbsp; &nbsp; {this.getUploadYoutube()}
            &nbsp; &nbsp;
            <Button onClick={() => this.props.openInformation()}>
              <Glyphicon glyph="info-sign" />&nbsp;詳細
            </Button>
          </ButtonToolbar>
        </div>
        <br />
        <div className="pull-right">
          <Link to={`/contribution/edit/${this.props.userContributionId}`}>
            投稿編集に戻る
          </Link>
          <br />
        </div>
      </div>
    )
  }
}

Menu.propTypes = {
  soundShow: PropTypes.object,
  soundMenu: PropTypes.object,
  userContributionId: PropTypes.string,
  make: PropTypes.func,
  makingMovie: PropTypes.func,
  message: PropTypes.func,
  reflect: PropTypes.func,
  open: PropTypes.func,
  close: PropTypes.func,
  uploading: PropTypes.func,
  openUpload: PropTypes.func,
  closeUpload: PropTypes.func,
  upload: PropTypes.func,
  openInformation: PropTypes.func,
  closeInformation: PropTypes.func
}
