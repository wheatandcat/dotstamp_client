import React, {Component, PropTypes} from "react"
import {FormGroup, PageHeader, Form, FormControl, Glyphicon, Button, Col, Pagination, DropdownButton, MenuItem} from "react-bootstrap"
import Thumbnail from "../../utils/parts/contribution/thumbnail"
import {Center, Line} from "./../../../css/common.css"

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

        this.props.search(action)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let list = this.props.contributionSearch.list
        if (!Array.isArray(list)) {
            list = []
        }

        return (
            <div>
                <div>
                    <br />
                    <Form horizontal>
                        <FormGroup>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="検索ワード" defaultValue={this.props.params.search} />
                            </Col>
                            <Col sm={2}>
                                <Button onClick={() => this.search()}>
                                    <Glyphicon glyph="search"/>&nbsp;検索&nbsp;
                                </Button>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={10} />
                            <Col sm={2}>
                                <DropdownButton title="人気順" id="bg-nested-dropdown">
                                    <MenuItem eventKey="1">人気順</MenuItem>
                                    <MenuItem eventKey="2">新規順</MenuItem>
                                </DropdownButton>
                            </Col>
                        </FormGroup>
                    </Form>

                </div>
                <hr />
                <div>
                {list.map((item) =>
                    <div key={item.ID}>
                        <Thumbnail {...item} searchMatch={this.props.params.search} />
                        <hr className={Line}/>
                    </div>
                )}
                </div>
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
