import React, { Component, PropTypes } from "react"
import ContributionTalk from "../../containers/talk/main"
import {Grid, Row, Col, Button, PageHeader, Glyphicon, Media} from "react-bootstrap"

import {Middle, Center, Large, Info, Paragraph} from "../../../../css/common.css"
import Icon from "../../../utils/parts/icon"
import Tag from "../../../utils/parts/tag"
import {DateTimeFormat} from "../../../utils/common"

export default class Frame extends Component {
    /**
     * タイトルを取得する
     */
    getTitle() {
        if (this.props.user == undefined) {
            return ""
        }

        let tagList = this.props.tagList
        if (!Array.isArray(tagList)) {
            tagList = []
        }

        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <PageHeader>{this.props.title}</PageHeader>
                            <div>
                                <Tag list={tagList}/>
                            </div>
                        </Col>
                        <Col xsHidden md={4}>
                            <div className={Center}>
                                <Glyphicon glyph="thumbs-up"/>
                                <span className={Large}>&nbsp;5</span>
                            </div>
                            <Button bsStyle="success" bsSize="small" block>
                                <Glyphicon glyph="thumbs-up"/>&nbsp;フォローする
                            </Button>
                        </Col>
                    </Row>
                </Grid>
                <br />
                <div className={Info} >
                    <div className="container">
                        <Media className={Paragraph}>
                            <Media.Left>
                                <Icon imageId={this.props.user.ProfileImageID}/>
                            </Media.Left>
                            <Media.Body className={Middle}>
                                &nbsp;{this.props.user.Name}
                            </Media.Body>
                            <Media.Right className={Middle}>
                                &nbsp;<Glyphicon glyph="time"/>
                            &nbsp;{DateTimeFormat(this.props.updatedAt)}に更新
                            </Media.Right>
                        </Media>
                    </div>
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
        let body = this.props.body
        if (!Array.isArray(body)) {
            body = []
        }

        return (
            <div>
                {this.getTitle()}
                <div className="container">
                    {body.map((obj) => <ContributionTalk key={obj.Priority} talk={obj} editMode={false}/>)}
                </div>
            </div>
        )
    }
}

Frame.propTypes = {
    title: PropTypes.string,
    body: PropTypes.array,
    tagList: PropTypes.array,
    user: PropTypes.object,
    updatedAt: PropTypes.string,
}
