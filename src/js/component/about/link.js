// @flow
import React from "react"
import { Panel } from "react-bootstrap"

export default () =>
  <Panel header="リンク" bsStyle="info">
    <b>ブログ</b>
    ：
    {" "}
    <a
      href="http://wheatandcat.hatenablog.com/"
      rel="noopener noreferrer"
      target="_blank"
    >
      麦と猫のエンジニアブログ
    </a>
    <br />
    <br />
    <b>Twitter</b>
    ：
    {" "}
    <a
      href="https://twitter.com/wheatAndCat"
      rel="noopener noreferrer"
      target="_blank"
    >
      麦と猫
    </a>
    <br />
    <br />
    <b>オープンソースプロジェクトです。githubでソースコードを公開しています。</b><br />
    &nbsp;&nbsp;・
    <a
      href="https://github.com/wheatandcat/dotstamp_server"
      rel="noopener noreferrer"
      target="_blank"
    >
      サーバーサイド
    </a>
    <br />
    &nbsp;&nbsp;・
    <a
      href="https://github.com/wheatandcat/dotstamp_client"
      rel="noopener noreferrer"
      target="_blank"
    >
      クライアントサイド
    </a>
    <br />
    &nbsp;&nbsp;・
    <a
      href="https://github.com/wheatandcat/dotstamp_ansible"
      rel="noopener noreferrer"
      target="_blank"
    >
      環境構築
    </a>
    <br />
    &nbsp;&nbsp;・
    <a
      href="https://github.com/wheatandcat/dotstamp_deploy_script"
      rel="noopener noreferrer"
      target="_blank"
    >
      デプロイスクリプト
    </a>
    <br />
    &nbsp;&nbsp;・
    <a
      href="https://github.com/wheatandcat/dotstamp_deploy_ansible"
      rel="noopener noreferrer"
      target="_blank"
    >
      デプロイ環境構築
    </a>
    <br />
  </Panel>
