// @flow
import React from "react"
import {Media} from "react-bootstrap"
import Icon from "../icon/icon"
import {DateFormat} from "../../utils/common"
import {Alert, Body, Disable, Follow, Image} from "./styles.css"

type Props = {
  Title: string,
  UpdatedAt: string,
  User: Object,
}

export default ({
  Title,
  UpdatedAt,
  User,
}: Props) => (
  <Media className={Disable}>
    <Media.Left className={Image} align="middle">
      <Icon ID={User.ProfileImageID}/>
    </Media.Left>
    <Media.Body className={Body}>
      <p>
        {User.Name}&nbsp;さんが {DateFormat(UpdatedAt)}に投稿
      </p>
      <Media.Heading>
        <div>
          {Title}<small>
            <span className={Alert}>（※現在非公開の投稿です）</span>
          </small>
        </div>
      </Media.Heading>
    </Media.Body>
    <Media.Right className={Follow}></Media.Right>
  </Media>
)
