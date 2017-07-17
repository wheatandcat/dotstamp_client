// @flow
import React from "react"
import {
  Grid,
  Row,
  Col,
  Button,
  ButtonToolbar,
  ControlLabel,
  Glyphicon,
  Well
} from "react-bootstrap"
import { Avatar, Body } from "./index"
import styles from "./styles.css"

type Props = {
  userFileName: string,
  type: number,
  talk: string,
  priority: number,
  onChangeImage: Function,
  onDelete: Function
}

export default ({
  userFileName,
  type,
  talk,
  priority,
  onChangeImage,
  onDelete
}: Props) =>
  <Grid>
    <Row>
      <Avatar fileName={userFileName} />
      <Body talkType={type} body={talk} />
      <Col sm={2} md={2} style={{ top: "15px" }}>
        <Well>
          <ButtonToolbar>
            <Button>
              <ControlLabel
                htmlFor={`image-file-edit-${priority}`}
                bsClass={styles.Group}
              >
                <Glyphicon glyph="picture" />
              </ControlLabel>
              <input
                type="file"
                id={`image-file-edit-${priority}`}
                name="image-file-edit"
                className="hidden"
                accept="image/jpeg,image/png,image/jpg"
                onChange={onChangeImage}
              />
            </Button>
            <Button onClick={() => onDelete(priority)}>
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonToolbar>
        </Well>
      </Col>
    </Row>
  </Grid>
