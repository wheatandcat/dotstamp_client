/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import { FormGroup,Button,ControlLabel,PageHeader,Alert,Panel} from "react-bootstrap"
import {Link} from "react-router"

export default class Reset extends Component {
    componentWillMount() {
        this.props.check(this.props.params.email, this.props.params.keyword)
    }
    /**
     * 保存する
     */
    save() {
        let action = {
            email: this.props.params.email,
            keyword: this.props.params.keyword,
            password: this.refs.password.value
        }

        this.props.save(action)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        // チェック処理後に表示
        if (!this.props.passwordReset.fetch) {
            return (
                <div/>
            )
        }

        if (this.props.passwordReset.warning) {
            return (
                <Alert bsStyle="danger">
                    {this.props.passwordReset.message}
                </Alert>
            )
        }

        if (this.props.passwordReset.save) {
            return (
                <div>
                    <PageHeader>パスワードを再設定する</PageHeader>
                    <br />
                    <Panel header="パスワードを変更しました" bsStyle="success">
                        <Link to="/login/login">
                            ログインする
                        </Link>
                    </Panel>
               </div>
            )
        }

        return (
            <div className="container">
                <PageHeader>パスワードを再設定する</PageHeader>
                <ControlLabel>パスワード</ControlLabel>

                <FormGroup controlId="formHorizontalEmail">
                    <input
                        type="password" className="form-control"
                        id="password"
                        name="password"
                        placeholder="パスワード"
                        ref="password"
                    />
                </FormGroup>
                <Button bsStyle="success" onClick={() => this.save()}>
                    変更する
                </Button>
            </div>
        )
    }
}

Reset.propTypes = {
    params: PropTypes.object,
    check: PropTypes.func,
    save: PropTypes.func,
    passwordReset: PropTypes.object,
}
