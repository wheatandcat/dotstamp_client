// @flow
import React from "react"
import { Panel, Button, Well, Image, Jumbotron } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getStaticUrl } from "../../utils/common"
import styles from "./styles.css"

type Props = {
  open?: boolean,
  text?: string
}

export default ({ open, text }: Props) =>
  <Well className={styles.Stamp}>
    <table className={styles.Full}>
      <tbody>
        <tr>
          <td>
            <Image src={`${getStaticUrl()}common/icon.png`} rounded />
          </td>
          <td className={styles.StampAddress}>□□□□□□</td>
        </tr>
      </tbody>
    </table>
    <Jumbotron className={styles.Stamp}>
      <span className={styles.Title}>Hello&nbsp;.Stamp!</span>
      <br />
      <br />
      <br />
      <Image src={`${getStaticUrl()}common/doc.png`} rounded />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/about">
        <Button bsStyle="primary">.stampとは</Button>
      </Link>
    </Jumbotron>
    <Panel collapsible expanded={open} style={{ zoom: "75%" }}>
      <pre>
        {text}
      </pre>
    </Panel>
  </Well>
