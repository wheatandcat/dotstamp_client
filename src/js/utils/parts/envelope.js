import React, {Component} from "react"
import {Button, Well, Image, Jumbotron} from "react-bootstrap"
import {Full, Stamp, StampAddress} from "../../../css/common.css"
import {Title} from "../../../css/user.css"
import {Link} from "react-router"

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
                    <Image src="/static/images/common/doc.png" rounded/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/about">
                        <Button bsStyle="primary">Learn more</Button>
                    </Link>
                </Jumbotron>
            </Well>
        )
    }
}
