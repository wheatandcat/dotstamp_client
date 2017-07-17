// @flow
import React from "react"
import { Dropdown, MenuItem, Grid, Row, Col, Glyphicon } from "react-bootstrap"
import Icon from "../../icon/icon"
import { DateTimeFormat } from "../../../utils/common"
import styles from "./styles.css"

export type Props = {
  profileImageID: number,
  userName: string,
  updatedAt: string,
  openProblem: Function
}

export default ({ profileImageID, updatedAt, userName, openProblem }: Props) =>
  <div className={styles.about}>
    <Grid>
      <Row>
        <Col sm={2} md={1} className={styles.paragraph}>
          <Icon id={profileImageID} />
        </Col>
        <Col sm={18} md={10} className={styles.author}>
          <div className={styles.middle}>
            {userName}
            &nbsp;&nbsp;&nbsp;<Glyphicon glyph="time" />
            &nbsp;{DateTimeFormat(updatedAt)}に更新
          </div>
        </Col>
        <Col md={1} xsHidden>
          <div className={`pull-right ${top}`}>
            <Dropdown id="dropdown-custom-1" pullRight>
              <Dropdown.Toggle noCaret>
                <Glyphicon glyph="list" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem eventKey="1" onClick={() => openProblem()}>
                  <Glyphicon glyph="warning-sign" />&nbsp;この記事を通報する
                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
