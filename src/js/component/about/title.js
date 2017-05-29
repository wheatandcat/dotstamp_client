// @flow
import React from "react"
import type { Children } from "react"
import { Jumbotron, Image } from "react-bootstrap"
import { getStaticUrl } from "../../utils/common"
import styles from "./styles.css"

type Props = {
  children?: Children
}

export default ({ children }: Props) => (
  <Jumbotron className={styles.title}>
    <div>
      <Image src={`${getStaticUrl()}common/about.png`} rounded />
    </div>
    <h3>
      .stampは、対話形式で知識を共有するWebサービスです
    </h3>
    {children}
  </Jumbotron>
)
