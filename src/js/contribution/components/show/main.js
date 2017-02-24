import React, { Component, PropTypes } from "react"
import {Grid, Row, Col, Button, PageHeader, Glyphicon} from "react-bootstrap"
import ContributionShowFrame from "./frame"

import Footer from "../../../utils/parts/footer"
import {Middle, Center, Large, Info, Paragraph} from "../../../../css/common.css"
import {Author} from "../../../../css/contribution.css"

import Icon from "../../../utils/parts/icon"
import Tag from "../../../utils/parts/tag"
import {DateTimeFormat} from "../../../utils/common"

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
        this.props.addFollow({
            userContributionId : this.props.params.id,
        })
    }
    /**
     * フォロー削除する
     */
    deleteFollow() {
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
                            <Col xs={1} md={1} className={Paragraph}>
                                <Icon imageId={this.props.contributionShow.User.ProfileImageID}/>
                            </Col>
                            <Col xsHidden md={11} className={Author}>
                                <div className={Middle}>
                                    {this.props.contributionShow.User.Name}

                                    &nbsp;&nbsp;&nbsp;<Glyphicon glyph="time"/>
                                    &nbsp;{DateTimeFormat(this.props.contributionShow.UpdatedAt)}に更新
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
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div>
                {this.getTitle()}
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
}
