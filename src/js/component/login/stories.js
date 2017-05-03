// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { withKnobs, boolean} from "@kadira/storybook-addon-knobs"
import { MemoryRouter } from "react-router"
import {Col, Grid, Row} from "react-bootstrap"
import { Hello, LoginInput, NewInput } from "./index"

storiesOf("Login")
.addDecorator(withKnobs)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>
    {story()}
  </MemoryRouter>
))
.add("hello", () => (
  <Hello
    open={boolean("open", false)}
    text="abcabcabc"
  />
))
.add("login input", () => (
  <LoginInput
    onLogin={action("login")}
  />
))
.add("login page", () => (
  <Grid>
    <br />
    <br />
    <Row>
      <Col xs={9} md={6}>
        <Hello />
      </Col>
      <Col xs={9} md={6}>
        <LoginInput
          onLogin={action("login")}
        />
      </Col>
    </Row>
  </Grid>
))
.add("new input", () => (
  <NewInput
    onNew={action("on new")}
    onOpen={action("on open")}
  />
))
.add("new page", () => (
  <Grid>
    <br/>
    <br/>
    <Row className="show-grid">
      <Col md={6}>
        <Hello />
      </Col>
      <Col md={6}>
        <NewInput
          onNew={action("on new")}
          onOpen={action("on open")}
        />
      </Col>
    </Row>
  </Grid>
))
