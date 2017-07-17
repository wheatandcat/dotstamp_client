// @flow
import React from "react"
import { Grid, Row } from "react-bootstrap"
import { Avatar, Body } from "./index"

type Props = {
  userFileName: string,
  type: number,
  talk: string
}

export default ({ userFileName, type, talk }: Props) =>
  <Grid>
    <Row>
      <Avatar fileName={userFileName} />
      <Body talkType={type} body={talk} />
    </Row>
  </Grid>
