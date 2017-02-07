import React, {PropTypes, Component} from "react"
import {Grid, Row, Col, ListGroup, ListGroupItem, Button, Glyphicon, Panel, ControlLabel} from "react-bootstrap"
import { Group } from "./../../../../css/form"
import Upload from "../../../utils/upload"

export default class Mypage extends Component {
    componentWillMount() {

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
     * ファイルをアップロードする
     *
     * @param  {array} fileList ファイルリスト
     */
    uploadFile (fileList) {
        //Upload.imageFileList(fileList, "contribution/upload/").then((response) => {
        //})
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <Grid>
                <Row className="show-grid">
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
                          <h2>アイコン</h2>
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
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
