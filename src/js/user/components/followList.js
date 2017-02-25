import React, {PropTypes, Component} from "react"
import {PageHeader, Glyphicon} from "react-bootstrap"
import Thumbnail from "../../utils/parts/contribution/thumbnail"
import {Line} from "./../../../css/common.css"
import Pagination from "../../utils/parts/pagination"


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

        return (
            <div>
                <PageHeader>
                    &nbsp;&nbsp;<Glyphicon glyph="thumbs-up"/>&nbsp;検索フォローリスト
                     <small>&nbsp;フォロー済みの投稿</small>
                </PageHeader>
                <div className="container">
                    {list.map((item) =>
                        <div key={item.ID}>
                            <Thumbnail {...item} searchMatch={this.props.params.search} />
                            <hr className={Line}/>
                        </div>
                    )}
                </div>
                <Pagination
                    count={this.props.userFollowList.Count}
                    limit={this.props.userFollowList.Limit}
                    link="user/followList"
                    order={parseInt(this.props.userFollowList.Order)}
                    activePage={parseInt(this.props.userFollowList.Page)}
                    paging={this.paging.bind(this)}
                />
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
