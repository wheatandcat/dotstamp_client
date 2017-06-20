// @flow
import React from "react"
import {
  Modal,
  Radio,
  FormGroup,
  Button,
  Glyphicon,
  Well
} from "react-bootstrap"
import {
  PROBLEM_TYPE_SPAM,
  PROBLEM_TYPE_INAPPROPRIATE
} from "../../../constants/contribution"
import styles from "./styles.css"

export type Props = {
  problemType: number,
  send?: boolean,
  show?: boolean,
  onProblemType: Function,
  onHide: Function,
  onAdd: Function
}

function getSend(send?: boolean) {
  if (!send) {
    return
  }

  return (
    <div>
      <br />
      <Well>
        通報を送信しました。ご協力ありがとうございます。
      </Well>
    </div>
  )
}

export default ({
  problemType,
  send,
  show,
  onHide,
  onProblemType,
  onAdd
}: Props) =>
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>投稿を通報する</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>以下の理由で通報します。</h4>
      <br />
      <div className={styles.problem}>
        <FormGroup>
          <Radio
            name="problemType"
            value={PROBLEM_TYPE_SPAM}
            checked={problemType == PROBLEM_TYPE_SPAM}
            readOnly={problemType == PROBLEM_TYPE_SPAM}
            onChange={() => onProblemType(PROBLEM_TYPE_SPAM)}
          >
            スパムです
          </Radio>
          <Radio
            name="problemType"
            value={PROBLEM_TYPE_INAPPROPRIATE}
            checked={problemType == PROBLEM_TYPE_INAPPROPRIATE}
            readOnly={problemType == PROBLEM_TYPE_INAPPROPRIATE}
            onChange={() => onProblemType(PROBLEM_TYPE_INAPPROPRIATE)}
          >
            不適切な内容が含まれています
          </Radio>
        </FormGroup>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button bsStyle="success" onClick={() => onAdd()}>
        <Glyphicon glyph="send" />&nbsp;送信
      </Button>
      {getSend(send)}
    </Modal.Footer>
  </Modal>
