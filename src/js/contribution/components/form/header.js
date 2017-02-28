import React, {Component, PropTypes} from "react"
import {Label, ButtonToolbar, Dropdown, Button, MenuItem, ListGroup, ListGroupItem, FormGroup, Form, Glyphicon} from "react-bootstrap"
import {VIEW_STATUS_PUBLIC, VIEW_STATUS_PRIVATE, TAG_MAX_NUMBER} from "../../../constants/contribution"

import FormMain from "../../containers/form/main"
import TalkBoard from "../../containers/talk/board"
import AlertMessage from "../../../error/containers/alertMessage"

import {Preview, Group, GroupList} from "./../../../../css/form.css"
import {Item} from "./../../../../css/tag.css"
import {Close} from "./../../../../css/common.css"

var self

window.addEventListener("resize", () => {
    if (self == undefined) {
        return
    }

    self.props.changeHeight(window.innerHeight)
})

window.onbeforeunload = function(){
    if (self == undefined) {
        return
    }

    let hash = location.hash
    if (hash.indexOf("contribution/new") == -1 && hash.indexOf("contribution/edit") == -1) {
        return
    }

    if (self.props.contributionId == null) {
        let title = self.refs.title.value
        let body = self.props.contributionTalk
        if (title == "" && JSON.stringify(body) == "[]") {
            return
        }
    } else {
        let title = self.refs.title.value
        let body = self.props.contributionTalk

        if (title == self.props.contributionEdit.saveData.title && JSON.stringify(body) == self.props.contributionEdit.saveData.body) {
            return
        }
    }

    return true
}


export default class Header extends Component {
    componentWillMount() {
        this.props.alertMessageInit()

        self = this
        if (this.props.title != "") {
            this.props.changeTitle(this.props.title)
        }

        this.props.changeHeight(window.innerHeight)
    }
    /**
     * 描写更新後に実行する
     */
    componentDidUpdate() {
        // スクロールを下へ
        if (this.props.contributionForm.boardScroll) {
            this.setScroll()
        }
    }
    /**
     * スクロール設定する
     */
    setScroll() {
        if (this.props.contributionTalk.length > 0) {
            let node = this.refs.preview
            node.scrollTop = node.scrollHeight
        }
    }
    /**
     * 保存する
     */
    save() {
        let contributionId = this.props.contributionId
        let title = this.refs.title.value.trim()
        let tag = (contributionId == null)
            ? this.refs.tag.value.trim()
            : ""
        let body = this.props.contributionTalk
        let action = {
            userContributionId: contributionId,
            title: title,
            tag: tag,
            body: JSON.stringify(body),
            viewStatus: this.props.contributionForm.viewStatus
        }

        if (action.title == "") {
            this.props.alertMessage("タイトルを入力して下さい")
            return
        } else if (action.title.length > 100) {
            this.props.alertMessage("タイトルが100文字を超えています。("+action.title.length+"文字)")
            return
        } else if (action.body == "[]") {
            this.props.alertMessage("本文を入力して下さい")
            return
        } else if (action.tag.split(" ").length > 10) {
            this.props.alertMessage("タグ登録は10個までです")
            return
        }

        if (contributionId == null) {
            this.props.new(action)
        } else {
            this.props.save(action, action)
        }
    }
    /**
     * タイトルを変更する
     */
    changeTitle() {
        this.props.changeTitle(this.refs.title.value)
    }
    /**
     * タグを変更する
     */
    changeTag() {
        this.props.changeTag(this.refs.tag.value)
    }

    /**
     * タグ入力を取得する
     *
     * @return {object}  html
     */
    getInputTag() {
        return (
            <FormGroup>
                <input type="text" id="tag" className="form-control" placeholder="タグをスペース区切りで5つまで入力（例：映画 2001年宇宙の旅）" ref="tag" value={this.props.contributionForm.tag} onChange={this.changeTag.bind(this)}/>
            </FormGroup>
        )
    }
    /**
     * タグ追加する
     */
    addTag() {
        let tag = this.refs.addTag.value.trim()
        if (tag.length > 20) {
            this.props.alertMessage("タグは20文字まで")
            return
        }

        this.props.addTag({
            userContributionId: this.props.contributionId,
            name: tag,
        })

        this.refs.addTag.value = ""

    }
    /**
     * タグを削除する
     */
    deleteTag(id) {
        this.props.deleteTag({
            userContributionId: this.props.contributionId,
            id: id,
        })
    }
    /**
     * タグ入力
     */
    addTagInput() {
        let tagList = this.props.contributionForm.tagList
        if (!Array.isArray(tagList)) {
            tagList = []
        }

        if(tagList.length >= TAG_MAX_NUMBER) {
            return (
                <FormGroup>
                    <Label bsStyle="danger">
                        タグ登録は10個まで
                    </Label>
                </FormGroup>
            )
        }


        return (
            <FormGroup>
                <input type="text" className="form-control" placeholder="タグを追加する" ref="addTag" />
                <Button onClick={() => this.addTag()}>
                    追加
                </Button>
            </FormGroup>
        )
    }
    /**
     * タグを取得する
     *
     * @return {object} html
     */
    getTag() {
        if (this.props.contributionId == null) {
            return this.getInputTag()
        }

        let tagList = this.props.contributionForm.tagList
        if (!Array.isArray(tagList)) {
            tagList = []
        }

        return (
            <FormGroup>
                <Form inline>
                    {tagList.map((tag) => {
                        return (
                            <span key={tag.ID}>&nbsp;
                                <Label bsStyle="info" className={Item}>
                                    <Glyphicon
                                        glyph="remove"
                                        className={Close}
                                        onClick={() => this.deleteTag(tag.ID)}
                                    />&nbsp;
                                    <span>{tag.Name}</span>
                                </Label>
                            </span>
                        )
                    })}
                    &nbsp;
                    {this.addTagInput()}
                </Form>
            </FormGroup>
        )
    }
    /**
     * ボードスタイルを取得する
     *
     * @return {object} スタイル
     */
    getBoardStyle() {
        let height = this.props.contributionForm.height - 480

        return {
            height: height + "px"
        }
    }
    /**
     * 表示状態を取得する
     *
     * @return {object} html
     */
    getViewStatus() {
        let viewStausMap = []
        viewStausMap[VIEW_STATUS_PUBLIC] = {
            eventKey: 1,
            text: "投稿する　",
            glyph: "edit",
            status: VIEW_STATUS_PUBLIC,
        }
        viewStausMap[VIEW_STATUS_PRIVATE] = {
            eventKey: 2,
            text: "下書き保存",
            glyph: "floppy-disk",
            status: VIEW_STATUS_PRIVATE,
        }

        let viewStaus = (item) => {
            if (item.status == this.props.contributionForm.viewStatus) {
                return (
                    <MenuItem eventKey={item.eventKey} key={item.eventKey} active>
                        <Glyphicon glyph={item.glyph}/>&nbsp;{item.text}
                    </MenuItem>
                )
            }

            return (
                <MenuItem eventKey={item.eventKey} key={item.eventKey} onClick={() => this.props.setViewStatus(item.status)}>
                    <Glyphicon glyph={item.glyph}/>&nbsp;{item.text}
                </MenuItem>
            )
        }

        let status = viewStausMap[this.props.contributionForm.viewStatus]
        return (
            <Dropdown id="dropdown-custom-1">
                <Button onClick={() => this.save()}>
                    <Glyphicon glyph={status.glyph} />&nbsp;{status.text}
                </Button>
                <Dropdown.Toggle/>
                <Dropdown.Menu className="super-colors">
                    {viewStausMap.map((item) => {
                        return viewStaus(item)
                    })}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                <ListGroup className={Group}>
                    <ListGroupItem>
                        <AlertMessage />
                        <FormGroup>
                            <input type="text" id="title" className="form-control" placeholder="タイトル(100文字以内)" ref="title" value={this.props.contributionForm.title} onChange={this.changeTitle.bind(this)}/>
                        </FormGroup>
                        {this.getTag()}

                        <ButtonToolbar>
                            {this.getViewStatus()}
                        </ButtonToolbar>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className={Preview} ref="preview" style={this.getBoardStyle()}>
                            <TalkBoard talkList={this.props.contributionTalk}/>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem bsClass={GroupList}>
                        <footer>
                            <FormMain contributionId={this.props.contributionId}/>
                        </footer>
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

Header.propTypes = {
    changeTitle: PropTypes.func,
    changeHeight: PropTypes.func,
    changeTag: PropTypes.func,
    setViewStatus: PropTypes.func,
    contributionForm: PropTypes.object,
    contributionId: PropTypes.number,
    contributionTalk: PropTypes.array,
    title: PropTypes.string,
    new: PropTypes.func,
    save: PropTypes.func,
    addTag: PropTypes.func,
    deleteTag: PropTypes.func,
    alertMessage: PropTypes.func,
    alertMessageInit: PropTypes.func,
}
