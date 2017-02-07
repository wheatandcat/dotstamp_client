/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import Http from "../../utils/http"
import {Link} from "react-router"
import { FormGroup, Col, Button, Grid, Row, Jumbotron, Form } from "react-bootstrap"

export default class Login extends Component {
    /**
     * ログインする
     */
    login() {
        let email = this.refs.email.value
        let password = this.refs.password.value

        let action = {
            email: email,
            password: password
        }

        Http.postApi("login/check/", action).then(() => {
            console.log("ログインしました")
            location.href = "/"
        }).catch((err) => {
            this.props.showError(err)
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <Grid>
                <br/>
                <br/>
                <Row className="show-grid">
                    <Col md={6}>
                        <Jumbotron>
                              <h1>Hello, .Stamp!</h1>
                              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                              <p><Button bsStyle="primary">Learn more</Button></p>
                        </Jumbotron>
                    </Col>
                    <Col md={6}>
                        <FormGroup controlId="formHorizontalEmail">
                            <input type="text" id="user" name="user" className="form-control" placeholder="メールアドレス" ref="email" />
                        </FormGroup>
                        <Form componentClass="fieldset" inline>
                            <FormGroup controlId="formHorizontalPassword">
                                <input type="text" className="form-control" id="password" name="password" placeholder="パスワード" ref="password" size="45"/>&nbsp;&nbsp;
                                <Button bsStyle="success" onClick={() => this.login()}>
                                    ログイン
                                </Button>
                            </FormGroup>
                        </Form>
                        <br />
                        <br />
                        <Link to="login/login">
                            <Button bsStyle="link">メールアドレスを入力して登録する場合は、こちら</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

Login.propTypes = {
    showError: PropTypes.func
}
