import React, {PropTypes, Component} from "react"
import Dropzone from "react-dropzone"
import {PageHeader, Panel, ButtonGroup, Glyphicon, Dropdown, MenuItem, ListGroup, ListGroupItem, Button, Well, Alert} from "react-bootstrap"
import Slider from "../../utils/slider"
import Image from "../../utils/image"
import AlertMessage from "../../error/containers/alertMessage"
import {IMAGE_DISPLAY_TYPE_CHARACTER_MAIN} from "../../utils/image"
import {UPLOAD_FILE_SIZE_MAX, VOICE_TYPE, VOICE_TYPE_MAP} from "../../constants/common"
import Footer from "../../utils/parts/footer"
import {ImageUpload} from "../../../css/character.css"


export default class List extends Component {
    componentWillMount () {
        this.props.init()

        this.props.alertMessageInit()
        this.props.getList()
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
        let formData = new FormData()

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
    selectmCharacter (icon) {
        this.props.setIcon(icon.ID)
    }
    /**
     * アイコンのメイン表示を取得する
     */
    getIconMain () {
        if (!this.props.characterList.load) {
            return ""
        }

        if (this.props.characterList.DefaultIcon) {
            return (
                <Alert bsStyle="warning">
                    <strong>警告！</strong> 設定しているアイコン画像がありません。
                    <br />
                    <br />
                    アイコン画像の設定が無い場合は、デフォルトアイコンが適用されます。
                </Alert>
            )
        }

        return (
            <div>
                <Image fileName={this.props.characterList.icon.fileName} imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER_MAIN} >
                    <div className="center-block">
                        <Button
                            bsStyle="danger"
                            onClick={() => this.props.delete(this.props.characterList.icon.id)}
                        >
                            <Glyphicon glyph="trash"/>&nbsp;アイコンを削除する
                        </Button>
                    </div>
                </Image>

                <p />
                {this.getIconMenu()}
                <p />
            </div>
        )
    }
    /**
     * 保存する
     */
    save() {
        this.props.save({
            id: this.props.characterList.icon.id,
            voiceType: this.props.characterList.VoiceType[this.props.characterList.icon.id],
        })
    }
    /**
     * アイコンメニューを取得する
     */
    getIconMenu () {
        let voiceType = ""

        let type = this.props.characterList.VoiceType[this.props.characterList.icon.id]
        if (type != undefined) {
            voiceType = VOICE_TYPE_MAP[type]
        }

        return (
            <div className="center-block">
                <Panel header="アイコンのデフォルト音声" bsStyle="success">
                    <ButtonGroup>
                        <Dropdown id="voiceType" onSelect={this.props.setVoiceType.bind(this)}>
                            <Dropdown.Toggle >
                                <Glyphicon glyph="volume-up"/>&nbsp;{voiceType}&nbsp;&nbsp;
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {VOICE_TYPE.map((item) => {
                                    let option = {}
                                    if (type == item.type) {
                                        option = {
                                            active: true,
                                        }
                                    }

                                    return (
                                        <MenuItem key={item.type} eventKey={item.type} {...option}>
                                            &nbsp;&nbsp;&nbsp;{item.name}&nbsp;&nbsp;
                                        </MenuItem>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button bsStyle="success" onClick={() => this.save()}>
                            設定する
                        </Button>
                    </ButtonGroup>
                </Panel>
            </div>
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <div>
                <div className="container">
                    <PageHeader>
                        <Glyphicon glyph="picture"/>&nbsp;アイコン設定
                    </PageHeader>
                    <ListGroup>
                        <ListGroupItem>
                            <AlertMessage/>
                            <div>
                                {this.getIconMain()}
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div>
                                <Well bsStyle="info">
                                    <Slider
                                        list={this.props.characterList.list}
                                        handleClick={(id) => this.selectmCharacter(id)}
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
    setVoiceType: PropTypes.func,
}
