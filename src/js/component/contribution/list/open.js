import PropTypes from "prop-types"
import React, { Component } from "react"
import {Alert, Button, ButtonGroup, Glyphicon} from "react-bootstrap"

export default class Open extends Component {
  render() {
    return (
      <div>
        <hr/>
        <Alert bsStyle="success">
          記事の上でダブルクリックをすると閉じます
        </Alert>
        {this.props.children}
        <br/>
        <ButtonGroup vertical block>
          <Button bsSize="xsmall" onClick={() => this.props.onDelete(this.props.ID)}>
            <Glyphicon glyph="chevron-up"/>
          </Button>
        </ButtonGroup>
        <br/>
      </div>
    )
  }
}

Open.propTypes = {
  children: PropTypes.element,
  onDelete: PropTypes.func,
}
