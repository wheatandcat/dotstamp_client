import PropTypes from "prop-types"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
  Image,
  Navbar,
  FormGroup,
  FormControl,
  Button,
  Glyphicon,
  InputGroup
} from "react-bootstrap"
import { fetchPostsIfNeeded } from "../fetch"
import LoginAuth from "./../../redux/login/containers/auth"
import { Link } from "react-router-dom"
import * as types from "../../constants/ActionTypes"

import { Stamp, Narrowly } from "./../../../css/common.css"
import { Top } from "./../../../css/header.css"

class Header extends Component {
  /**
   * コマンドを送信する
   *
   * @param  {object} e エレメント
   */
  sendCommand(e) {
    const ENTER = 13
    if (e.keyCode == ENTER) {
      this.search()
    }
  }
  /**
   * 検索する
   */
  search() {
    const search = this.input.value.trim()
    if (search == "") {
      return
    }

    this.props.search({
      search,
      order: 1,
      page: 1,
      limit: this.props.contributionSearch.Limit
    })

    this.props.history.push(`/contribution/search/${search}/1/1`)
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    return (
      <Navbar className={`${Narrowly} ${Stamp}`}>
        <Navbar.Header>
          <Navbar.Brand className={Top}>
            <Link to="/">
              <Image src="/static/images/common/top.png" rounded />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type="text"
                  inputRef={ref => {
                    this.input = ref
                  }}
                  placeholder="Search"
                  onKeyDown={this.sendCommand.bind(this)}
                />
                <InputGroup.Button>
                  <Button onClick={() => this.search()}>
                    <Glyphicon glyph="search" />
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Navbar.Form>
          <LoginAuth />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Header.propTypes = {
  contributionSearch: PropTypes.object,
  search: PropTypes.func,
  history: PropTypes.object
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    search: action => {
      dispatch(
        fetchPostsIfNeeded(
          "contribution/search/",
          types.GET_CONTRIBUTION_SEARCH_LIST,
          action,
          action
        )
      )
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
