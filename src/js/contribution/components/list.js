import React, {Component, PropTypes} from "react"

import {Button, ButtonGroup, Well ,Glyphicon, Collapse} from "react-bootstrap"
import Footer from "../../utils/parts/footer"
import Thumbnail from "../../utils/parts/contribution/thumbnail"
import ContributionShowFrame from "../components/show/frame"
import {Line, Toggle} from "./../../../css/common.css"


const VIEW_PAGE_LIMIT = 10

export default class List extends Component {
    componentWillMount() {
        this.getList(true)
    }
    /**
     * リストを取得する
     *
     * @param  {bool} init 初期取得フラグ
     */
    getList(init) {
        let action = {
            order: this.props.contributionList.order
        }

        this.props.getList(action, {init})
    }

    /**
     * 次のページを取得する
     */
    next() {
        this.getList(false)
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
                    <hr />
                    <ContributionShowFrame
                        title = {item.title}
                        body = {item.body}
                        tagList = {item.tagList}
                    />
                    <hr className={Line}/>
                    <Button className={Toggle} onClick={() => this.props.deleteItem(obj.ID)}>
                        <Glyphicon glyph="chevron-up"/>
                    </Button>
                </div>
            )
        }

        return (
            <div>
                <hr className={Line}/>
                <Button className={Toggle} onClick={() => this.props.addItem(obj.ID)}>
                    <Glyphicon glyph="chevron-down"/>
                </Button>
            </div>
        )
    }
    /**
     * アイテムを取得する
     *
     * @param  {object} item アイテム
     * @return {object} html
     */
    gatItem(item) {
        return (
            <div key={item.ID}>
                <Thumbnail {...item} />
                {this.getItemShow(item)}
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
                {list.map((item) => {
                    return this.gatItem(item)
                })}
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
                    <div className="container">
                        <br/>
                        <p>
                            現在、○○件投稿されています
                        </p>
                        <Button bsStyle="primary">
                            投稿する
                        </Button>
                    </div>
                </Well>
                <div className="container">
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
}
