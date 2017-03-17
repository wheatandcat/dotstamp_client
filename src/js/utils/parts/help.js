import React, {Component} from "react"
import {PageHeader, Panel, Alert, Glyphicon, Button} from "react-bootstrap"
import {Normal} from "../../../css/common.css"
import Footer from "./footer"
import {Link} from "react-router"

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

                        <Link to="/question">
                            <Button bsStyle="info">問い合わせ</Button>
                        </Link>
                    </Panel>

                    <Panel header="参考" bsStyle="info">
                        ブログ記事：<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;・ <a href="http://wheatandcat.hatenablog.com/" target="_blank">麦と猫のエンジニアブログ</a><br />
                    </Panel>
                </div>
                <Footer/>
            </div>
        )
    }
}
