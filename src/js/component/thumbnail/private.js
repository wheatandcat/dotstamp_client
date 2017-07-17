// @flow
import React from "react"
import { Media } from "react-bootstrap"
import Icon from "../icon/icon"
import { DateFormat } from "../../utils/common"
import styles from "./styles.css"

type Props = {
  title: string,
  updatedAt: string,
  user: Object
}

export default ({ title, updatedAt, user }: Props) =>
  <Media className={styles.Disable}>
    <Media.Left className={styles.Image} align="middle">
      <Icon id={user.profileImageID} />
    </Media.Left>
    <Media.Body className={styles.Body}>
      <p>
        {user.name}&nbsp;さんが {DateFormat(updatedAt)}に投稿
      </p>
      <Media.Heading>
        <div>
          {title}
          <small>
            <span className={styles.Alert}>（※現在非公開の投稿です）</span>
          </small>
        </div>
      </Media.Heading>
    </Media.Body>
    <Media.Right className={styles.Follow} />
  </Media>
