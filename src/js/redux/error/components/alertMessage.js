import PropTypes from "prop-types"
import React, { Component } from "react"
import {Alert, Glyphicon} from "react-bootstrap"


export default class AlertMessage extends Component {
    /**
     * 警告を取得する
     *
     * @return {object} html
     */
    getAlert() {
        if (!this.props.errorAlertMessage.Warning) {
            return ""
        }

        return (
             <Alert bsStyle="danger">
                 <Glyphicon glyph="remove" onClick={() => this.props.closeAlert()}/>&nbsp;{this.props.errorAlertMessage.Message}
             </Alert>
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <div>
                {this.getAlert()}
            </div>
        )
    }
}

AlertMessage.propTypes = {
    closeAlert: PropTypes.func,
    errorAlertMessage: PropTypes.object,
}
