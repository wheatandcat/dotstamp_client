import React, { Component, PropTypes } from "react"
import {Label} from "react-bootstrap"
import {Item} from "./../../../css/tag.css"

export default class Tag extends Component {
    getItem(item) {
        return (
            <Label bsStyle="info" className={Item}>
                {item.Name}
            </Label>
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        let list = this.props.list
        return (
            <div>
                {list.map((item) =>
                    <span key={item.ID}>
                        {this.getItem(item)}
                    </span>
                )}
            </div>
        )
    }
}

Tag.propTypes = {
    list: PropTypes.array,
}
