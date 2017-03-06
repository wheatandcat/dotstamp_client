import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {Image, Well, Glyphicon, PageHeader, FormGroup, Col, Button, Grid, Row, Jumbotron, Form} from "react-bootstrap"
import {Full, Stamp, StampAddress} from "../../../css/common.css"

export default class Login extends Component {
    /**
     * ログインする
     */
    login() {
        let email = this.refs.email.value.trim()
        let password = this.refs.password.value.trim()

        this.props.loginCheck({
            email: email,
            password: password
        })
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
                        <Glyphicon glyph="log-in"/>&nbsp;ログイン
                    </PageHeader>
                </div>
                <Grid>
                    <br/>
                    <br/>
                    <Row>
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
                            <FormGroup controlId="formHorizontalEmail">
                                <input type="text" id="user" name="user" className="form-control" placeholder="メールアドレス" ref="email" />
                            </FormGroup>
                            <Form componentClass="fieldset" inline>
                                <FormGroup controlId="formHorizontalPassword">
                                    <input type="password" className="form-control" id="password" name="password" placeholder="パスワード" ref="password" size="45"/>&nbsp;&nbsp;
                                    <Button bsStyle="success" onClick={() => this.login()}>
                                        ログイン
                                    </Button>
                                    <br />
                                    <Link to="/password/input">
                                        <Button bsStyle="link">パスワードを忘れた場合は、こちら</Button>
                                    </Link>
                                </FormGroup>

                            </Form>
                            <br />
                            <br />
                            <Link to="login/new">
                                <Button bsStyle="link">メールアドレスを入力して登録する場合は、こちら</Button>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

Login.propTypes = {
    loginCheck: PropTypes.func
}
