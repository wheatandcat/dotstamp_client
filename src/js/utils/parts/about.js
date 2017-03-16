import React, {Component} from "react"
import {Image, Panel, Glyphicon, Col, Grid, Row, Jumbotron} from "react-bootstrap"
import {Icon, Center} from "../../../css/common.css"
import Footer from "./footer"

export default class About extends Component {
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                <Jumbotron className={Center}>
                    <div>
                        <Image src="/static/images/common/about.png" rounded/>
                    </div>
                    <br/>
                    <br/>
                    <h3>
                        .stampは、対話形式で知識を共有するWebサービスです
                    </h3>
                    <hr />
                    <br/>
                    <br/>
                    <Grid>
                        <Row>
                            <Col sm={6} md={3}>
                                <Glyphicon glyph="list-alt" className={Icon}/>
                                <br />
                                <br />
                                <p>
                                    記事
                                </p>
                                <div>
                                    記事の投稿できます。画像投稿、タグ登録等の機能があります。
                                </div>
                            </Col>
                            <Col sm={6} md={3}>
                                <Glyphicon glyph="user" className={Icon}/>
                                <Glyphicon glyph="comment" className={Icon}/>
                                <br />
                                <br />
                                <p>
                                    会話形式
                                </p>
                                <div>
                                    アイコン画像をアップロードすることで、会話形式の記事が投稿できます
                                </div>
                            </Col>
                            <Col sm={6} md={3}>
                                <Glyphicon glyph="headphones" className={Icon}/>
                                <br />
                                <br />
                                <p>
                                    音声ファイル生成
                                </p>
                                <div>
                                    作成した記事から、音声読み上げファイルを作成して公開できます
                                </div>
                            </Col>
                            <Col sm={6} md={3}>
                                <Glyphicon glyph="globe" className={Icon}/>
                                <br />
                                <br />
                                <p>
                                    オープンソース
                                </p>
                                <div>
                                    このサービスはオープンソースプロジェクトです。
                                    ソースコードは全て公開しています。詳しくは下記リンクから
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <br />
                    <br />
                    <br />
                </Jumbotron>
                <br />
                <br />
                <br />
                <div className="container">
                    <h3>・・・というのは建前で、開発しているWebサービスです。</h3>
                    <h3>気が向いたら使ってみてください。&nbsp;&nbsp;(^^ </h3>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;・今後の更新予定は開発者ブログに記載しています（）
                    </p>
                    <br />
                    <br />
                    <Panel header="リンク" bsStyle="info">
                        ブログ： <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;.stamp開発の話：<br />
                        <br />
                        Twitter： <br />
                        <br />
                        オープンソースプロジェクトとして、githubにてソースコードを公開中<br />
                        ・server<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;.<br />
                        ・client<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;.<br />
                        ・ansible<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;.<br />
                    </Panel>
                </div>
                <Footer/>
            </div>
        )
    }
}
