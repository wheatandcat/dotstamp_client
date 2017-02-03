/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import Http from "../../utils/http"
import { FormGroup, FormControl, Col, Button } from "react-bootstrap"

export default class New extends Component {

    new () {
        let email = this.refs.email.value
        let password = this.refs.password.value

        let action = {
            email: email,
            password: password
        }

        Http.postApi("login/new/", action).then((response) => {
            console.log (response)
            console.log("登録しました")
        }).catch((err) => {
            this.props.showError(err)
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <div>
                <FormGroup controlId="formHorizontalEmail">
                    <Col sm={10}>
                        <FormControl type="text" ref="email" placeholder="メールアドレス"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col sm={10}>
                        <FormControl type="password" ref="password" placeholder="パスワード" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10} onClick={() => this.new()}>
                        <Button type="submit">
                            規約に同意して登録する
                        </Button>
                    </Col>
                </FormGroup>
            </div>
        )
    }
}

New.propTypes = {
    showError: PropTypes.func,
}
