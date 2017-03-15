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
                    <Glyphicon glyph="repeat"/>{this.props.repeat}
                </Button>
            )
        }else if (this.state.playStatus == Sound.status.STOPPED || this.state.playStatus == Sound.status.PAUSED) {
            player = (
                <Button onClick={() => this.play()}>
                    <Glyphicon glyph="play"/>{this.props.play}
                </Button>
            )
        } else  {
            player = (
                <Button onClick={() => this.pause()}>
                    <Glyphicon glyph="pause"/>{this.props.pause}
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
    repeat: PropTypes.string,
    play: PropTypes.string,
    pause: PropTypes.string,
}

SoundWrapper.defaultProps = {
    repeat: "  音声を再生終了しました。もう一度再生する",
    play: "  音声を再生する",
    pause: "  音声を再生中",
}
