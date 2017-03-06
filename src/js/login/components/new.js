/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {Well, Image, PageHeader, Alert, ButtonToolbar, FormGroup, Col, Button, Grid, Row, Jumbotron} from "react-bootstrap"
import {Full, Stamp, StampAddress} from "../../../css/common.css"
import {PASSWORD_LENGTH_MIN} from "../../constants/common"

export default class New extends Component {
    componentWillMount() {}
    /**
     * 新規登録する
     */
    new() {
        let email = this.refs.email.value.trim()
        let password = this.refs.password.value.trim()

        if (!email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
            this.props.alert("使用できないメールアドレスです")
            return
        }

        if (password.length < PASSWORD_LENGTH_MIN) {
            this.props.alert("パスワードは8文字以上に設定して下さい")
            return
        }

        this.props.new({email: email, password: password})
    }
    /**
     * 警告を取得する
     *
     * @return {object} html
     */
    getAlert() {
        if (!this.props.loginNew.Warning) {
            return ""
        }

        return (
            <Alert bsStyle="danger">
                {this.props.loginNew.Message}
            </Alert>
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
                <div className="container">
                    <PageHeader>
                        .stamp&nbsp;&nbsp;新規ユーザ登録をする
                    </PageHeader>
                </div>
                <Grid>
                    <br/>
                    <br/>
                    <Row className="show-grid">
                        <Col md={6}>
                            <Well className={Stamp}>
                                <table className={Full}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Image src="/static/images/common/icon.png" rounded/>
                                            </td>
                                            <td className={StampAddress}>
                                                    □□□□□□
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Jumbotron className={Stamp}>
                                    <h1>Hello,&nbsp;.Stamp!</h1>
                                    <br />
                                    <br />
                                    <br />
                                    <Image src="/static/images/common/doc.png" rounded/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<Button bsStyle="primary">Learn more</Button>
                                </Jumbotron>
                            </Well>
                        </Col>
                        <Col md={6}>
                            {this.getAlert()}
                            <FormGroup controlId="formHorizontalEmail">
                                <input type="text" className="form-control" id="user" name="user" placeholder="メールアドレス" ref="email"/>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalPassword">
                                <input type="password" className="form-control" id="password" name="password" placeholder="パスワード" ref="password"/>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={4}>
                                    <ButtonToolbar>
                                        <Button bsStyle="success" onClick={() => this.new()}>
                                            規約に同意して登録する
                                        </Button>
                                    </ButtonToolbar>
                                </Col>
                            </FormGroup>
                            <br/>
                            <br/>
                            <Link to="login/login">
                                <Button bsStyle="link">登録済みならばログインから</Button>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

New.propTypes = {
    new: PropTypes.func,
    loginNew: PropTypes.object,
    alert: PropTypes.func,
}
