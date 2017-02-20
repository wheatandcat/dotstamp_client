import React, {Component, PropTypes} from "react"
import {FormControl, Glyphicon, Button, Col, Pagination, DropdownButton, MenuItem} from "react-bootstrap"

import {Center} from "./../../../css/common.css"

export default class Search extends Component {
    componentWillMount() {
        this.search()
    }
    /**
     * 検索する
     */
    search() {
        let action = {
            search: this.props.params.search,
            order: this.props.params.order,
            page: this.props.params.page,
            limit: this.props.contributionSearch.limit,
        }
        console.log (action)

        this.props.search(action)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                <br />
                <Col sm={10}>
                  <FormControl type="text" placeholder="検索ワード" defaultValue={this.props.params.search} />
                </Col>
                <Col sm={1}>
                    <Button onClick={() => this.search()}>
                        <Glyphicon glyph="search"/>&nbsp;検索&nbsp;
                    </Button>
                </Col>
                <br />
                <br />
                <Col sm={10}>
                </Col>
                <Col sm={2}>
                    <DropdownButton title="人気順" id="bg-nested-dropdown">
                        <MenuItem eventKey="1">人気順</MenuItem>
                        <MenuItem eventKey="2">新規順</MenuItem>
                    </DropdownButton>
                </Col>
                <div className={Center}>
                    <Pagination
                      prev
                      next
                      first
                      last
                      ellipsis
                      boundaryLinks
                      bsSize="large"
                      items={20}
                      maxButtons={5}
                      activePage={1}
                     />
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    params: PropTypes.object,
    contributionSearch: PropTypes.object,
    search: PropTypes.func,
}
