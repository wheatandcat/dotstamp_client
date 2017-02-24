import React, {PropTypes, Component} from "react"
import {Link} from "react-router"

import {PageHeader, Glyphicon, Row,Col,Tab,Nav,NavItem,ButtonToolbar,Button} from "react-bootstrap"
import ContributionShow from "../../contribution/containers/show"
import {DateTimeFormat} from "../../utils/common"


export default class ContributionList extends Component {
    componentWillMount() {
        this.getList()
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

        return (
            <div>
                <PageHeader>&nbsp;投稿一覧</PageHeader>
                <Tab.Container id="left-tabs-example" defaultActiveKey={1} onSelect={this.setContribution.bind(this)}>
                    <Row>
                        <Col xs={3} md={2}>
                            <Nav bsStyle="pills" stacked>
                                {list.map((item) => <NavItem key={item.ID} eventKey={item.ID}>
                                    <p>
                                        {item.Title}
                                    </p>
                                    {DateTimeFormat(item.CreatedAt)}
                                </NavItem>)}
                            </Nav>
                        </Col>
                        <Col xsHidden md={10}>
                            <div>
                                <ButtonToolbar>
                                    <Link to={this.getEditPath(this.props.userContributionList.ContributionId)}>
                                        <Button bsStyle="success">
                                            <Glyphicon glyph="edit"/>&nbsp;編集
                                        </Button>
                                    </Link>
                                    <Button bsStyle="danger" onClick={
                                    () => this.deleteContribution(this.props.userContributionList.ContributionId)}>
                                        <Glyphicon glyph="trash"/>&nbsp;削除
                                    </Button>
                                </ButtonToolbar>
                            </div>
                            <hr/>
                            <ContributionShow params={{
                                id: 0
                            }}/>
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
}
