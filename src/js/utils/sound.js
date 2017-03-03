import React, {Component, PropTypes} from "react"
import Sound from "react-sound"
import {Glyphicon, Button} from "react-bootstrap"

export default class SoundWrapper extends Component {
    componentWillMount () {
        this.setState({
            playStatus: Sound.status.STOPPED,
            finished: false,
        })
    }
    pause() {
        this.setState({
            playStatus: Sound.status.PAUSED,
            finished: this.state.finished,
        })
    }
    play() {
        this.setState({
            playStatus: Sound.status.PLAYING,
            finished: false,
        })
    }
    finished(){
        this.setState({
            playStatus: Sound.status.STOPPED,
            finished: true,
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        let player = ""
        if (this.state.finished) {
            player = (
                <Button onClick={() => this.play()}>
                    <Glyphicon glyph="repeat"/>&nbsp;&nbsp;音声を再生終了しました。もう一度再生する
                </Button>
            )
        }else if (this.state.playStatus == Sound.status.STOPPED || this.state.playStatus == Sound.status.PAUSED) {
            player = (
                <Button onClick={() => this.play()}>
                    <Glyphicon glyph="play"/>&nbsp;&nbsp;音声を再生する
                </Button>
            )
        } else  {
            player = (
                <Button onClick={() => this.pause()}>
                    <Glyphicon glyph="pause"/>&nbsp;&nbsp;音声を再生中
                </Button>
            )
        }

        return (
            <div>
                {this.props.children}
                {player}
                <Sound
                    url={this.props.url}
                    playStatus={this.state.playStatus}
                    playFromPosition={300}
                    onFinishedPlaying={this.finished.bind(this)} />
            </div>
        )
    }
}

SoundWrapper.propTypes = {
    url: PropTypes.string,
    children: PropTypes.array,
}
