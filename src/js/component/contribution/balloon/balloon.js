// @flow
import React from "react"
import { Grid, Row } from "react-bootstrap"
import { Avatar, Body } from "./index"

type Props = {
  UserFileName: string,
  Type: number,
  Talk: string
}

export default ({ UserFileName, Type, Talk }: Props) => (
  <Grid>
    <Row>
      <Avatar FileName={UserFileName} />
      <Body TalkType={Type} Body={Talk} />
    </Row>
  </Grid>
)
