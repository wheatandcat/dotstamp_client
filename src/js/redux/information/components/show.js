import PropTypes from "prop-types"
import React, { Component } from "react"
import {Grid, Row, ListGroup, ListGroupItem, Glyphicon, Col, PageHeader, Panel} from "react-bootstrap"
import Footer from "../../../utils/parts/footer"
import {LinkContainer} from "react-router-bootstrap"
export default class Show extends Component {
  componentWillMount() {
    this.get(this.props.match.params.file)
  }
  /**
     * 追加する
     */
  get(file) {
    this.props.get(file)
  }
  /**
     * 描画する
     *
     * @return {object} html
     */
  render() {

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <br/>
              <br/>
              <br/>
              <ListGroup>
                <LinkContainer to="/information/terms">
                  <ListGroupItem onClick={() => this.get("terms")}>利用規約</ListGroupItem>
                </LinkContainer>
                <LinkContainer to="/information/clientLicense">
                  <ListGroupItem onClick={() => this.get("clientLicense")}>client License</ListGroupItem>
                </LinkContainer>
                <LinkContainer to="/information/serverLicense">
                  <ListGroupItem onClick={() => this.get("serverLicense")}>server License</ListGroupItem>
                </LinkContainer>
                <LinkContainer to="/information/ansibleLicense">
                  <ListGroupItem onClick={() => this.get("ansibleLicense")}>infrastructure License</ListGroupItem>
                </LinkContainer>
              </ListGroup>
            </Col>
            <Col xs={12} md={8}>
              <PageHeader>
                <Glyphicon glyph="info-sign"/>&nbsp;{this.props.informationShow.Title}
              </PageHeader>
              <Panel header="内容" bsStyle="info">
                <pre>
                            {this.props.informationShow.Body}
                            </pre>
              </Panel>
            </Col>
          </Row>
        </Grid>
        <Footer/>
      </div>
    )
  }
}

Show.propTypes = {
  get: PropTypes.func,
  match: PropTypes.object,
  informationShow: PropTypes.object
}
