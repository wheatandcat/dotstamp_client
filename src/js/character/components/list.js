import React, {PropTypes, Component} from "react"
import Dropzone from "react-dropzone"
import {ListGroup, ListGroupItem, ButtonToolbar, Button, Well, Alert} from "react-bootstrap"
import Slider from "../../utils/slider"
import Image from "../../utils/image"
import AlertMessage from "../../error/containers/alertMessage"
import {IMAGE_DISPLAY_TYPE_CHARACTER_MAIN} from "../../utils/image"
import {UPLOAD_FILE_SIZE_MAX} from "../../constants/common"
import Footer from "../../utils/parts/footer"
import {ImageUpload} from "../../../css/character.css"


export default class List extends Component {
    componentWillMount () {
        this.props.alertMessageInit()
        this.props.getList()
    }
    /**
     * 画像ドロップの監視
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

        if (this.props.characterList.icon.fileName == "") {
            return (
                <Alert bsStyle="warning">
                    <strong>警告！</strong> 設定している画像がありません。
                </Alert>
            )
        }

        return (
            <div>
                <Image fileName={this.props.characterList.icon.fileName} imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER_MAIN} />
                <p />
                {this.getIconMenu()}
                <p />
            </div>
        )
    }
    /**
     * アイコンメニューを取得する
     */
    getIconMenu () {
        return (
            <div className="center-block">
                <Well bsStyle="info">
                    <ButtonToolbar bsStyle="center-block">
                        <Button
                            bsStyle="danger"
                            onClick={() => this.props.delete(this.props.characterList.icon.id)}
                        >
                            削除
                        </Button>
                    </ButtonToolbar>
                </Well>
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
                    <ListGroup>
                        <ListGroupItem>
                            <h1>キャラ設定</h1>
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
                                        initialSlide={this.props.characterList.icon.select}
                                        maxSize={600000}
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
                                    ファイルを指定またはドラッグ&ドロップ
                                    <p>
                                        形式: png/jpeg/jpg
                                    </p>
                                    <p>
                                        最大600kB
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
    alertMessage: PropTypes.func,
    alertMessageInit: PropTypes.func,
}
