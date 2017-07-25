// @flow
import React from "react"
import { Label } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ORDER_TYPE_NEW } from "../../constants/contribution"
import styles from "./styles.css"

export type Props = {
  label: string,
  onSearch?: Function
}

export default ({ label, onSearch }: Props) =>
  <Link
    to={`/contribution/search/${label}/${ORDER_TYPE_NEW}/1`}
    onClick={() => onSearch && onSearch(label, 1, ORDER_TYPE_NEW)}
  >
    <Label bsStyle="info" className={styles.tag}>
      {label}
    </Label>
  </Link>
