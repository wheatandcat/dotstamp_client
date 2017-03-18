import React, {PropTypes, Component} from "react"
import {Link} from "react-router"
import {Typeahead} from "react-bootstrap-typeahead"
import {Modal, Tabs, Tab, PageHeader, Glyphicon, Row, Col, Nav, NavItem, ButtonToolbar, Button} from "react-bootstrap"
import ContributionShow from "../../contribution/containers/show"
import {DateTimeFormat} from "../../utils/common"

import {VIEW_STATUS_PUBLIC, VIEW_STATUS_PRIVATE} from "../../constants/contribution"

var load = false
var tite = ""
export default class ContributionList extends Component {
    componentWillMount() {
        this.props.init()
        this.getList()
    }
    componentWillUpdate() {
        if (!load && this.props.userContributionList.ContributionId != 0) {
            load = true
            this.setContribution(this.props.userContributionList.ContributionId)
        }
    }
    /**
     * リストを取得する
     */
    getList() {
        this.props.getList()
    }
    /**
     * 投稿を設定する
     *
     * @param  {number} id 投稿ID
     */
    setContribution(id) {
        this.props.setContribution(id)
        this.props.getDetail(id)
    }
    /**
     * 作品を削除する
     *
     * @param  {number} id 投稿ID
     */
    deleteContribution(id) {
        this.props.delete(id)
    }
    /**
     * 編集パスを取得する
     *
     * @param  {number} id 投稿ID
     * @return {string} 編集パス
     */
    getEditPath(id) {
        return "/contribution/edit/" + id
    }
    /**
     * タイトルを変更する
     *
     * @param  {string[]} text テキスト
     */
    changeTitle(text) {
        this.searchTitle(text[0])
    }
    /**
     * タイトルを入力する
     *
     * @param  {object} text テキスト
     */
    inputTitle(text) {
        this.searchTitle(text.target.value)
    }
    /**
     * タイトルを検索する
     *
     * @param  {string} text テキスト
     */
    searchTitle(text) {
        let list = []
        let count = 0
        let all = this.props.userContributionList.All
        let length = all.length
        tite = text

        all.forEach((item) => {
            if (item.Title.indexOf(text) != -1) {
                if(item.view_status == this.props.userContributionList.ViewStatus) {
                    list.push(item)
                }
            }

            count++

            if (count >= length) {
                this.props.setTitleSearch(list)
            }
        })
    }
    /**
     * 公開状態を設定する
     *
     * @param  {numbet} status 状態
     */
    setViewStatus(status) {
        this.props.setViewStatus(status)
        this.searchTitle(tite)
    }
    /**
     * 削除確認を取得する
     */
    getDeleteConfirm() {
        return (
            <Modal show={this.props.userContributionList.DeleteConfirm} onHide={this.props.closeDeleteConfirm}>
                <Modal.Header closeButton>
                    <Modal.Title>投稿削除</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    投稿を削除します。よろしいですか？
                    <br />
                    <br />
                    <ButtonToolbar>
                        <Button bsStyle="danger" onClick={() => this.deleteContribution(this.props.userContributionList.ContributionId)}>削除する</Button>
                        <Button onClick={() => this.props.closeDeleteConfirm()}>キャンセル</Button>
                    </ButtonToolbar>
                </Modal.Body>
            </Modal>
        )
    }

    /**
     * 操作を取得する
     */
    getControl() {
        let disabled = false
        let text = ""
        if (this.props.userContributionList.ContributionId == 0) {
            disabled = true
            text = "（※選択されていません）"
        }

        return (
            <ButtonToolbar>
                <Link to={this.getEditPath(this.props.userContributionList.ContributionId)}>
                    <Button bsStyle="success" disabled={disabled}>
                        <Glyphicon glyph="edit"/>&nbsp;編集
                    </Button>
                </Link>
                <Button
                    bsStyle="danger"
                    onClick={() => this.props.openDeleteConfirm()}
                    disabled={disabled}
                >
                    <Glyphicon glyph="trash"/>&nbsp;削除
                </Button>
                {text}
            </ButtonToolbar>
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let list = this.props.userContributionList.List
        if (!Array.isArray(list)) {
            list = []
        }

        let body = this.props.contributionShow.body
        if (!Array.isArray(body)) {
            body = []
        }

        let side
        if (list.length == 0) {
            side = (
                <div>
                    一致する投稿はありませんでした。
                </div>
            )
        } else {
            side = (
                <Nav bsStyle="pills" stacked>
                    {list.map((item) => <NavItem key={item.ID} eventKey={item.ID}>
                        <p>
                            {item.Title}
                        </p>
                        {DateTimeFormat(item.CreatedAt)}
                    </NavItem>)}
                </Nav>
            )
        }

        let contribution = ""

        if (this.props.userContributionList.ContributionId != 0) {
            contribution = (
                <div style={{zoom: "75%"}}>
                    <ContributionShow params={{
                        id: 0
                    }}/>
                </div>
            )
        }


        return (
            <div className="container">
                {this.getDeleteConfirm()}
                <PageHeader>
                    <Glyphicon glyph="list-alt"/>&nbsp;投稿一覧
                </PageHeader>
                <Tab.Container id="left-tabs-example" onSelect={this.setContribution.bind(this)} activeKey={this.props.userContributionList.ContributionId}>
                    <Row>
                        <Col sm={3}>
                            <Tabs defaultActiveKey={VIEW_STATUS_PRIVATE} animation={false} id="noanim-tab" onSelect={this.setViewStatus.bind(this)}>
                                <Tab eventKey={VIEW_STATUS_PRIVATE} title="下書き"></Tab>
                                <Tab eventKey={VIEW_STATUS_PUBLIC} title="公開中"></Tab>
                            </Tabs>
                            <Typeahead
                                options={this.props.userContributionList.TitleList}
                                maxVisible={2}
                                placeholder="タイトル検索"
                                onChange={this.changeTitle.bind(this)}
                                onBlur={this.inputTitle.bind(this)}
                            />
                            <br />
                            {side}
                        </Col>
                        <Col sm={8}>
                            <div>
                                {this.getControl()}
                            </div>
                            <hr/>
                            {contribution}

                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

ContributionList.propTypes = {
    getList: PropTypes.func,
    getDetail: PropTypes.func,
    delete: PropTypes.func,
    setContribution: PropTypes.func,
    contributionShow: PropTypes.object,
    userContributionList: PropTypes.object,
    setTitleSearch: PropTypes.func,
    setViewStatus: PropTypes.func,
    init: PropTypes.func,
    closeDeleteConfirm: PropTypes.func,
    openDeleteConfirm: PropTypes.func,
}
