import PropTypes from "prop-types"
import React, { Component } from "react"
import {Alert, Glyphicon, Button, ButtonGroup} from "react-bootstrap"
import YouTube from "react-youtube"

const PLAY = 1
const PAUSE = 0

var target

export default class YouTubeWrapper extends Component {
  componentWillMount () {
    this.setState({
      playStatus: PAUSE,
      finished: false,
      screen: this.props.screen,
    })
  }
  /**
   * 開始する
   */
  play() {
    if (target == undefined) {
      return
    }

    this.setState({
      playStatus: PLAY,
      finished: false,
      screen: this.state.screen,
    })
    target.playVideo()
  }
  /**
   * 停止する
   */
  pause() {
    if (target == undefined) {
      return
    }

    this.setState({
      playStatus: PAUSE,
      finished: false,
      screen: this.state.screen,
    })
    target.pauseVideo()
  }
  /**
   * プレイヤーを取得する
   */
  getPlayer() {
    if (this.state.finished) {
      return (
        <Button onClick={() => this.play()}>
          <Glyphicon glyph="repeat"/>{this.props.repeat}
        </Button>
      )
    }

    if (this.state.playStatus == PAUSE) {
      return (
        <Button onClick={() => this.play()}>
          <Glyphicon glyph="play"/>{this.props.play}
        </Button>
      )
    }

    return (
      <Button onClick={() => this.pause()}>
        <Glyphicon glyph="pause"/>{this.props.pause}
      </Button>
    )
  }
  /**
   * 準備する
   */
  onReady(event) {
    target = event.target
  }
  /**
   * 終了する
   */
  onEnd() {
    this.setState({
      playStatus: PAUSE,
      finished: true,
      screen: this.state.screen,
    })
  }
  /**
   * スクリーンを有効にする
   */
  onScreen() {
    this.setState({
      playStatus: this.state.playStatus,
      finished: this.state.finished,
      screen: true,
    })
  }
  /**
   * スクリーンを無効にする
   */
  offScreen() {
    this.setState({
      playStatus: this.state.playStatus,
      finished: this.state.finished,
      screen: false,
    })
  }
  /**
   * スクリーンを取得する
   */
  getScreen() {
    if (this.state.screen) {
      return (
        <Button onClick={() => this.offScreen()}>
          <Glyphicon glyph="resize-small"/>
        </Button>
      )
    }

    return (
      <Button onClick={() => this.onScreen()}>
        <Glyphicon glyph="resize-full"/>
      </Button>
    )
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render () {
    if (this.props.videoId == "") {
      return (
        <Alert bsStyle="info">
          動画情報はありません
        </Alert>
      )
    }


    let opts = {
      height: "0",
      width: "0",
      playerVars: {
        autoplay: 0,
      },
    }
    let frame = ""

    if (this.state.screen) {
      opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 0,
        },
      }

      frame = (
        <div>
          <hr />
        </div>
      )
    }
    return (
      <Alert bsStyle="info">
        <ButtonGroup>
          {this.getPlayer()}
          {this.getScreen()}
        </ButtonGroup>
        <div className="pull-right">
          <Button bsStyle="link" href={"https://youtu.be/" + this.props.videoId} target="_blank">YouTubeで視聴</Button>
        </div>
        {frame}
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this.onReady}
          onEnd={this.onEnd}
        />
      </Alert>
    )
  }
}

YouTubeWrapper.propTypes = {
  videoId: PropTypes.string,
  repeat: PropTypes.string,
  play: PropTypes.string,
  pause: PropTypes.string,
  screen: PropTypes.bool,
}

YouTubeWrapper.defaultProps = {
  repeat: "  記事の読み上げは終了しました。もう一度再生する",
  play: "  記事の読み上げを再生する",
  pause: "  記事の読み上げを再生中",
  screen: false,
}
