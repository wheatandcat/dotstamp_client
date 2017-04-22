// @flow
import React, {Component} from "react"
import {Col} from "react-bootstrap"
import {TALK_TYPE_IMAGE} from "../../../redux/contribution/actions/talk"
import ImageBallon, {IMAGE_DISPLAY_TYPE_CHARACTER_TALK} from "../../../utils/image"
import {Talk} from "./styles.css"
import {Image, Text} from "./index"

type Props = {
  UserFileName?: string,
  TalkType?: number,
  Body?: string,
}

export default class Balloon extends Component {
  props: Props
  getBody() {
    if (this.props.TalkType == TALK_TYPE_IMAGE) {
      return <Image FileName={this.props.Body}/>
    }

    return <Text Label={this.props.Body}/>
  }
  render() {
    return (
      <div>
        <Col sm={2} md={2}>
          <ImageBallon
            fileName={this.props.UserFileName}
            imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER_TALK}
          />
        </Col>
        <Col sm={20} md={8} className={Talk}>
          {this.getBody()}
        </Col>
      </div>
    )
  }
}
