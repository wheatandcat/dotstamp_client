import React, {PropTypes, Component} from "react"
import Http from "../../utils/http"
import {Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export default class Auth extends Component {
    componentWillMount () {
        this.auth()
    }
    /**
     * 認証する
     */
    auth() {
        Http.postApi("login/auth/").then((response) => {
            this.props.auth(response.body)
        }).catch((err) => {
            this.props.showError(err)
        })
    }
    /**
     * メニューを取得する
     *
     * @return {object}  html
     */
    getMenu() {
        if (!this.props.loginAuth.Login) {
            return this.noLogin()
        }

        return this.login()
    }
    /**
     * ログイン状態のメニューを取得する
     *
     * @return {object} html
     */
    login() {
        return (
            <Nav pullRight>
                <LinkContainer to="/contribution/new">
                    <NavItem eventKey={1}>
                        <Glyphicon glyph="edit"/>&nbsp;投稿する
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/user/contributionList">
                    <NavItem eventKey={2}>
                        <Glyphicon glyph="list-alt"/>&nbsp;投稿一覧
                    </NavItem>
                </LinkContainer>
                <NavDropdown eventKey={3} title={this.props.loginAuth.Name} id="basic-nav-dropdown">
                    <LinkContainer to="/user/profile">
                        <MenuItem eventKey={3.1}>
                            <Glyphicon glyph="user"/>&nbsp;プロフィール
                        </MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/character/list">
                        <MenuItem eventKey={3.2}>
                            <Glyphicon glyph="picture"/>&nbsp;キャラ設定
                        </MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/help/index">
                        <MenuItem eventKey={3.3}>
                            <Glyphicon glyph="question-sign"/>&nbsp;ヘルプ
                        </MenuItem>
                    </LinkContainer>
                    <MenuItem divider />
                    <LinkContainer to="/user/logout">
                        <MenuItem eventKey={3.4}>
                            <Glyphicon glyph="log-out"/>&nbsp;ログアウト
                        </MenuItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
        )
    }
    /**
     * ログイン無し状態のメニューを取得する
     *
     * @return {object} html
     */
    noLogin() {
        return (
            <Nav pullRight>
                <LinkContainer to="/login/new">
                    <NavItem eventKey={1} >
                        ログインする
                    </NavItem>
                </LinkContainer>
            </Nav>
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <span>{this.getMenu()}</span>
        )
    }
}

Auth.propTypes = {
    auth: PropTypes.func,
    showError: PropTypes.func,
    loginAuth: PropTypes.object,
}
