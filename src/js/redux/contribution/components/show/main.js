import PropTypes from "prop-types"
import React, { Component } from "react"
import {Label, Well, Radio, FormGroup, Modal, Dropdown, MenuItem, Grid, Row, Col, Button, PageHeader, Glyphicon} from "react-bootstrap"

import ContributionShowFrame from "./frame"
import {PROBLEM_TYPE_SPAM, PROBLEM_TYPE_INAPPROPRIATE} from "../../../../constants/contribution"
import Footer from "../../../../utils/parts/footer"
import {FontNormal, Shift, HalfTop, Middle, Center, Large, Info, Paragraph, Gap} from "../../../../../css/common.css"
import {Author} from "../../../../../css/contribution.css"

import YouTube from "../../../../utils/youtube"
import Icon from "../../../../utils/parts/icon"
import Tag from "../../../../utils/parts/tag"
import {DateTimeFormat} from "../../../../utils/common"

export default class Main extends Component {
    componentWillMount() {
        if (this.props.params.id == 0) {
            return
        }

        this.getDetail(this.props.params.id)
    }
    /**
     * 詳細を取得する
     *
     * @param  {number} id 投稿ID
     */
    getDetail(id) {
        this.props.getDetail(id)
    }
    /**
     * フォロー追加する
     */
    addFollow() {
        if (this.props.params.id == 0) {
            return
        }

        this.props.addFollow({
            userContributionId : this.props.params.id,
        })
    }
    /**
     * フォロー削除する
     */
    deleteFollow() {
        if (this.props.params.id == 0) {
            return
        }

        this.props.deleteFollow({
            userContributionId : this.props.params.id,
        })
    }
    /**
     * フォローを取得する
     */
    getFollow() {
        if (!this.props.contributionShow.Load) {
            return ""
        }

        if (!this.props.loginAuth.Login) {
            return (
                <Button bsStyle="success" bsSize="small" disabled block>
                    <Glyphicon glyph="thumbs-up"/>&nbsp;フォローする(ゲストユーザーは使用できません)
                </Button>
            )
        }

        if (!this.props.contributionShow.Following) {
            return (
                <Button bsStyle="success" bsSize="small" block onClick={() => this.addFollow()}>
                    <Glyphicon glyph="thumbs-up"/>&nbsp;フォローする
                </Button>
            )
        }

        return (
            <Button bsStyle="success" bsSize="small" block onClick={() => this.deleteFollow()}>
                <Glyphicon glyph="thumbs-up"/>&nbsp;フォロー済み
            </Button>
        )
    }
    /**
     * 通報する
     */
    addProblem() {
        if (this.props.contributionShow.AddProblem) {
            return
        }

        this.props.addProblem({
            userContributionId: this.props.contributionShow.ID,
            type: this.props.contributionShow.ProblemType
        })
    }
    /**
     * 通報を取得する
     */
    getProblem() {
        if (this.props.params.id == 0) {
            return
        }

        var send = ""
        if (this.props.contributionShow.AddProblem) {
            send = (
                <div>
                    <br/>
                    <Well>
                        通報を送信しました。ご協力ありがとうございます。
                    </Well>
                </div>
            )
        }

        return (
            <Modal show={this.props.contributionShow.Problem} onHide={this.props.closeProblem}>
                <Modal.Header closeButton>
                    <Modal.Title>投稿を通報する</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>以下の理由で通報します。</h4>
                    <br />
                    <div className={Shift}>
                        <FormGroup>
                            <Radio
                                name="problemType"
                                value={PROBLEM_TYPE_SPAM}
                                checked={this.props.contributionShow.ProblemType==PROBLEM_TYPE_SPAM}
                                readOnly={this.props.contributionShow.ProblemType==PROBLEM_TYPE_SPAM}
                                onChange={() => this.props.setProblemType(PROBLEM_TYPE_SPAM)}
                            >
                                スパムです
                            </Radio>
                            <Radio
                                name="problemType"
                                value={PROBLEM_TYPE_INAPPROPRIATE}
                                checked={this.props.contributionShow.ProblemType==PROBLEM_TYPE_INAPPROPRIATE}
                                readOnly={this.props.contributionShow.ProblemType==PROBLEM_TYPE_INAPPROPRIATE}
                                onChange={() => this.props.setProblemType(PROBLEM_TYPE_INAPPROPRIATE)}
                            >
                                不適切な内容が含まれています
                            </Radio>
                        </FormGroup>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={() => this.addProblem()}>
                        <Glyphicon glyph="send"/>&nbsp;送信
                    </Button>
                    {send}
                </Modal.Footer>
            </Modal>
        )

    }
    /**
     * タイトルを取得する
     */
    getTitle() {
        if (this.props.contributionShow.User == undefined) {
            return ""
        }

        let tagList = this.props.contributionShow.TagList
        if (!Array.isArray(tagList)) {
            tagList = []
        }

        let followCount = this.props.contributionShow.FollowCount
        if (this.props.contributionShow.FollowCount < 0) {
            followCount = ""
        }

        return (
            <div>
                {this.getProblem()}
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <PageHeader>{this.props.contributionShow.Title}</PageHeader>
                            <div>
                                <Tag list={tagList}/>
                            </div>
                        </Col>
                        <Col xsHidden md={4}>
                            <div className={Center}>
                                <Glyphicon glyph="thumbs-up"/>
                                <span className={Large}>&nbsp;{followCount}</span>
                            </div>
                            {this.getFollow()}
                        </Col>
                    </Row>
                </Grid>
                <br />
                <div className={Info} >
                    <Grid>
                        <Row>
                            <Col sm={2} md={1} className={Paragraph}>
                                <Icon imageId={this.props.contributionShow.User.ProfileImageID}/>
                            </Col>
                            <Col sm={18} md={10} className={Author + " " + Gap}>
                                <div className={Middle}>
                                    {this.props.contributionShow.User.Name}
                                    &nbsp;&nbsp;&nbsp;<Glyphicon glyph="time"/>
                                    &nbsp;{DateTimeFormat(this.props.contributionShow.UpdatedAt)}に更新
                                </div>
                            </Col>
                            <Col  md={1} xsHidden>
                                <div className={"pull-right "+ HalfTop}>
                                    <Dropdown id="dropdown-custom-1" pullRight>
                                        <Dropdown.Toggle noCaret>
                                            <Glyphicon glyph="list" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <MenuItem eventKey="1" onClick={() => this.props.openProblem()}>
                                                <Glyphicon glyph="warning-sign"/>&nbsp;この記事を通報する
                                            </MenuItem>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <br />
            </div>
        )
    }
    /**
     * YouTubeを取得する
     *
     * @return {object} html
     */
    getYoutube() {
        if (this.props.contributionShow.Movie.movie_id == "") {
            return ""
        }

        return (
            <div className="container">
                 <Label bsStyle="success" className={FontNormal}>記事を読み上げる</Label>
                <br />
                <YouTube
                  videoId={this.props.contributionShow.Movie.movie_id}
                />
            </div>
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
                {this.getTitle()}
                {this.getYoutube()}
                <ContributionShowFrame
                    title = {this.props.contributionShow.Title}
                    body = {this.props.contributionShow.Body}
                />
                <Footer/>
            </div>
        )
    }
}

Main.propTypes = {
    params: PropTypes.object,
    getDetail: PropTypes.func,
    contributionShow: PropTypes.object,
    addFollow: PropTypes.func,
    deleteFollow: PropTypes.func,
    openProblem: PropTypes.func,
    closeProblem: PropTypes.func,
    setProblemType: PropTypes.func,
    addProblem:  PropTypes.func,
    loginAuth: PropTypes.object,
}
