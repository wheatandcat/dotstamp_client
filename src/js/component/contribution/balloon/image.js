// @flow
import React, {Component} from "react"
import ImageBallon, {IMAGE_DISPLAY_TYPE_TALK_IMAGE} from "../../../utils/image"
import {Balloon} from "./styles.css"

type Props = {
  FileName?: string,
};

export default class Image extends Component {
  props: Props
  render() {
    return (
      <div className={Balloon}>
        <ImageBallon
          fileName={this.props.FileName}
          imageDisplayType={IMAGE_DISPLAY_TYPE_TALK_IMAGE}/>
      </div>
    )
  }
}
