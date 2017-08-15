// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { MemoryRouter } from "react-router"
import { Col, Grid, Row } from "react-bootstrap"
import { Hello, LoginInput, NewInput, Platform } from "./index"

storiesOf("login")
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("hello", () => <Hello open={boolean("open", false)} text="abcabcabc" />)
  .add("login input", () =>
    <LoginInput
      onLogin={action("login")}
      onGoogle={action("google")}
      onTwitter={action("twitter")}
      onFacebook={action("facebook")}
    />
  )
  .add("login page", () =>
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
            onGoogle={action("google")}
            onTwitter={action("twitter")}
            onFacebook={action("facebook")}
          />
        </Col>
      </Row>
    </Grid>
  )
  .add("new input", () =>
    <NewInput
      onNew={action("on new")}
      onOpen={action("on open")}
      onGoogle={action("google")}
      onTwitter={action("twitter")}
      onFacebook={action("facebook")}
    />
  )
  .add("new page", () =>
    <Grid>
      <br />
      <br />
      <Row className="show-grid">
        <Col md={6}>
          <Hello />
        </Col>
        <Col md={6}>
          <NewInput
            onNew={action("on new")}
            onOpen={action("on open")}
            onGoogle={action("google")}
            onTwitter={action("twitter")}
            onFacebook={action("facebook")}
          />
        </Col>
      </Row>
    </Grid>
  )
  .add("platform", () =>
    <Platform
      onGoogle={action("google")}
      onTwitter={action("twitter")}
      onFacebook={action("facebook")}
    />
  )
