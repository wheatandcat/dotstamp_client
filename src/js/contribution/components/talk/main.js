import React, {Component, PropTypes} from "react"

import {Grid, Row, Col, Panel, Glyphicon, ButtonToolbar, Button} from "react-bootstrap"

import Image from "../../../utils/image"
import {IMAGE_DISPLAY_TYPE_TALK_IMAGE, IMAGE_DISPLAY_TYPE_CHARACTER_TALK} from "../../../utils/image"
import {TALK_TYPE_IMAGE} from "../../actions/talk"

import {Balloon, BalloonTalk} from "./../../../../css/talk.css"
import {line} from "./../../../../css/common.css"
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
                        <Col sm={4} md={2}>
                            <Image fileName={fileName} imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER_TALK}/>
                        </Col>
                        <Col sm={8} md={3} className={BalloonTalk}>
                            {this.getBody(talk)}
                        </Col>
                        <Col sm={4} md={2} className={BalloonTalk}>
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
     * 本文のメニュー取得する
     *
     * @param  {object} talk 会話
     * @return {object} メニューhtml
     */
    getBodyMenu(talk) {
        if (!this.props.editMode) {
            return
        }

        return (
            <Panel>
                <ButtonToolbar>
                    <Button onClick={() => this.setEditBody(talk)}>
                        <Glyphicon glyph="edit"/>
                    </Button>
                    <Button onClick={() => this.deleteBody(talk.Priority)}>
                        <Glyphicon glyph="trash"/>
                    </Button>
                </ButtonToolbar>
            </Panel>
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
        this.props.setEditBody(talk.Priority, talk.Body, talk.Character, talk.DirectionType, talk.TalkType)
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
    setEditBody: PropTypes.func
}
