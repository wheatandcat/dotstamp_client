// @flow
import React from "react"
import {Grid, Row, Col, Button, ButtonToolbar, ControlLabel, Glyphicon, Well} from "react-bootstrap"
import {Avatar, Body} from "./index"
import styles from "./styles.css"

type Props = {
  UserFileName: string,
  Type: number,
  Talk: string,
  Priority: number,
  onChangeImage: Function,
  onDelete: Function,
}

export default ({
  UserFileName,
  Type,
  Talk,
  Priority,
  onChangeImage,
  onDelete,
}: Props) => (
  <Grid>
    <Row>
      <Avatar FileName={UserFileName} />
      <Body
        TalkType={Type}
        Body={Talk}
      />
      <Col sm={2} md={2} style={{top: "15px"}}>
        <Well>
          <ButtonToolbar>
            <Button>
              <ControlLabel htmlFor={"image-file-edit-" + Priority} bsClass={styles.Group}>
                <Glyphicon glyph="picture"/>
              </ControlLabel>
              <input
                type="file"
                id={"image-file-edit-" + Priority}
                name="image-file-edit" className="hidden"
                accept="image/jpeg,image/png,image/jpg"
                onChange={onChangeImage}
              />
            </Button>
            <Button onClick={() => onDelete(Priority)}>
              <Glyphicon glyph="trash"/>
            </Button>
          </ButtonToolbar>
        </Well>
      </Col>
    </Row>
  </Grid>
)
