import PropTypes from "prop-types"
/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, { Component } from "react"
import { FormGroup,Button,ControlLabel,PageHeader,ListGroup,ListGroupItem,Alert} from "react-bootstrap"

export default class Input extends Component {
    /**
     * 追加する
     */
    add() {
        let email = this.refs.email.value

        let action = {
            email: email,
        }

        this.props.add(action)
    }
    /**
     * 報告する
     */
    report() {
        if (!this.props.passwordInput.fetch) {
            return ""
        }

        if (this.props.passwordInput.warning) {
            return (
                <Alert bsStyle="warning">
                    {this.props.passwordInput.message}
                </Alert>
            )
        }

        return (
             <ListGroup>
                <ListGroupItem bsStyle="success">
                    メール送信しました。ご確認ください！
                </ListGroupItem>
            </ListGroup>
        )
    }

    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <div className="container">
                <PageHeader>パスワードを再設定する</PageHeader>
                {this.report()}
                <ControlLabel>メールアドレス</ControlLabel>
                <FormGroup controlId="formHorizontalEmail">
                    <input
                        type="text"
                        className="form-control"
                        ref="email"
                        placeholder="メールアドレス"
                    />
                </FormGroup>
                <Button bsStyle="success" onClick={() => this.add()}>
                    送信する
                </Button>
            </div>
        )
    }
}

Input.propTypes = {
    add: PropTypes.func,
    passwordInput: PropTypes.object,
}
