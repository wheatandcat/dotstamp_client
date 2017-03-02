import React, {PropTypes, Component} from "react"
import {PageHeader, Grid, Row, Col, ListGroup, ListGroupItem, Button, Glyphicon, Panel, ControlLabel, FormGroup} from "react-bootstrap"
import {Group} from "./../../../css/form.css"
import {Paragraph} from "./../../../css/common.css"
import Footer from "../../utils/parts/footer"
import Icon from "../../utils/parts/icon"
import {LinkContainer} from "react-router-bootstrap"

export default class Mypage extends Component {
    componentWillMount() {
        this.getUser()

    }
    /**
     * ユーザ取得する
     */
    getUser() {
        this.props.getUser()
    }
    /**
     * 画像指定を変更の監視する
     *
     * @param {object} e イベントオブジェクト
     */
    handleChangeFile(e) {
        let fileList = e.target.files
        this.uploadFile([fileList[0]])
    }
    /**
     * ファイルをアップロードする
     *
     * @param {array} fileList ファイルリスト
     */
    uploadFile(fileList) {
        let formData = new FormData()
        formData.append("file", fileList[0])

        this.props.upload(formData)
    }
    /**
     * ユーザ名を変更する
     */
    changeUserName() {
        this.props.changeUserName(this.refs.userName.value)
    }
    /**
     * 保存する
     */
    save() {
        let userName = this.refs.userName.value

        let action = {
            name: userName,
        }

        this.props.save(action)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                <div className="container">
                    <PageHeader>
                        <Glyphicon glyph="user"/>&nbsp;プロフィール設定
                    </PageHeader>
                </div>
                <Grid>
                    <Row className="show-grid">
                        <br/>
                        <Col xs={6} md={4}>
                            <ListGroup>
                                <ListGroupItem disabled>メニュー</ListGroupItem>
                                <LinkContainer to="/user/mypage">
                                    <ListGroupItem>
                                        <Glyphicon glyph="user"/>&nbsp;アカウント
                                    </ListGroupItem>
                                </LinkContainer>
                                <ListGroupItem>
                                    <Glyphicon glyph="lock"/>&nbsp;パスワード
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col xs={12} md={8}>
                            <Panel header="アカウント">
                                <ControlLabel>アイコン</ControlLabel>
                                    <div className={Paragraph}>
                                    <Grid>
                                        <Row>
                                            <Col sm={2} md={1}>
                                                <Icon imageId={this.props.userMypage.User.ProfileImageID} />
                                            </Col>
                                            <Col sm={20} md={10}>
                                                <Button bsStyle="link">
                                                    <ControlLabel htmlFor="image-file" bsClass={Group}>
                                                        <Glyphicon glyph="picture"/>&nbsp;画像を変更する
                                                    </ControlLabel>
                                                    <input
                                                        type="file"
                                                        id="image-file"
                                                        name="image-file"
                                                        className="hidden"
                                                        accept="image/gif,image/jpeg,image/png,image/jpg"
                                                        ref="file"
                                                        onChange={this.handleChangeFile.bind(this)}
                                                    />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <br/>
                                <ControlLabel>ユーザ名</ControlLabel>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={8}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            ref="userName"
                                            value={this.props.userMypage.User.Name}
                                            onChange={this.changeUserName.bind(this)}
                                        />
                                    </Col>
                                </FormGroup>
                                <br/>
                                <br/>
                                <br/>
                                <Button bsStyle="success" onClick={() => this.save()}>
                                    保存する
                                </Button>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        )
    }
}

Mypage.propTypes = {
    getUser: PropTypes.func,
    upload: PropTypes.func,
    changeUserName: PropTypes.func,
    userMypage: PropTypes.object,
    save: PropTypes.func,
}
