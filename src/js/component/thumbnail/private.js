// @flow
import React from "react"
import { Media } from "react-bootstrap"
import Icon from "../icon/icon"
import { DateFormat } from "../../utils/common"
import styles from "./styles.css"

type Props = {
  Title: string,
  UpdatedAt: string,
  User: Object
}

export default ({ Title, UpdatedAt, User }: Props) => (
  <Media className={styles.Disable}>
    <Media.Left className={styles.Image} align="middle">
      <Icon ID={User.ProfileImageID} />
    </Media.Left>
    <Media.Body className={styles.Body}>
      <p>
        {User.Name}&nbsp;さんが {DateFormat(UpdatedAt)}に投稿
      </p>
      <Media.Heading>
        <div>
          {Title}<small>
            <span className={styles.Alert}>（※現在非公開の投稿です）</span>
          </small>
        </div>
      </Media.Heading>
    </Media.Body>
    <Media.Right className={styles.Follow} />
  </Media>
)
