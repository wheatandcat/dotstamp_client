/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import {Alert, ButtonToolbar, FormGroup, Col, Button, Grid, Row, Jumbotron} from "react-bootstrap"

export default class New extends Component {
    new() {
        let email = this.refs.email.value
        let password = this.refs.password.value

        this.props.new({
            email: email,
            password: password
        })
    }
    /**
     * 警告を取得する
     *
     * @return {object} html
     */
    getAlert() {
        if(!this.props.loginNew.Warning) {
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
                        {this.getAlert()}
                        <FormGroup controlId="formHorizontalEmail">
                            <input type="text" className="form-control" id="user" name="user" placeholder="メールアドレス" ref="email" />
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <input type="password" className="form-control" id="password" name="password" placeholder="パスワード" ref="password"/>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={4}>
                                <ButtonToolbar>
                                    <Button bsStyle="link">キャンセル</Button>
                                    <Button bsStyle="success" onClick={() => this.new()}>
                                        規約に同意して登録する
                                    </Button>
                                </ButtonToolbar>
                            </Col>
                        </FormGroup>
                        <br />
                        <br />
                        <Link to="login/login">
                            <Button bsStyle="link">登録済みの場合は、こちら</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

New.propTypes = {
    new: PropTypes.func,
    loginNew: PropTypes.object,
}
