// @flow
import React from "react"
import { Button} from "react-bootstrap"
import FontAwesome from "react-fontawesome"
import styles from "./styles.css"
import {getTopUrl} from "../../utils/common"

type Props = {
  label?: string,
}

export default ({
  label,
}: Props) => (
  <div className={styles.platform}>
    <Button bsStyle="danger" href={getTopUrl() + "api/google/oauth/" } block>
      <FontAwesome name="google" />&nbsp;&nbsp;Googleで{label}&nbsp;
    </Button>
    <Button bsStyle="info" href={getTopUrl() + "api/twitter/oauth/" } block>
      <FontAwesome name="twitter" />&nbsp;&nbsp;Twitterで{label}&nbsp;
    </Button>
    <Button bsStyle="primary" href={getTopUrl() + "api/facebook/oauth/" } block>
      &nbsp;&nbsp;<FontAwesome name="facebook" />&nbsp;&nbsp;Facebookで{label}
    </Button>
  </div>
)
