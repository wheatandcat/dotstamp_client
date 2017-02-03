import React, {PropTypes, Component} from "react"
import Dropzone from "react-dropzone"
import { ListGroup, ListGroupItem, ButtonToolbar, Button, Well } from "react-bootstrap"

import Http from "../../utils/http"
import Upload from "../../utils/upload"
import Slider from "../../utils/slider"
import Image from "../../utils/image"
import { IMAGE_DISPLAY_TYPE_CHARACTER_MAIN } from "../../utils/image"
import Footer from "../../utils/parts/footer"

export default class List extends Component {
    componentWillMount () {
        // TODO:既に持っていたら取らないようにする
        this.getList()

        console.log (this.props)
    }
    /**
     * リストを取得する
     */
    getList () {
        Http.postApi("characterImage/list/").then((response) => {
            this.props.getList(response.body)

            if (response.body.Image.length > 0) {
                this.props.setIcon(response.body.Image[0].ID)
            }
        }).catch((err) => {
            this.props.showError(err)
        })
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
        Upload.imageFileList(fileList, "characterImage/upload/").then((response) => {
            this.props.getList(response.body)

            if (response.body.Image.length > 0) {
                this.props.setIcon(response.body.Image[response.body.Image.length - 1].ID)
            }
        }).catch((err) => {
            this.props.showError(err)
        })
    }
    /**
     * キャラクターを削除する
     *
     * @param  {int} id キャラクターID
     */
    delteCharacter (id) {
        Http.postApi("characterImage/delete/" + id).then((response) => {
            this.props.getList(response.body)

            if (response.body.Image.length > 0) {
                let select = this.props.characterList.icon.select - 1
                if (select < 0) {
                    select = 0
                }

                this.props.setIcon(response.body.Image[select].ID)
            }
        }).catch((err) => {
            this.props.showError(err)
        })
    }
    /**
     * キャラクターを選択する
     *
     * @param  {object} icon アイコン
     */
    selectmCharacter (icon) {
        this.props.setIcon(icon.ID)
    }
    getIconMain () {
        if (this.props.characterList.icon.fileName == "") {
            return ""
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
    getIconMenu () {
        return (
            <div className="center-block">
                <Well bsStyle="info">
                    <ButtonToolbar bsStyle="center-block">
                        <Button bsStyle="danger" onClick={() => this.delteCharacter(this.props.characterList.icon.id)}>
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
                <ListGroup>
                    <ListGroupItem>
                        <h1>キャラクター</h1>
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
                                    initialSlide={this.props.characterList.icon.select} />
                            </Well>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Dropzone accept="image/gif,image/jpeg,image/png,image/jpg" onDrop={this.handleDropFile.bind(this)}>
                            <div>
                                ファイルを指定またはドラッグ&ドロップ
                                <p>
                                    形式: gif/png/jpeg/jpg
                                </p>
                            </div>
                        </Dropzone>
                    </ListGroupItem>
                </ListGroup>
                <Footer />
            </div>
        )
    }
}

List.propTypes = {
    characterList: PropTypes.object,
    setIcon: PropTypes.func,
    getList: PropTypes.func,
    showError: PropTypes.func,
}
