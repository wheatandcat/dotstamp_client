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
  UserFileName: string,
  Type: number,
  Talk: string,
  Item: Object,
  Priority: number,
  onChangeText: Function,
  onDelete: Function
}

export default ({
  UserFileName,
  Type,
  Talk,
  Item,
  Priority,
  onChangeText,
  onDelete
}: Props) => (
  <Grid>
    <Row>
      <Avatar FileName={UserFileName} />
      <Body TalkType={Type} Body={Talk} />
      <Col sm={2} md={2} style={{ top: "15px" }}>
        <Well>
          <ButtonToolbar>
            <Button onClick={() => onChangeText(Item, Priority)}>
              <Glyphicon glyph="edit" />
            </Button>
            <Button onClick={() => onDelete(Priority)}>
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonToolbar>
        </Well>
      </Col>
    </Row>
  </Grid>
)
