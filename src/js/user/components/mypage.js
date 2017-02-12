import React, {PropTypes, Component} from "react"
import {Grid, Row, Col, ListGroup, ListGroupItem, Button, Glyphicon, Panel, ControlLabel, FormGroup} from "react-bootstrap"
import {Group} from "./../../../css/form.css"
import {Paragraph} from "./../../../css/common.css"
import Footer from "../../utils/parts/footer"

export default class Mypage extends Component {
    componentWillMount() {
        this.getUser()

    }
    getUser() {
        this.props.getUser()
    }
    /**
     * 画像指定を変更の監視する
     *
     * @param  {object} e イベントオブジェクト
     */
    handleChangeFile(e) {
        let fileList = e.target.files
        this.uploadFile([fileList[0]])
    }
    /**
     * ファイルをアップロードする
     *
     * @param  {array} fileList ファイルリスト
     */
    uploadFile(fileList) {

    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <br/>
                        <Col xs={6} md={4}>
                            <ListGroup>
                                <ListGroupItem bsStyle="info">メニュー</ListGroupItem>
                                <ListGroupItem>
                                    <Glyphicon glyph="user"/>&nbsp;アカウント
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Glyphicon glyph="lock"/>&nbsp;パスワード
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col xs={12} md={8}>
                            <Panel header="アカウント">
                                <p>アイコン</p>
                                <div className={Paragraph}>
                                    <Button>
                                        <ControlLabel htmlFor="image-file" bsClass={Group}>
                                            <Glyphicon glyph="picture"/>
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
                                    <ControlLabel htmlFor="image-file" bsClass={Group}>
                                        <Button bsStyle="link">画像をアップロード</Button>
                                    </ControlLabel>
                                </div>
                                <br/>
                                <p>ユーザ名</p>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={8}>
                                        <input type="text" className="form-control" ref="userName"/>
                                    </Col>
                                </FormGroup>
                                <br/>
                                <br/>
                                <br/>
                                    <Button bsStyle="success">
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
}
