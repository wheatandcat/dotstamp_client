// @flow
import React from "react"
import { PageHeader, Alert, Glyphicon, Panel, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Link as Footer } from "../footer/"
import styles from "./styles.css"

export default () =>
  <div>
    <div className="container">
      <div>
        <PageHeader>ヘルプ</PageHeader>
      </div>
      <Alert bsStyle="danger">
        <div className={styles.page}>
          <Glyphicon glyph="warning-sign" />
          &nbsp;&nbsp;ヘルプは作成中です・・・問い合わせ内容が溜まったら更新します
        </div>
      </Alert>
      <Panel header="問い合わせ" bsStyle="success">
        <Link to="/question">
          <Button bsStyle="info">問い合わせ</Button>
        </Link>
      </Panel>

      <Panel header="参考" bsStyle="info">
        ブログ記事：<br />
        &nbsp;&nbsp;&nbsp;&nbsp;・{" "}
        <a
          href="http://wheatandcat.hatenablog.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          麦と猫のエンジニアブログ
        </a>
        <br />
      </Panel>
    </div>
    <Footer />
  </div>
