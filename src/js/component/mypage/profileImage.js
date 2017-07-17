// @flow
import React, { Component } from "react"
import {
  Grid,
  Button,
  Row,
  Col,
  ControlLabel,
  Glyphicon
} from "react-bootstrap"
import { Icon } from "../icon/"
import styles from "./styles.css"

type Props = {
  imageID: number,
  onChange: Function
}

export default class ProfileImage extends Component {
  props: Props

  file: Object

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={2} md={1}>
            <Icon id={this.props.imageID} />
          </Col>
          <Col sm={20} md={10}>
            <Button bsStyle="link">
              <ControlLabel htmlFor="image-file" bsClass={styles.profile}>
                <Glyphicon glyph="picture" />&nbsp;画像を変更する
              </ControlLabel>
              <input
                type="file"
                id="image-file"
                name="image-file"
                className="hidden"
                accept="image/jpeg,image/png,image/jpg"
                ref={input => {
                  this.file = input
                }}
                onChange={this.props.onChange}
              />
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}
