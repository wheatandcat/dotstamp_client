/*global BASE_URL*/
import React, {PropTypes, Component} from "react"
import {Alert, Modal, ButtonToolbar, Well, FormGroup, Checkbox, Glyphicon, Button} from "react-bootstrap"
import Sound from "../../utils/sound"
import {STATUS_PUBLIC, STATUS_RUNNING} from "../../constants/contribution"
import {NoSpace} from "../../../css/common.css"

import {getTopUrl} from "../../utils/common"

import {Link} from "react-router"

export default class Menu extends Component {
    /**
     * 反映する
     */
    reflect() {
        this.props.reflect({
            userContributionId: this.props.userContributionId,
            overwrite: this.overwrite.checked,
        })

        this.props.message("記事の内容を反映中です", "success")
    }
    /**
     * 保存する
     *
     * @param  {number} soundStatus 音声状態
     */
    save(soundStatus) {
        this.props.save({
            userContributionId: this.props.userContributionId,
            soundStatus: soundStatus,
        })

        this.props.message("設定を保存しました", "success")
    }
    /**
     * [getReMakeConfirm description]
     * @return [type] [description]
     */
    getReMakeConfirm() {
        return (
            <Modal show={this.props.soundMenu.Open} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>動画を作り直す</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert bsStyle="danger">
                        <strong>注意！！</strong><br />
                        動画を作り直した場合、記事と動画のリンクが外れます
                    </Alert>
                    <div>
                        動画ファイルを作り直しますか？
                    </div>
                    <br />
                     <ButtonToolbar>
                        <Button onClick={this.props.close}>キャンセル</Button>
                        &nbsp;
                        &nbsp;
                        <Button bsStyle="warning" onClick={() => this.makeMovie()}>作り直す</Button>
                    </ButtonToolbar>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        )
    }
    /**
     * 動画を作成する
     */
    makeMovie() {
        this.props.makingMovie()

        this.props.makeMovie({
            userContributionId: this.props.userContributionId,
        })
    }
    /**
     * 動画作成を取得する
     *
     * @return {object} html
     */
    getMakeMovie() {
        if (!this.props.soundShow.MakeSound) {
            return ""
        }
        if (this.props.soundMenu.Making) {
            return (
                 <Button bsStyle="warning" active>
                     動画を作成中...
                 </Button>
            )
        }


        if (!this.props.soundShow.MakeMovie) {
            return (
                 <Button bsStyle="warning" onClick={() => this.makeMovie()}>
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
    upload() {
        this.props.uploading()
        this.props.closeUpload()
    }
    /**
     * [getReMakeConfirm description]
     * @return [type] [description]
     */
    getUploadConfirm() {
        return (
            <Modal show={this.props.soundMenu.OpenUpload} onHide={this.props.closeUpload} bsSize="large">
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
                        ・Youtubeに15分以上の動画をアップロードするにはアカウント認証が必要です。詳細は、<a href="https://support.google.com/youtube/answer/71673?hl=ja" target="_blank">こちら</a>
                    </Alert>
                    <div>
                        YouTubeに動画をアップロードしますか？
                    </div>
                    <br />
                     <ButtonToolbar>
                        <Button onClick={this.props.closeUpload}>キャンセル</Button>
                        &nbsp;
                        &nbsp;
                        <Button bsStyle="danger" href={getTopUrl() + "movie/connect/" + this.props.userContributionId}  onClick={this.upload.bind(this)} target="_brank">YouTubeにアップロードする</Button>
                    </ButtonToolbar>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        )
    }
    /**
     * YouTubeにアップロードを取得する
     *
     * @return {object} html
     */
    getUploadYoutube() {
        if (!this.props.soundShow.MakeMovie) {
            return ""
        }

        if (this.props.soundShow.MovieStatus == STATUS_RUNNING) {
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
     * 作成する
     */
    make() {
        this.props.onLoading()
        this.props.make({
            userContributionId: this.props.userContributionId
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let make = ""
        if (!this.props.soundShow.Loading) {
            make = (
                <Button bsStyle="success" onClick={() => this.make()}>
                    読み上げファイルを作成する
                </Button>
            )
        } else {
            make = (
                <Button bsStyle="success" active>
                    読み上げファイル作成中です・・・・
                </Button>
            )
        }
        let download = ""
        if (this.props.soundShow.MakeSound) {
            download = (
                <div className="pull-right">
                    <Sound
                        url={BASE_URL + "/static/files/sound/" + this.props.userContributionId + ".mp3?=" + + (new Date().getTime())}
                    />
                </div>
            )
        }

        return (
            <div>
                {this.getUploadConfirm()}
                {this.getReMakeConfirm()}
                <div>
                    <Well className={NoSpace}>
                        <br />
                        <FormGroup>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Button onClick={() => this.reflect()}>
                                <Glyphicon glyph="refresh"/>&nbsp;記事の内容を反映される
                            </Button>
                            &nbsp;
                            &nbsp;
                            <Checkbox inputRef={ref => { this.overwrite = ref }} inline>既存のデータも上書して反映する</Checkbox>
                        </FormGroup>
                    </Well>
                </div>
                <div>
                    <br />
                    <ButtonToolbar>
                        {make}
                        &nbsp;
                        &nbsp;
                        {download}
                        &nbsp;
                        &nbsp;
                        {this.getMakeMovie()}
                        &nbsp;
                        &nbsp;
                        {this.getUploadYoutube()}
                    </ButtonToolbar>
                </div>
                <br />
                <div className="pull-right">
                    <Link to={"/contribution/edit/" + this.props.userContributionId}>
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
    userContributionId:PropTypes.string,
    makeMovie:  PropTypes.func,
    message: PropTypes.func,
    save: PropTypes.func,
    reflect: PropTypes.func,
    open: PropTypes.func,
    close: PropTypes.func,
    makingMovie: PropTypes.func,
    uploading: PropTypes.func,
    openUpload: PropTypes.func,
    closeUpload: PropTypes.func,
    make: PropTypes.func,
    onLoading: PropTypes.func,
}
