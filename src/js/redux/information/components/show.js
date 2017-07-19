// @flow
import React, { Component } from "react"
import {
  Grid,
  Row,
  ListGroup,
  ListGroupItem,
  Glyphicon,
  Col,
  PageHeader,
  Panel
} from "react-bootstrap"
import { Link as Footer } from "../../../component/footer/"
import { LinkContainer } from "react-router-bootstrap"
import type { State as InformationShow } from "../reducers/show"

type Props = {
  get: Function,
  match: {
    params: {
      file: string
    }
  },
  informationShow: InformationShow
}

export default class Show extends Component {
  componentWillMount() {
    this.get(this.props.match.params.file)
  }
  props: Props
  /**
   * 追加する
   */
  get(file: string) {
    this.props.get(file)
  }
  /**
   * 描画する
   */
  render() {
    const { title, body } = this.props.informationShow

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <br />
              <br />
              <br />
              <ListGroup>
                <LinkContainer to="/information/terms">
                  <ListGroupItem onClick={() => this.get("terms")}>
                    利用規約
                  </ListGroupItem>
                </LinkContainer>
                <LinkContainer to="/information/clientLicense">
                  <ListGroupItem onClick={() => this.get("clientLicense")}>
                    client License
                  </ListGroupItem>
                </LinkContainer>
                <LinkContainer to="/information/serverLicense">
                  <ListGroupItem onClick={() => this.get("serverLicense")}>
                    server License
                  </ListGroupItem>
                </LinkContainer>
                <LinkContainer to="/information/ansibleLicense">
                  <ListGroupItem onClick={() => this.get("ansibleLicense")}>
                    infrastructure License
                  </ListGroupItem>
                </LinkContainer>
              </ListGroup>
            </Col>
            <Col xs={12} md={8}>
              <PageHeader>
                <Glyphicon glyph="info-sign" />
                &nbsp;
                {title}
              </PageHeader>
              <Panel header="内容" bsStyle="info">
                <pre>
                  {body}
                </pre>
              </Panel>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}
