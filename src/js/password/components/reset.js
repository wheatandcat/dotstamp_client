/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import { FormGroup,Button,ControlLabel,PageHeader} from "react-bootstrap"

export default class Reset extends Component {
    componentWillMount() {
        console.log (this.props.params)
        this.props.check(this.props.params.email, this.props.params.keyword)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        // チェック処理後に表示
        //
        return (
            <div>
                <PageHeader>パスワードを再設定する</PageHeader>
                <ControlLabel>パスワード</ControlLabel>
                <FormGroup controlId="formHorizontalEmail">
                    <input
                        type="password"
                        className="form-control"
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
    passwordInput: PropTypes.object,
}
