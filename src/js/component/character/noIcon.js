// @flow
import React from "react"
import { Alert } from "react-bootstrap"

export default () =>
  <Alert bsStyle="warning">
    <strong>警告！</strong> 設定しているアイコン画像がありません。
    <br />
    <br />
    アイコン画像の設定が無い場合は、デフォルトアイコンが適用されます。
  </Alert>
