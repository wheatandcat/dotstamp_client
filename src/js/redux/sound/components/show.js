import PropTypes from "prop-types"
import React, { Component } from "react"
import {Alert, FormGroup, ControlLabel, ButtonToolbar, Modal, MenuItem, Dropdown, FormControl, Table, PageHeader, Glyphicon, Button} from "react-bootstrap"
import {VOICE_TYPE, VOICE_TYPE_MAP} from "../../../constants/common"
import {MAKE_STATUS_MADE} from "../../../constants/contribution"
import {TALK_TYPE_IMAGE} from "../../contribution/actions/talk"
import Image, {IMAGE_DISPLAY_TYPE_TALK_IMAGE} from "../../../utils/image"
import {getTopUrl} from "../../../utils/common"
import Menu from "../containers/menu"

import Footer from "../../../utils/parts/footer"
import {Input, InputText, InputTextBox} from "../../../../css/sound.css"
import {Middle} from "../../../../css/common.css"
import Sound from "../../../utils/sound"
import MessageSow from "../../message/containers/show"

export default class Show extends Component {
  componentWillMount() {
    this.getDeatil(this.props.match.params.id)
  }
  componentDidUpdate() {
    if (this.props.soundShow.Detail) {
      this.getDeatil(this.props.match.params.id)
    }

    if (!this.props.soundShow.MovieMakeListener) {
      return
    }

    this.props.offMovieMakeListener()

    setTimeout(() => {
      this.props.check({userContributionId: this.props.match.params.id})
    }, 30000)
  }
  /**
     * 詳細を取得する
     *
     * @param  {numbet} id 投稿ID
     */
  getDeatil(id) {
    this.props.getDetail({userContributionId: id})
  }
  /**
     * 音声本文を変更する
     *
     * @param  {object} e エレメント
     */
  changeBodySound(e) {
    this.props.changeBodySound(e.target.id.replace("body_sound-", ""), e.target.value)
  }
  /**
     * ボイスタイプを設定する
     *
     * @param  {string} voiceType ボイスタイプ
     */
  setVoiceType(voiceType) {
    let tmp = voiceType.split("_")
    this.props.changeVoiceType(tmp[0], tmp[1])
    this.props.saveVoiceType({id: tmp[2], voice_type: tmp[1], priority: tmp[0]})

    this.props.message("保存しました", "success")
  }
  /**
     * ボイスタイプを取得する
     *
     * @param  {object} item アイテム
     * @return {object} html
     */
  getVoiceType(item) {
    let voiceType = ""
    if (item.voice_type != undefined) {
      voiceType = VOICE_TYPE_MAP[item.voice_type]
    }

    return (
      <Dropdown id="voiceType" onSelect={this.setVoiceType.bind(this)}>
        <Dropdown.Toggle >
          <Glyphicon glyph="volume-up"/>&nbsp;{voiceType}&nbsp;&nbsp;
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {VOICE_TYPE.map((voive) => {
            let option = {}
            if (item.voice_type == voive.type) {
              option = {
                active: true
              }
            }

            return (
              <MenuItem key={item.Priority + "_" + voive.type} eventKey={item.Priority + "_" + voive.type + "_" + item.ID} {...option}>
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
     * @return {string} 改行変換後テキスト
     */
  changeBr(text) {
    let regex = /(\n)/g
    return text.split(regex).map(function(line, i) {
      if (line.match(regex)) {
        return <br key={i}/>
      } else {
        return line
      }
    })
  }
  /**
     * 本文詳細を取得する
     *
     * @param  {object} item 会話
     * @return {object} 本文html
     */
  getBodyDetail(item) {
    let html
    if (item.talk_type == TALK_TYPE_IMAGE) {
      html = <Image fileName={item.Body} imageDisplayType={IMAGE_DISPLAY_TYPE_TALK_IMAGE}/>
    } else {
      html = this.changeBr(item.Body)
    }

    return html
  }
  /**
     * 音声本文を保存する
     *
     * @param  {number} priority 優先度
     * @param  {number} id       ID
     */
  saveBodySound(priority, id) {
    this.props.saveBodySound({id: id, body: this.props.soundShow.List[priority].body_sound, priority: priority})

    this.props.message("保存しました", "success")
  }
  /**
     * アイテムを取得する
     *
     * @param  {object} item アイテム
     * @return {object} html
     */
  getItem(item) {
    let make = ""
    if (item.make_status == MAKE_STATUS_MADE) {
      let name = item.user_contribution_id + "_" + item.Priority
      make = (<Sound url={getTopUrl() + "static/files/tmp/sound/" + name + ".wav?=" + (new Date().getTime())} repeat="" play="" pause=""/>)
    }

    return (
      <tr key={item.Priority}>
        <td>
          {item.Priority + 1}
        </td>
        <td className={InputTextBox}>
          {this.getBodyDetail(item)}
        </td>
        <td className={InputTextBox}>
          <FormControl componentClass="textarea" placeholder="読み上げ本文。空の場合は、読み上げをスルーします" value={item.body_sound} onChange={this.changeBodySound.bind(this)} id={"body_sound-" + item.Priority} className={InputText}/>
        </td>
        <td className={Middle}>
          <Button onClick={() => this.saveBodySound(item.Priority, item.ID)}>
            保存
          </Button>
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
    this.props.saveVoiceTypeList({userContributionId: this.props.match.params.id, voiceType: this.selectVoice.value})

    this.props.message("音声タイプの一括変更を実行", "success")
  }
  /**
     * ボイスタイプリストを取得する
     */
  getVoiceTypeList() {
    return (
      <Modal show={this.props.soundShow.VoiceList} onHide={this.props.closeVoiceList} bsSize="large">
        <Modal.Header closeButton>
          <Modal.Title>一括で音声タイプを変更する</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Alert bsStyle="info">
              一括で変換する音声タイプを選択して下さい。
              <br/>
              <br/>
              <FormGroup controlId="formControlsSelect" bsSize="small">
                <ControlLabel>音声タイプ</ControlLabel>
                <FormControl componentClass="select" placeholder="select" inputRef={ref => {
                  this.selectVoice = ref
                }}>
                  {VOICE_TYPE.map((voive) => {
                    return (
                      <option value={voive.type} key={voive.type}>{voive.name}</option>
                    )
                  })}
                </FormControl>
              </FormGroup>
            </Alert>
          </div>
          <ButtonToolbar>
            <Button onClick={this.props.closeVoiceList}>キャンセル</Button>
            &nbsp; &nbsp;
            <Button bsStyle="warning" onClick={() => this.saveVoiceTypeList()}>一括で変更する</Button>
          </ButtonToolbar>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    )
  }
  /**
     * 描画する
     *
     * @return {object} html
     */
  render() {
    return (
      <div>
        {this.getVoiceTypeList()}
        <MessageSow/>
        <div className="container">
          <PageHeader>
            &nbsp;&nbsp;<Glyphicon glyph="bullhorn"/>&nbsp;読み上げを編集する（β版）
          </PageHeader>
          <Menu userContributionId={this.props.match.params.id}/>
        </div>
        <div className={"container " + Input}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>本文</th>
                <th>読み上げ本文</th>
                <th>操作</th>
                <th>
                  音声タイプ設定
                  <Dropdown id="sound-voice-dropdown-1" className="pull-right" pullRight>
                    <Dropdown.Toggle noCaret bsSize="xsmall">
                      <Glyphicon glyph="list"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <MenuItem eventKey="1" onClick={() => this.props.openVoiceList()}>
                        <Glyphicon glyph="bullhorn"/>&nbsp;&nbsp;一括で音声タイプを変更する
                      </MenuItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
                <th>再生</th>
              </tr>
            </thead>
            <tbody>
              {this.props.soundShow.List.map((item) => {
                return this.getItem(item)
              })}
            </tbody>
          </Table>
        </div>
        <Footer/>
      </div>
    )
  }
}

Show.propTypes = {
  match: PropTypes.object,
  getDetail: PropTypes.func,
  soundShow: PropTypes.object,
  changeBodySound: PropTypes.func,
  changeVoiceType: PropTypes.func,
  saveBodySound: PropTypes.func,
  saveVoiceType: PropTypes.func,
  offMovieMakeListener: PropTypes.func,
  openVoiceList: PropTypes.func,
  closeVoiceList: PropTypes.func,
  saveVoiceTypeList: PropTypes.func,
  check: PropTypes.func,
  message: PropTypes.func
}
