import React, {Component, PropTypes} from "react"
import {Well, ControlLabel, Grid, Row, Col, Glyphicon, ButtonToolbar, Button} from "react-bootstrap"
import Image from "../../../../utils/image"
import {IMAGE_DISPLAY_TYPE_TALK_IMAGE, IMAGE_DISPLAY_TYPE_CHARACTER_TALK} from "../../../../utils/image"
import {TALK_TYPE_IMAGE} from "../../actions/talk"
import {UPLOAD_FILE_SIZE_MAX} from "../../../../constants/common"
import {Balloon, BalloonTalk} from "./../../../../../css/talk.css"
import {line} from "./../../../../../css/common.css"
import {Group} from "./../../../../../css/form.css"

export default class Talk extends Component {
    /**
     * 方向タイプのhtmlを取得する
     *
     * @param  {object} talk 会話
     * @return {object} 吹き出しhtml
     */
    getDirectionTypeHtml(talk) {
        let fileName = talk.Character.FileName

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={2} md={2}>
                            <Image fileName={fileName} imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER_TALK}/>
                        </Col>
                        <Col sm={20} md={8} className={BalloonTalk}>
                            {this.getBody(talk)}
                        </Col>
                        <Col sm={2} md={2} className={BalloonTalk}>
                            {this.getBodyMenu(talk)}
                        </Col>
                    </Row>
                </Grid>
                <hr className={line}/>
            </div>
        )
    }
    /**
     * 本文を取得する
     *
     * @param  {object} talk 会話
     * @return {object} 本文html
     */
    getBody(talk) {
        return (
            <div className={Balloon}>
                {this.getBodyDetail(talk)}
            </div>
        )
    }
    /**
     * 本文詳細を取得する
     *
     * @param  {object} talk 会話
     * @return {object} 本文html
     */
    getBodyDetail(talk) {
        let html
        if (talk.TalkType == TALK_TYPE_IMAGE) {
            html = <Image fileName={talk.Body} imageDisplayType={IMAGE_DISPLAY_TYPE_TALK_IMAGE}/>
        } else {
            html = this.changeBr(talk.Body)
        }

        return html
    }
    /**
     * 画像指定を変更の監視する
     *
     * @param  {object} e イベントオブジェクト
     */
    handleChangeFile (e) {
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
    uploadFile (fileList) {
        let formData = new FormData()
        formData.append("file", fileList[0])

        let contributionId = this.props.contributionEdit.id
        if (contributionId == null) {
            contributionId = 0
        }

        this.props.upload("?userContributionId="+contributionId, formData, this.props.talk)
    }
    /**
     * 本文のメニュー取得する
     *
     * @param  {object} talk 会話
     * @return {object} メニューhtml
     */
    getBodyMenu(talk) {
        if (!this.props.editMode) {
            return
        }

        let edit = ""

        if (talk.TalkType == TALK_TYPE_IMAGE) {
            edit = (
                <Button>
                    <ControlLabel htmlFor={"image-file-edit-" + talk.Priority} bsClass={Group}>
                        <Glyphicon  glyph="picture"/>
                    </ControlLabel>
                    <input
                        type="file"
                        id={"image-file-edit-" + talk.Priority}
                        name="image-file-edit"
                        className="hidden"
                        accept="image/jpeg,image/png,image/jpg"
                        onChange={this.handleChangeFile.bind(this)} />
                </Button>
            )
        } else {
            edit = (
                <Button onClick={() => this.setEditBody(talk)}>
                    <Glyphicon glyph="edit"/>
                </Button>
            )
        }

        return (
            <Well>
            <ButtonToolbar>
                {edit}
                <Button onClick={() => this.deleteBody(talk.Priority)}>
                    <Glyphicon glyph="trash"/>
                </Button>
            </ButtonToolbar>
        </Well>
        )
    }
    /**
     * 改行を変換する
     *
     * @param  {string} text テキスト
     * @return {string} 改行変換後テキスト
     */
    changeBr(text) {
        let regex = /(\n)/g
        return text.split(regex).map(function(line, i) {
            if (line.match(regex)) {
                return <br key={i}/>
            } else {
                return line
            }
        })
    }
    /**
     * 本文を削除する
     *
     * @param  {number} priority 優先度
     */
    deleteBody(priority) {
        // 削除確認のポップアップいれる
        this.props.deleteBody(priority)
    }
    /**
     * 本文を編集設定にする
     *
     * @param  {object} talk 会話
     */
    setEditBody(talk) {
        this.props.setEditBody(
            talk.Priority,
            talk.Body,
            talk.Character,
            talk.DirectionType,
            talk.TalkType
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                {this.getDirectionTypeHtml(this.props.talk)}
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
