import PropTypes from "prop-types"
import React, { Component } from "react"
import {PageHeader, Alert, Col, Grid, Row} from "react-bootstrap"
import {PASSWORD_LENGTH_MIN} from "../../../constants/common"
import {Hello, NewInput} from "../../../component/login/"

export default class New extends Component {
  componentWillMount() {}
  /**
   * 新規登録する
   */
  new(email :string, password: string) {
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
              <Hello
                open={this.props.loginNew.Open}
                text={this.props.loginNew.Text}
              />
            </Col>
            <Col md={6}>
              {(() => {
                if (this.props.loginNew.Warning) {
                  return (
                    <Alert bsStyle="danger">
                      {this.props.loginNew.Message}
                    </Alert>
                  )
                }
              })()}
              <NewInput
                onOpen={this.props.open.bind(this)}
                onNew={this.new.bind(this)}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

New.propTypes = {
  new: PropTypes.func,
  open: PropTypes.func,
  loginNew: PropTypes.object,
  alert: PropTypes.func
}
