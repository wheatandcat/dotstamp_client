// @flow
import React from "react"
import ImageBallon, {IMAGE_DISPLAY_TYPE_TALK_IMAGE} from "../../../utils/image"
import styles from "./styles.css"

type Props = {
  FileName?: string,
};

export default ({
  FileName,
}: Props) => (
  <div className={styles.Balloon}>
    <ImageBallon
      fileName={FileName}
      imageDisplayType={IMAGE_DISPLAY_TYPE_TALK_IMAGE}/>
  </div>
)
