import React, {Component, PropTypes} from "react"

import { Glyphicon, Well, Button, ButtonGroup, ButtonToolbar, MenuItem, SplitButton, ControlLabel } from "react-bootstrap"

import { TALK_TYPE_TEXT, TALK_TYPE_IMAGE } from "../../actions/talk"
import Upload from "../../../utils/upload"
import Slider from "../../../utils/slider"

import { Edit, Group, GroupSlider } from "./../../../../css/form"

export default class Main extends Component {
    componentWillMount () {}
    /**
     * 本文を変更する
     *
     * @param  {object} event イベント
     */
    changeBody (event) {
        this.props.changeBody(event.target.value)
    }
    /**
     * 本文入力テキストエリアを取得する
     *
     * @return {object}  入力テキストhtml
     */
    getBodyTextArea () {
        let className = "form-control"

        if (this.props.contributionForm.edit) {
            className += " " + Edit
        }

        return (
            <textarea
                name="body"
                id="body"
                className={className}
                rows="4"
                placeholder="本文"
                ref="body"
                value={this.props.contributionForm.body}
                onChange={this.changeBody.bind(this)} />
        )
    }
    /**
     * テキスト本文を追加する
     */
    addBodyText () {
        let input = this.refs.body
        let body = input.value.trim()

        if (!body) {
            return
        }

        // 入力を削除する
        input.value = ""

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
     *
     * @param  {strig} body 本文
     * @param  {object} character キャラクター
     * @param  {number} directionType 方向タイプ
     * @param  {number} talkType 会話タイプ
     */
    addBody (body, character, directionType, talkType) {
        return this.props.addBody(body, character, directionType, talkType)
    }
    /**
     * 画像指定を変更の監視する
     *
     * @param  {object} e イベントオブジェクト
     */
    handleChangeFile (e) {
        let fileList = e.target.files
        this.uploadFile([fileList[0]])
    }
    /**
     * 画像ドロップの監視する
     *
     * @param  {array} fileList ファイルリスト
     */
    handleDropFile (fileList) {
        this.uploadFile(fileList)
    }
    /**
     * ファイルをアップロードする
     *
     * @param  {array} fileList ファイルリスト
     */
    uploadFile (fileList) {
        Upload.imageFileList(fileList, "contribution/upload/").then((response) => {
            this.addBody(
                response.body,
                this.props.contributionForm.character,
                this.props.contributionForm.directionType,
                TALK_TYPE_IMAGE
            )
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <div>
                <div className="btn-toolbar" role="toolbar">
                    <Well className={GroupSlider}>
                        <Slider list={this.props.characterList.list} handleClick={(id) => this.props.changeCharacter(id)} />
                    </Well>
                </div>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button bsSize="small" onClick={() => this.addBodyText()}>
                            書き込み
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>
                        <ControlLabel htmlFor="image-file" bsClass={Group}>
                            <Glyphicon  glyph="picture"/>
                        </ControlLabel>
                        <input
                            type="file"
                            id="image-file"
                            name="image-file"
                            className="hidden"
                            accept="image/gif,image/jpeg,image/png,image/jpg"
                            ref="file"
                            onChange={this.handleChangeFile.bind(this)} />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <SplitButton title="" dropup id="split-button-dropup" className="glyphicon glyphicon-picture">
                            <MenuItem eventKey="1">
                            <label htmlFor="image-file">
                                <Glyphicon  glyph="picture"/>小さい
                            </label>
                            </MenuItem>
                            <MenuItem eventKey="2">
                            <label htmlFor="image-file">
                                <Glyphicon  glyph="picture"/>標準
                            </label>
                            </MenuItem>
                            <MenuItem eventKey="3">
                            <label htmlFor="image-file">
                                <Glyphicon  glyph="picture"/>大きい
                            </label>
                            </MenuItem>
                        </SplitButton>
                    </ButtonGroup>
                </ButtonToolbar>
                {this.getBodyTextArea()}
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
}
