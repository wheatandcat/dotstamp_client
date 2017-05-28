import React, { Component } from "react"
import { Alert, Button, ButtonGroup } from "react-bootstrap"
import { PLAY, PAUSE, FINISHED } from "./player"
import { Player, ScreenButton, Video } from "./"

var target: Object

type State = {
  status: number,
  full?: boolean
}

type Props = {
  videoId: string,
  label?: Object
}

export default class Frame extends Component<*, Props, State> {
  constructor() {
    super()
  }
  props: Props
  state = {
    status: PAUSE,
    full: false
  }
  /**
   * 開始する
   */
  play() {
    if (target == undefined) {
      return
    }

    this.setState({ status: PLAY })
    target.playVideo()
  }
  /**
   * 停止する
   */
  pause() {
    this.setState({ status: PAUSE })
    target.pauseVideo()
  }
  /**
   * 準備する
   */
  onReady(event: Object) {
    target = event.target
  }
  /**
   * 終了する
   */
  onEnd() {
    this.setState({ status: FINISHED })
  }
  /**
   * スクリーンを有効にする
   */
  onScreen() {
    this.setState({ full: true })
  }
  /**
   * スクリーンを無効にする
   */
  offScreen() {
    this.setState({ full: false })
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    if (this.props.videoId == "") {
      return (
        <Alert bsStyle="info">
          動画情報はありません
        </Alert>
      )
    }

    const style = this.state.full ? { display: "block" } : { height: 0 }

    return (
      <Alert bsStyle="info">
        <ButtonGroup>
          <Player
            status={this.state.status}
            onPlay={this.play.bind(this)}
            onPause={this.pause.bind(this)}
          />
          <ScreenButton
            full={this.state.full}
            onFull={this.onScreen.bind(this)}
            onSmaill={this.offScreen.bind(this)}
          />
        </ButtonGroup>
        <div className="pull-right">
          <Button
            bsStyle="link"
            href={"https://youtu.be/" + this.props.videoId}
            target="_blank"
          >
            YouTubeで視聴
          </Button>
        </div>
        <div style={style}>
          <Video
            videoId={this.props.videoId}
            open={this.state.full}
            onReady={this.onReady.bind(this)}
            onEnd={this.onEnd.bind(this)}
          />
        </div>
      </Alert>
    )
  }
}
