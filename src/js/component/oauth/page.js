// @flow
import React from "react"
import { Alert } from "react-bootstrap"
import { New } from "./"
import styles from "./styles.css"

type Props = {
  email: string,
  onNew: Function,
  isAlert: boolean,
  message: string
}

export default ({ email, onNew, isAlert, message }: Props) =>
  <div className={`${styles.page} container`}>
    <br />
    <br />
    <br />
    {(() => {
      if (isAlert) {
        return (
          <Alert bsStyle="danger">
            {message}
          </Alert>
        )
      }
    })()}
    <div>
      <New email={email} onNew={onNew} />
    </div>
  </div>
