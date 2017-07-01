import PropTypes from "prop-types"
import React, { Component } from "react"
import {
  Glyphicon,
  Col,
  ControlLabel,
  PageHeader,
  Panel,
  Button,
  FormControl,
  FormGroup,
  Alert
} from "react-bootstrap"
import { Link as Footer } from "../../../component/footer/"
import { Required } from "../../../../css/common.css"
export default class Show extends Component {
  componentWillMount() {
    this.props.init()
  }
  /**
   * 追加する
   */
  add() {
    const email = this.inputEmail.value.trim()
    const body = this.inputBody.value.trim()

    if (email == "" || body == "") {
      return
    }

    this.props.add({ email, body })
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    let send = ""

    if (this.props.questionShow.Send) {
      send = <Alert bsStyle="success">問い合わせ内容を送信しました。</Alert>
    }

    return (
      <div>
        <div className="container">
          <div>
            <PageHeader>
              <Glyphicon glyph="info-sign" />&nbsp;問い合わせ
            </PageHeader>
          </div>
          <Panel header="問い合わせフォーム" bsStyle="info">
            <div>
              {send}
            </div>

            <FormGroup>
              <ControlLabel>
                メールアドレス
                <span className={Required}>*</span>
              </ControlLabel>
              <FormControl
                type="email"
                placeholder="メールアドレス"
                inputRef={ref => {
                  this.inputEmail = ref
                }}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>
                問い合わせ内容
                <span className={Required}>*</span>
              </ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="問い合わせ内容"
                inputRef={ref => {
                  this.inputBody = ref
                }}
                rows="6"
              />
            </FormGroup>
            <hr />
            <FormGroup>
              <Col smOffset={10} sm={10}>
                <Button bsStyle="success" onClick={() => this.add()}>
                  <Glyphicon glyph="send" />&nbsp;&nbsp;&nbsp;送信する
                </Button>
              </Col>
            </FormGroup>
          </Panel>
        </div>
        <Footer />
      </div>
    )
  }
}

Show.propTypes = {
  add: PropTypes.func,
  init: PropTypes.func,
  questionShow: PropTypes.object
}
