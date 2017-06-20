// @flow
import React from "react"
import { ListGroup, ListGroupItem, Glyphicon } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default () =>
  <ListGroup>
    <ListGroupItem disabled>メニュー</ListGroupItem>
    <LinkContainer to="/user/mypage">
      <ListGroupItem>
        <Glyphicon glyph="user" />&nbsp;アカウント
      </ListGroupItem>
    </LinkContainer>
  </ListGroup>
