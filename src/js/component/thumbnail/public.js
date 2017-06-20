// @flow
import React from "react"
import { Media, Glyphicon } from "react-bootstrap"
import Icon from "../icon/icon"
import { TagList } from "../tag/"
import { Link } from "react-router-dom"
import { DateFormat } from "../../utils/common"
import styles from "./styles.css"

type Props = {
  FollowCount: number,
  SearchMatch: React$Element<*>,
  ShowPath: string,
  Sound: React$Element<*>,
  Tag: Array<Object>,
  Title: string,
  UpdatedAt: string,
  User: Object,
  OnSearch?: Function
}

export default ({
  FollowCount,
  SearchMatch,
  ShowPath,
  Sound,
  Tag,
  Title,
  UpdatedAt,
  User,
  OnSearch
}: Props) =>
  <Media>
    <Media.Left className={styles.Image} align="middle">
      <Icon ID={User.ProfileImageID} />
    </Media.Left>
    <Media.Body className={styles.Body}>
      <p>
        {User.Name}&nbsp;さんが {DateFormat(UpdatedAt)}に投稿{Sound}
      </p>
      <Media.Heading>
        <Link to={ShowPath} className={styles.Strong}>
          {Title}
        </Link>
        <div className={styles.Gap}>
          <TagList list={Tag} onSearch={OnSearch} />
        </div>
      </Media.Heading>
      <div>
        {SearchMatch}
      </div>
    </Media.Body>
    <Media.Right className={styles.Follow}>
      <Glyphicon glyph="thumbs-up" />
      <span className={styles.LittleStrong}>&nbsp;{FollowCount}</span>
    </Media.Right>
  </Media>
