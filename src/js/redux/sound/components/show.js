// @flow
import React, { Component } from "react"
import {
  Alert,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
  Modal,
  MenuItem,
  Dropdown,
  FormControl,
  Table,
  PageHeader,
  Glyphicon,
  Button
} from "react-bootstrap"
import { VOICE_TYPE, VOICE_TYPE_MAP } from "../../../constants/common"
import { MAKE_STATUS_MADE } from "../../../constants/contribution"
import { TALK_TYPE_IMAGE } from "../../contribution/actions/talk"
import { Talk } from "../../../component/image/"
import { getTopUrl } from "../../../utils/common"
import Menu from "../containers/menu"

import { Link as Footer } from "../../../component/footer/"
import { Input, InputText, InputTextBox } from "../../../../css/sound.css"
import { Middle } from "../../../../css/common.css"
import Sound from "../../../utils/sound"
import MessageSow from "../../message/containers/show"

type Item = {
  user_contribution_id: number,
  priority: number,
  body_sound: string,
  body: string,
  id: number,
  make_status: number
}

type Props = {
  match: Object,
  getDetail: Function,
  soundShow: Object,
  changeBodySound: Function,
  changeVoiceType: Function,
  saveBodySound: Function,
  saveVoiceType: Function,
  offMovieMakeListener: Function,
  openVoiceList: Function,
  closeVoiceList: Function,
  saveVoiceTypeList: Function,
  check: Function,
  message: Function
}

export default class Show extends Component {
  componentWillMount() {
    this.getDeatil(this.props.match.params.id)
  }
  componentDidUpdate() {
    const { detail, movieMakeListener } = this.props.soundShow
    const { id } = this.props.match.params
    if (detail) {
      this.getDeatil(id)
    }

    if (!movieMakeListener) {
      return
    }

    this.props.offMovieMakeListener()

    setTimeout(() => {
      this.props.check(id)
    }, 30000)
  }
  props: Props
  selectVoice: {
    value: ""
  }
  /**
   * 詳細を取得する
   *
   * @param  {number} id 投稿ID
   */
  getDeatil(id: number) {
    this.props.getDetail(id)
  }
  /**
   * 音声本文を変更する
   *
   * @param  {object} e エレメント
   */
  changeBodySound(e: Object) {
    this.props.changeBodySound(
      e.target.id.replace("body_sound-", ""),
      e.target.value
    )
  }
  /**
   * ボイスタイプを設定する
   *
   * @param  {string} voiceType ボイスタイプ
   */
  setVoiceType(voiceType: string) {
    const tmp = voiceType.split("_")
    this.props.changeVoiceType(tmp[0], tmp[1])
    this.props.saveVoiceType({
      id: tmp[2],
      voice_type: tmp[1],
      priority: tmp[0]
    })

    this.props.message("保存しました", "success")
  }
  /**
   * ボイスタイプを取得する
   *
   * @param  {object} item アイテム
   */
  getVoiceType(item: Item) {
    let voiceType = ""
    if (item.voice_type != undefined) {
      voiceType = VOICE_TYPE_MAP[item.voice_type]
    }

    return (
      <Dropdown id="voiceType" onSelect={this.setVoiceType.bind(this)}>
        <Dropdown.Toggle>
          <Glyphicon glyph="volume-up" />&nbsp;{voiceType}&nbsp;&nbsp;
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {VOICE_TYPE.map(voive => {
            let option = {}
            if (item.voice_type == voive.type) {
              option = {
                active: true
              }
            }

            return (
              <MenuItem
                key={`${item.priority}_${voive.type}`}
                eventKey={`${item.priority}_${voive.type}_${item.id}`}
                {...option}
              >
                &nbsp;&nbsp;&nbsp;{voive.name}&nbsp;&nbsp;
              </MenuItem>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
  /**
   * 改行を変換する
   *
   * @param  {string} text テキスト
   */
  changeBr(text: string) {
    const regex = /(\n)/g
    return text.split(regex).map((line, i) => {
      if (line.match(regex)) {
        return <br key={i} />
      }
      return line
    })
  }
  /**
   * 本文詳細を取得する
   *
   * @param  {object} item 会話
   */
  getBodyDetail(item: Item) {
    let html
    if (item.talk_type == TALK_TYPE_IMAGE) {
      html = <Talk fileName={item.body} />
    } else {
      html = this.changeBr(item.body)
    }

    return html
  }
  /**
   * 音声本文を保存する
   *
   * @param  {number} priority 優先度
   * @param  {number} id       ID
   */
  saveBodySound(priority: number, id: number) {
    const { list } = this.props.soundShow

    this.props.saveBodySound({
      id,
      body: list[priority].body_sound,
      priority
    })

    this.props.message("保存しました", "success")
  }
  /**
   * アイテムを取得する
   *
   * @param  {object} item アイテム
   */
  getItem(item: Item) {
    const { user_contribution_id, priority, body_sound, id, make_status } = item
    let make = ""
    if (make_status == MAKE_STATUS_MADE) {
      const name = `${user_contribution_id}_${priority}`
      make = (
        <Sound
          url={`${getTopUrl()}static/files/tmp/sound/${name}.wav?=${new Date().getTime()}`}
          repeat=""
          play=""
          pause=""
        />
      )
    }

    return (
      <tr key={priority}>
        <td>
          {priority + 1}
        </td>
        <td className={InputTextBox}>
          {this.getBodyDetail(item)}
        </td>
        <td className={InputTextBox}>
          <FormControl
            componentClass="textarea"
            placeholder="読み上げ本文。空の場合は、読み上げをスルーします"
            value={body_sound}
            onChange={this.changeBodySound.bind(this)}
            id={`body_sound-${priority}`}
            className={InputText}
          />
        </td>
        <td className={Middle}>
          <Button onClick={() => this.saveBodySound(priority, id)}>保存</Button>
        </td>
        <td>
          {this.getVoiceType(item)}
        </td>
        <td>
          {make}
        </td>
      </tr>
    )
  }
  /**
   * ボイスタイプリストを保存する
   */
  saveVoiceTypeList() {
    this.props.saveVoiceTypeList({
      userContributionId: this.props.match.params.id,
      voiceType: this.selectVoice.value
    })

    this.props.message("音声タイプの一括変更を実行", "success")
  }
  /**
   * ボイスタイプリストを取得する
   */
  getVoiceTypeList() {
    return (
      <Modal
        show={this.props.soundShow.voiceList}
        onHide={this.props.closeVoiceList}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>一括で音声タイプを変更する</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Alert bsStyle="info">
              一括で変換する音声タイプを選択して下さい。
              <br />
              <br />
              <FormGroup controlId="formControlsSelect" bsSize="small">
                <ControlLabel>音声タイプ</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  inputRef={ref => {
                    this.selectVoice = ref
                  }}
                >
                  {VOICE_TYPE.map(voive =>
                    <option value={voive.type} key={voive.type}>
                      {voive.name}
                    </option>
                  )}
                </FormControl>
              </FormGroup>
            </Alert>
          </div>
          <ButtonToolbar>
            <Button onClick={this.props.closeVoiceList}>キャンセル</Button>
            &nbsp; &nbsp;
            <Button bsStyle="warning" onClick={() => this.saveVoiceTypeList()}>
              一括で変更する
            </Button>
          </ButtonToolbar>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    )
  }
  /**
   * 描画する
   */
  render() {
    const { list } = this.props.soundShow

    return (
      <div>
        {this.getVoiceTypeList()}
        <MessageSow />
        <div className="container">
          <PageHeader>
            &nbsp;&nbsp;<Glyphicon glyph="bullhorn" />&nbsp;読み上げを編集する（β版）
          </PageHeader>
          <Menu userContributionId={this.props.match.params.id} />
        </div>
        <div className={`container ${Input}`}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>本文</th>
                <th>読み上げ本文</th>
                <th>操作</th>
                <th>
                  音声タイプ設定
                  <Dropdown
                    id="sound-voice-dropdown-1"
                    className="pull-right"
                    pullRight
                  >
                    <Dropdown.Toggle noCaret bsSize="xsmall">
                      <Glyphicon glyph="list" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <MenuItem
                        eventKey="1"
                        onClick={() => this.props.openVoiceList()}
                      >
                        <Glyphicon glyph="bullhorn" />&nbsp;&nbsp;一括で音声タイプを変更する
                      </MenuItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
                <th>再生</th>
              </tr>
            </thead>
            <tbody>
              {list.map(item => this.getItem(item))}
            </tbody>
          </Table>
        </div>
        <Footer />
      </div>
    )
  }
}
