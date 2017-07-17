// @flow
import React from "react"
import { Media, Glyphicon } from "react-bootstrap"
import Icon from "../icon/icon"
import { TagList } from "../tag/"
import { Link } from "react-router-dom"
import { DateFormat } from "../../utils/common"
import styles from "./styles.css"

type Props = {
  followCount: number,
  searchMatch: React$Element<*>,
  showPath: string,
  sound: React$Element<*>,
  tags: Array<Object>,
  title: string,
  updatedAt: string,
  user: Object,
  onSearch?: Function
}

export default ({
  followCount,
  searchMatch,
  showPath,
  sound,
  tags,
  title,
  updatedAt,
  user,
  onSearch
}: Props) =>
  <Media>
    <Media.Left className={styles.Image} align="middle">
      <Icon id={user.profileImageID} />
    </Media.Left>
    <Media.Body className={styles.Body}>
      <p>
        {user.name}&nbsp;さんが {DateFormat(updatedAt)}に投稿{sound}
      </p>
      <Media.Heading>
        <Link to={showPath} className={styles.Strong}>
          {title}
        </Link>
        <div className={styles.Gap}>
          <TagList list={tags} onSearch={onSearch} />
        </div>
      </Media.Heading>
      <div>
        {searchMatch}
      </div>
    </Media.Body>
    <Media.Right className={styles.Follow}>
      <Glyphicon glyph="thumbs-up" />
      <span className={styles.LittleStrong}>
        &nbsp;{followCount}
      </span>
    </Media.Right>
  </Media>
