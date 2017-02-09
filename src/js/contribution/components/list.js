import React, {Component, PropTypes} from "react"

import Http from "../../utils/http"
import {Link} from "react-router"
import {Media, Button, ButtonGroup, Well ,Glyphicon, Collapse} from "react-bootstrap"
import Images from "../../utils/image"
import Footer from "../../utils/parts/footer"
import ContributionShowFrame from "../components/show/frame"

import { line, Toggle } from "./../../../css/common.css"

import {IMAGE_DISPLAY_TYPE_CHARACTER} from "../../utils/image"

const VIEW_PAGE_LIMIT = 10

export default class List extends Component {
    componentWillMount() {
        this.getList(true)
    }
    /**
     * リストを取得する
     */
    getList(init) {
        let action = {
            order: this.props.contributionList.order
        }

        Http.postApi("contribution/list/", action).then((response) => {
            return this.props.getList(response.body, init)
        }).catch((err) => {
            this.props.showError(err)
        })
    }

    /**
     * 次のページを取得する
     */
    next() {
        this.getList(false)
    }
    /**
     * 作品の詳細を取得する
     *
     * @param  {number} id 投稿ID
     */
    show(id) {
        this.getDetail(id)
    }
    /**
     * 詳細を取得する
     *
     * @param  {number} id 投稿ID
     */
    getDetail(id) {
        Http.postApi("contribution/show/" + id).then((response) => {
            this.props.addItem(response.body)
        }).catch((err) => {
            this.props.showError(err)
        })
    }
    /**
     * 詳細画面リンクを取得する
     *
     * @param  {number} id 投稿ID
     * @return {string} 詳細画面リンク
     */
    getShowPath(id) {
        return "/contribution/show/" + id
    }
    /**
     * アイテム表示を取得する
     *
     * @param  {object} obj アイテム
     * @return {object} html
     */
    getItemShow(obj) {
        if (this.props.contributionList.itemMap[obj.ID] != undefined) {
            let item = this.props.contributionList.itemMap[obj.ID]
            return (
                <div>
                    <ContributionShowFrame
                        title = {item.title}
                        body = {item.body}
                        tagList = {item.tagList}
                    />
                    <hr className={line}/>
                    <Button className={Toggle} onClick={() => this.props.deleteItem(obj.ID)}>
                        <Glyphicon glyph="chevron-up"/>
                    </Button>
                </div>
            )
        }

        return (
            <div>
                <hr className={line}/>
                <Button className={Toggle} onClick={() => this.show(obj.ID)}>
                    <Glyphicon glyph="chevron-down"/>
                </Button>
            </div>
        )
    }
    /**
     * アイテムを取得する
     *
     * @param  {object} obj アイテム
     * @return {object} html
     */
    gatItem(obj) {
        return (
            <div>
                <Media>
                    <Media.Left>
                        <Images
                            fileName="4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8.jpg"
                            imageDisplayType={IMAGE_DISPLAY_TYPE_CHARACTER}
                        />
                    </Media.Left>
                    <Media.Body>
                        ○○さんが 15分前に投稿しました
                        <Media.Heading>
                            <Link to={this.getShowPath(obj.ID)}>
                                {obj.Title}
                            </Link>

                        </Media.Heading>
                    </Media.Body>
                    <Media.Right>
                        <Glyphicon glyph="thumbs-up"/>
                        <span>2</span>
                    </Media.Right>
                </Media>
                {this.getItemShow(obj)}
            </div>
        )
    }
    /**
     * アイテムリストを取得する
     *
     * @param  {array[]} list リスト
     * @param  {bool} show 表示フラグ
     * @return {object} html
     */
    getItemList(list, show) {
        if(!show) {
            return (
                <div/>
            )
        }

        return (
            <div>
                {list.map((obj) =>
                    <span key={obj.ID}>
                        {this.gatItem(obj)}
                    </span>
                )}
            </div>
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let list = this.props.contributionList.list
        if (list == undefined) {
            list = []
        }

        let order = this.props.contributionList.order - 1
        if (order < 0) {
            order = 0
        }

        let newLine = (list.length - (order * VIEW_PAGE_LIMIT))
        let oldList = list.slice(0, list.length - newLine)
        let newList = list.slice(list.length - newLine, list.length)
        if (this.props.contributionList.init) {
            oldList = list
            newList = []
        }


        let nextButton
        if (newLine >= VIEW_PAGE_LIMIT) {
            nextButton = (
                <Button onClick={() => this.next()}>
                    <Glyphicon glyph="chevron-down"/>
                </Button>
            )
        } else {
            nextButton = (
                <Button disabled>
                    <Glyphicon glyph="minus"/>
                </Button>
            )
        }

        var self = this
        if (!this.props.contributionList.next) {
            setTimeout(() => {self.props.next()}, 200)
        }

        return (
            <div>
                <Well>
                    <br/>
                    <p>
                        現在、○○件投稿されています
                    </p>
                    <p>
                        <Button bsStyle="primary">
                            投稿する
                        </Button>
                    </p>
                </Well>
                <div>
                    {this.getItemList(oldList, true)}

                    <Collapse in={this.props.contributionList.next} timeout={3000}>
                         {this.getItemList(newList, this.props.contributionList.next)}
                    </Collapse>
                    <ButtonGroup vertical block>
                        {nextButton}
                    </ButtonGroup>
                </div>
                <Footer/>
            </div>
        )
    }
}

List.propTypes = {
    contributionList: PropTypes.object,
    getList: PropTypes.func,
    next: PropTypes.func,
    addItem: PropTypes.func,
    deleteItem: PropTypes.func,
    showError: PropTypes.func,
}
