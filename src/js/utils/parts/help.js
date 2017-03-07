import React, {Component} from "react"
import {PageHeader, Panel, Alert, Glyphicon} from "react-bootstrap"
import {Normal} from "../../../css/common.css"
import Footer from "./footer"

export default class Help extends Component {
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <PageHeader>ヘルプ</PageHeader>
                    </div>
                    <Alert bsStyle="danger">
                        <div className={Normal}>
                            <Glyphicon glyph="warning-sign"/>&nbsp;&nbsp;ヘルプは作成中です・・・問い合わせ内容が溜まったら更新します
                        </div>
                    </Alert>
                    <Panel header="問い合わせ" bsStyle="success">

                    </Panel>

                    <Panel header="その他" bsStyle="info">
                        ブログ記事：<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;・
                    </Panel>
                </div>
                <Footer/>
            </div>
        )
    }
}
