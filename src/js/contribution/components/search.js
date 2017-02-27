import React, {Component, PropTypes} from "react"
import {FormGroup, Form, FormControl, Glyphicon, Button, Col, DropdownButton, MenuItem} from "react-bootstrap"
import Thumbnail from "../../utils/parts/contribution/thumbnail"
import Pagination from "../../utils/parts/pagination"
import {Line} from "./../../../css/common.css"
import Footer from "../../utils/parts/footer"

export default class Search extends Component {
    componentWillMount() {
        this.search(this.props.params.search, this.props.params.page, this.props.params.order)
        this.props.paging(this.props.params.search, this.props.params.page, this.props.params.order)
    }
    /**
     * 検索する
     *
     * @param {string} search 検索
     * @param {number} page ページ
     * @param {number} order 順番
     */
    search(search, page, order) {
        let action = {
            search: search,
            order: order,
            page: page,
            limit: this.props.contributionSearch.Limit,
        }


        this.props.search(action)
    }
    /**
     * ページングする
     *
     * @param {number} page ページ
     * @param {number} order 順番
     */
    paging(page, order) {
        this.search(this.props.contributionSearch.Search, page, order)
        this.props.paging(this.props.contributionSearch.Search, page, order)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let list = this.props.contributionSearch.List
        if (!Array.isArray(list)) {
            list = []
        }

        return (
            <div>
                <div className="container">
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
                    <Pagination
                        count={this.props.contributionSearch.Count}
                        limit={this.props.contributionSearch.Limit}
                        link="user/followList"
                        order={parseInt(this.props.contributionSearch.Order)}
                        activePage={parseInt(this.props.contributionSearch.Page)}
                        paging={this.paging.bind(this)}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

Search.propTypes = {
    params: PropTypes.object,
    contributionSearch: PropTypes.object,
    search: PropTypes.func,
    paging: PropTypes.func,
}
