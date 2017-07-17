// @flow
import React from "react"
import {
  Grid,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Glyphicon,
  Well
} from "react-bootstrap"
import { Avatar, Body } from "./index"

type Props = {
  userFileName: string,
  type: number,
  talk: string,
  item: Object,
  priority: number,
  onChangeText: Function,
  onDelete: Function
}

export default ({
  userFileName,
  type,
  talk,
  item,
  priority,
  onChangeText,
  onDelete
}: Props) =>
  <Grid>
    <Row>
      <Avatar fileName={userFileName} />
      <Body talkType={type} body={talk} />
      <Col sm={2} md={2} style={{ top: "15px" }}>
        <Well>
          <ButtonToolbar>
            <Button onClick={() => onChangeText(item, priority)}>
              <Glyphicon glyph="edit" />
            </Button>
            <Button onClick={() => onDelete(priority)}>
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonToolbar>
        </Well>
      </Col>
    </Row>
  </Grid>
