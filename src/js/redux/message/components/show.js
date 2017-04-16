import PropTypes from "prop-types"
import React, { Component } from "react"
import {Fade, Alert} from "react-bootstrap"
import {Absolute, FadeMessage} from "./../../../../css/common.css"



export default class Show extends Component {
    close() {
        setTimeout(() => {
            this.props.close()
        }, 600)
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <Fade
                in={this.props.messageShow.Show}
                onEntering={this.close.bind(this)}
                className={Absolute + " " + FadeMessage}
                unmountOnExit
            >
                <div>
                     <Alert bsStyle={this.props.messageShow.Style}>
                         {this.props.messageShow.Message}
                     </Alert>
                </div>
            </Fade>
        )
    }
}

Show.propTypes = {
    messageShow: PropTypes.object,
    close: PropTypes.func,
}
