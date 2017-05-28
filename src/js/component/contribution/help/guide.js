// @flow
import React from "react"
import { Modal, Panel, Table, Button } from "react-bootstrap"

type Props = {
  open: boolean,
  onHide: Function
}

export default ({ open, onHide }: Props) => (
  <Modal show={open} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>操作方法</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>操作</h4>
      <Panel header="選択中のアイコンを拡大表示">
        画面中央のアイコンをクリックすると、選択中のアイコンを吹き出しで表示する<br />
        もう一度クリックすると閉じる
      </Panel>
      <br />
      <Panel header="並び替え">
        吹き出し部分をドラック&ドロップすることで並び替え可能です
      </Panel>
      <br />
      <Panel header="読み上げを作成する">
        読み上げ作成は記事を保存後に表示される。「読み上げを作成する」から編集できます<br />
        ※お試し投稿では使用できません
      </Panel>
      <br />
      <h4>ショートカットキー</h4>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>操作</th>
            <th>キー</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>アイコンを右周りに変更</td>
            <td>shift&nbsp;+&nbsp;→</td>
          </tr>
          <tr>
            <td>アイコンを左周りに変更</td>
            <td>shift&nbsp;+&nbsp;←</td>
          </tr>
          <tr>
            <td>アイコンを拡大表示</td>
            <td>shift&nbsp;+&nbsp;↑</td>
          </tr>
          <tr>
            <td>アイコンを拡大非表示</td>
            <td>shift&nbsp;+&nbsp;↓</td>
          </tr>
          <tr>
            <td>テキスト書き込み</td>
            <td>shift&nbsp;+&nbsp;command</td>
          </tr>
          <tr>
            <td>投稿する or 下書き保存</td>
            <td>shift&nbsp;+&nbsp;ctrl</td>
          </tr>
          <tr>
            <td>フォーカスをテキストに移動</td>
            <td>shift&nbsp;+&nbsp;enter</td>
          </tr>
          <tr>
            <td>画像をアップロード</td>
            <td>shift&nbsp;+&nbsp;i</td>
          </tr>
          <tr>
            <td>アイコンを拡大表示</td>
            <td>shift&nbsp;+&nbsp;↑</td>
          </tr>
          <tr>
            <td>書き込みスペースをスクロール</td>
            <td>shift&nbsp;+&nbsp;alt&nbsp;+&nbsp;↓&nbsp;or&nbsp;↑</td>
          </tr>
        </tbody>
      </Table>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
)
