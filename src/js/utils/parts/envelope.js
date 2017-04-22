import PropTypes from "prop-types"
import React, { Component } from "react"
import {Panel, Button, Well, Image, Jumbotron} from "react-bootstrap"
import {Full, Stamp, StampAddress} from "../../../css/common.css"
import {Title} from "../../../css/user.css"
import {Link} from "react-router-dom"

export default class Envelope extends Component {
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    return (
      <Well className={Stamp}>
        <table className={Full}>
          <tbody>
            <tr>
              <td>
                <Image src="/static/images/common/icon.png" rounded/>
              </td>
              <td className={StampAddress}>
                  □□□□□□
              </td>
            </tr>
          </tbody>
        </table>
        <Jumbotron className={Stamp}>
          <span className={Title}>Hello&nbsp;.Stamp!</span>
          <br />
          <br />
          <br />
        <Image src="/static/images/common/doc.png" ref="targetIcon" rounded/>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/about">
            <Button bsStyle="primary">.stampとは</Button>
          </Link>
        </Jumbotron>
        <Panel collapsible expanded={this.props.open} style={{zoom: "75%"}}>
          <pre >
            {this.props.text}
          </pre>
        </Panel>
      </Well>
    )
  }
}


Envelope.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
}

Envelope.defaultProps = {
  open: false,
  text: "",
}
