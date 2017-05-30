// @flow
import React from "react"
import { Title, Guide, Link } from "./"
import { Link as Footer } from "../footer/"

export default () => (
  <div>
    <Title>
      <Guide />
      <br />
      <br />
      <br />
    </Title>
    <br />
    <br />
    <br />
    <div className="container">
      <h3>・・・というのは建前で、開発しているWebサービスです。</h3>
      <h3>気が向いたら使ってみてください。&nbsp;&nbsp;(^^ </h3><br />
      （
      <a
        href="http://wheatandcat.hatenablog.com/entry/2017/03/19/161110"
        rel="noopener noreferrer"
        target="_blank"
      >
        今後の更新予定
      </a>
      ）
      <br />
      <br />
      <br />
      <Link />
    </div>
    <Footer />
  </div>
)
