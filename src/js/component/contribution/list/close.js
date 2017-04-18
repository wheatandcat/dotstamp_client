// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import {Button, ButtonGroup, Glyphicon} from "react-bootstrap"

export default class Close extends Component {
  render() {
    return (
      <div>
        <br/>
        <ButtonGroup vertical block>
          <Button bsSize="xsmall" onClick={() => this.props.onAdd(this.props.ID)}>
            <Glyphicon glyph="chevron-down"/>
          </Button>
        </ButtonGroup>
        <br/>
      </div>
    )
  }
}

Close.propTypes = {
  ID: PropTypes.number,
  onAdd: PropTypes.func,
}
