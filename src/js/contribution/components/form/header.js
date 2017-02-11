import React, {Component, PropTypes} from "react"
import {Button, ButtonToolbar, SplitButton, MenuItem, ListGroup, ListGroupItem, FormGroup, FormControl, Form} from "react-bootstrap"

import FormMain from "../../containers/form/main"
import TalkBoard from "../../containers/talk/board"

import {Preview, Footer, Group, GroupList} from "./../../../../css/form.css"

var self

window.addEventListener("resize", () => {
    if (self == undefined) {
        return
    }

    self.props.changeHeight(window.innerHeight)
})

export default class Header extends Component {
    componentWillMount() {
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
        let title = this.refs.title.value
        let tag = (contributionId == null)
            ? this.refs.tag.value
            : ""
        let body = this.props.contributionTalk
        let action = {
            userContributionId: contributionId,
            title: title,
            tag: tag,
            body: JSON.stringify(body)
        }

        if (contributionId == null) {
            this.props.new(action)
        } else {
            this.props.save(action)
        }
    }
    /**
     * タイトルを変更する
     *
     * @param  {object} event イベント
     */
    changeTitle() {
        this.props.changeTitle(this.refs.title.value)
    }
    /**
     * タグを変更する
     *
     * @param  {object} event イベント
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
                            <Button key={tag.ID}>
                                <span>ｘ</span>
                                <span>{tag.Name}</span>
                            </Button>
                        )
                    })}
                    <FormGroup>
                        <FormControl type="text"/>
                        <Button>
                            追加
                        </Button>
                    </FormGroup>
                </Form>
            </FormGroup>
        )
    }
    /**
     * ボードのstyleを取得する
     *
     * @return {object} style
     */
    getBoardStyle() {
        let height = this.props.contributionForm.height - 470

        return {
            height: height + "px"
        }
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
                        <FormGroup>
                            <input type="text" id="title" className="form-control" placeholder="タイトル(100文字以内)" ref="title" value={this.props.contributionForm.title} onChange={this.changeTitle.bind(this)}/>
                        </FormGroup>
                        {this.getTag()}
                        <ButtonToolbar>
                            <SplitButton title="投稿する" dropup id="split-button-dropup" onClick={() => this.save()}>
                                <MenuItem eventKey="1">
                                    下書き保存
                                </MenuItem>
                                <MenuItem eventKey="2">
                                    投稿する
                                </MenuItem>
                                <MenuItem eventKey="3">
                                    Something else here
                                </MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey="4">
                                    Separated link
                                </MenuItem>
                            </SplitButton>
                        </ButtonToolbar>
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className={Preview} ref="preview" style={this.getBoardStyle()}>
                            <TalkBoard talkList={this.props.contributionTalk}/>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem bsClass={GroupList}>
                        <footer className={Footer + "container"}>
                            <FormMain/>
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
    contributionForm: PropTypes.object,
    contributionId: PropTypes.number,
    contributionTalk: PropTypes.array,
    title: PropTypes.string,
    new: PropTypes.func,
    save: PropTypes.func,
}
