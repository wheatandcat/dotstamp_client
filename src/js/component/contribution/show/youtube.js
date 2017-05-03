// @flow
import React from "react"
import {Label} from "react-bootstrap"
import YouTube from "../../../utils/youtube"
import styles from "./styles.css"

export type Props = {
  movieID: string,
}

export default ({
  movieID
}: Props) => (
  <div className="container">
    <Label
      bsStyle="success"
      className={styles.youtube}
    >
      記事を読み上げる
    </Label>
    <br/>
    <YouTube videoId={movieID}/>
  </div>
)
