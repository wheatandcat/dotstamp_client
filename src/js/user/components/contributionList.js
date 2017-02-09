import React, {PropTypes, Component} from "react"
import Http from "../../utils/http"
import {Link} from "react-router"
import {DateFormat} from "../../utils/common"

import {Grid,Row,Col,Tab,Nav,NavItem,ButtonToolbar,Button} from "react-bootstrap"
import ContributionShow from "../../contribution/containers/show"

export default class ContributionList extends Component {
    componentWillMount() {
        this.getList()
    }
    /**
     * リストを取得する
     */
    getList() {
        Http.postApi("user/contributionList/").then((response) => {
            this.props.getList(response.body)

            if (Array.isArray(response.body) && response.body.length > 0) {
                this.setContribution(response.body[0].ID)
            }
        })
    }
    /**
     * 投稿を設定する
     *
     * @param  {number} id 投稿ID
     */
    setContribution(id) {
        this.props.setContribution(id)
        this.getDetail(id)
    }
    /**
     * 詳細を取得する
     *
     * @param  {number} id 投稿ID
     */
    getDetail(id) {
        Http.postApi("contribution/show/" + id).then((response) => {
            this.props.getDetail(response.body.Title, response.body.Body, response.body.Tag)
        })
    }
    /**
     * 作品を削除する
     *
     * @param  {number} id 投稿ID
     */
    deleteContribution(id) {
        Http.postApi("contribution/delete/" + id).then((response) => {
            this.props.getList(response.body)
        })
    }
    /**
     * 編集パスを取得する
     *
     * @param  {{number}} id 投稿ID
     * @return {{string}} 編集パス
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
        let list = this.props.userContributionList.list
        if (!Array.isArray(list)) {
            list = []
        }

        let body = this.props.contributionShow.body
        if (!Array.isArray(body)) {
            body = []
        }

        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <h2>投稿</h2>
                            <br/>
                            <Tab.Container id="left-tabs-example" defaultActiveKey={1} onSelect={this.setContribution.bind(this)}>
                                <Nav bsStyle="pills" stacked>
                                    {list.map((obj) => <NavItem key={obj.ID} eventKey={obj.ID}>
                                        <p>
                                            {obj.Title}
                                        </p>
                                        2014/12/21 10:00:00
                                    </NavItem>)}
                                </Nav>
                            </Tab.Container>
                        </Col>
                        <Col xs={12} md={8}>
                            <br/>
                            <div>
                                <ButtonToolbar>
                                    <Button>
                                        <Link to={this.getEditPath(this.props.userContributionList.contributionId)}>
                                            編集
                                        </Link>
                                    </Button>
                                    <Button bsStyle="danger" onClick={
                                    () => this.deleteContribution(this.props.userContributionList.contributionId)}>
                                        削除
                                    </Button>
                                </ButtonToolbar>
                            </div>
                            <hr/>
                            <ContributionShow params={{
                                id: 0
                            }}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

ContributionList.propTypes = {
    getList: PropTypes.func,
    getDetail: PropTypes.func,
    setContribution: PropTypes.func,
    contributionShow: PropTypes.object,
    userContributionList: PropTypes.object,
}
