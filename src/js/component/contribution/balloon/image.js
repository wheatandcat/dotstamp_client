// @flow
import React from "react"
import ImageBallon, {IMAGE_DISPLAY_TYPE_TALK_IMAGE} from "../../../utils/image"
import {Balloon} from "./styles.css"

type Props = {
  FileName?: string,
};

export default ({
  FileName,
}: Props) => (
  <div className={Balloon}>
    <ImageBallon
      fileName={FileName}
      imageDisplayType={IMAGE_DISPLAY_TYPE_TALK_IMAGE}/>
  </div>
)
