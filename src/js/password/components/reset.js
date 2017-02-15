/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import { FormGroup,Button,ControlLabel,PageHeader,Alert} from "react-bootstrap"

export default class Reset extends Component {
    componentWillMount() {
        this.props.check(this.props.params.email, this.props.params.keyword)
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

        return (
            <div>
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
                <Button bsStyle="success">
                    変更する
                </Button>
            </div>
        )
    }
}

Reset.propTypes = {
    params: PropTypes.object,
    check: PropTypes.func,
    passwordReset: PropTypes.object,
}
