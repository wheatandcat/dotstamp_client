// @flow
import React from "react"
import { Grid, Row, Col, PageHeader } from "react-bootstrap"
import { TagList } from "../../tag/"

export type Props = {
  followElement: React$Element<*>,
  tags: Array<Object>,
  title: string
}

export default ({ followElement, tags, title }: Props) =>
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        <PageHeader>
          {title}
        </PageHeader>
        <div>
          <TagList list={tags} />
        </div>
      </Col>
      <Col xsHidden md={4}>
        {followElement}
      </Col>
    </Row>
  </Grid>
