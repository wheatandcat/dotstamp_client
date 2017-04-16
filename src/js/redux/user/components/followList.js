import PropTypes from "prop-types"
import React, { Component } from "react"
import {PageHeader, Glyphicon} from "react-bootstrap"
import Thumbnail from "../../../utils/parts/contribution/thumbnail"
import {Line, Center} from "./../../../../css/common.css"
import Pagination from "../../../utils/parts/pagination"
import Footer from "../../../utils/parts/footer"

export default class FollowList extends Component {
    componentWillMount() {
        this.getList(this.props.params.page, this.props.params.order)
        this.props.paging(this.props.params.page, this.props.params.order)
    }
    /**
     * リストを取得する
     *
     * @param {number} page ページ
     * @param {number} order 順番
     */
    getList(page, order) {
        this.props.getList({
            order: order,
            page: page,
            limit: this.props.userFollowList.Limit,
        })

    }
    /**
     * ページングする
     *
     * @param {number} page ページ
     * @param {number} order 順番
     */
    paging(page, order) {
        this.getList(page, order)
        this.props.paging(page, order)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let list = this.props.userFollowList.List
        if (!Array.isArray(list)) {
            list = []
        }

        let page = ""
        if (list.length == 0) {
            page = (
                <div className={Center}>
                    フォロー済み投稿の登録はありません。
                </div>
            )
        } else {
            page = (
                <Pagination
                    count={this.props.userFollowList.Count}
                    limit={this.props.userFollowList.Limit}
                    link="user/followList"
                    order={parseInt(this.props.userFollowList.Order)}
                    activePage={parseInt(this.props.userFollowList.Page)}
                    paging={this.paging.bind(this)}
                />
            )
        }

        return (
            <div>
                <div className="container">
                    <PageHeader>
                        &nbsp;&nbsp;<Glyphicon glyph="thumbs-up"/>&nbsp;フォロー済み投稿
                    </PageHeader>
                </div>
                <div className="container">
                    {list.map((item, key) =>
                        <div key={key}>
                            <Thumbnail {...item} searchMatch={this.props.params.search} />
                            <hr className={Line}/>
                        </div>
                    )}
                </div>
                {page}
                <Footer/>
            </div>
        )
    }
}

FollowList.propTypes = {
    params: PropTypes.object,
    getList: PropTypes.func,
    paging: PropTypes.func,
    userFollowList: PropTypes.object,
}
