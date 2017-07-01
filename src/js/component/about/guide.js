// @flow
import React from "react"
import { Grid, Row, Col, Glyphicon } from "react-bootstrap"
import styles from "./styles.css"

export default () =>
  <Grid>
    <Row>
      <Col sm={6} md={3}>
        <Glyphicon glyph="list-alt" className={styles.icon} />
        <br />
        <br />
        <p>記事</p>
        <div>記事の投稿できます。画像投稿、タグ登録等の機能があります。</div>
      </Col>
      <Col sm={6} md={3}>
        <Glyphicon glyph="user" className={styles.icon} />
        <Glyphicon glyph="comment" className={styles.icon} />
        <br />
        <br />
        <p>会話形式</p>
        <div>アイコン画像をアップロードすることで、会話形式の記事が投稿できます</div>
      </Col>
      <Col sm={6} md={3}>
        <Glyphicon glyph="headphones" className={styles.icon} />
        <br />
        <br />
        <p>音声ファイル生成</p>
        <div>作成した記事から、音声読み上げファイルを作成して公開できます</div>
      </Col>
      <Col sm={6} md={3}>
        <Glyphicon glyph="globe" className={styles.icon} />
        <br />
        <br />
        <p>オープンソース</p>
        <div>このサービスはオープンソースプロジェクトです。 ソースコードは全て公開しています。詳しくは下記リンクから</div>
      </Col>
    </Row>
  </Grid>
