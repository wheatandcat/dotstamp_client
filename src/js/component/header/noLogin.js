// @flow
import React from "react"
import { Nav, NavItem, Label, Button, Glyphicon } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default () =>
  <Nav pullRight>
    <LinkContainer to="/contribution/experience">
      <NavItem eventKey={1}>
        <Glyphicon glyph="edit" />
        &nbsp;投稿&nbsp;
        <Label bsStyle="warning">お試し</Label>
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/login/new">
      <NavItem eventKey={2}>
        <Button bsStyle="success" bsSize="xsmall">
          ユーザ登録
        </Button>
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/login/input">
      <NavItem eventKey={1}>
        <Glyphicon glyph="log-in" />&nbsp;ログインする
      </NavItem>
    </LinkContainer>
  </Nav>
