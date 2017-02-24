import React, {Component, PropTypes} from "react"
import {Pagination} from "react-bootstrap"
import {Center} from "./../../../css/common.css"

export default class Paginations extends Component {
    handleSelect(page) {
        this.props.paging(page, this.props.order)
        return
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        let items = Math.ceil(this.props.count / this.props.limit)

        return (
            <div className={Center}>
                <Pagination
                  prev
                  next
                  first
                  last
                  ellipsis
                  boundaryLinks
                  bsSize="large"
                  items={items}
                  maxButtons={5}
                  activePage={this.props.activePage}
                  onSelect={this.handleSelect.bind(this)}
                 />
            </div>
        )
    }
}

Paginations.propTypes = {
    count: PropTypes.number,
    limit: PropTypes.number,
    activePage: PropTypes.number,
    link: PropTypes.string,
    order: PropTypes.number,
    paging: PropTypes.func,
}
