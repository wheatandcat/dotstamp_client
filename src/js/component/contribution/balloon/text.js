// @flow
import React, {Component} from "react"
import {Balloon} from "./styles.css"

type Props = {
  Label: string,
};

export default class Text extends Component {
  props: Props
  changeBr() {
    let regex = /(\n)/g
    return this.props.Label.split(regex).map((line, i) => {
      if (line.match(regex)) {
        return <br key={i}/>
      } else {
        return line
      }
    })
  }
  render() {
    return (
      <div className={Balloon}>
        {this.changeBr()}
      </div>
    )
  }
}
