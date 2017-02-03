import React, { Component, PropTypes } from "react"
import ContributionTalk from "../../containers/talk/main"
import {Well, Button, Label} from "react-bootstrap"

import Tag from "../../../utils/parts/tag"

export default class Frame extends Component {
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let body = this.props.body
        if (!Array.isArray(body)) {
            body = []
        }

        let tagList = this.props.tagList
        if (!Array.isArray(tagList)) {
            tagList = []
        }

        return (
            <div>
                <Well>
                    <h3>{this.props.title}</h3>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                    </p>
                    <p>
                        <Button bsStyle="primary">
                            Learn more
                        </Button>
                    </p>
                    <div>
                        <Tag list={tagList} />
                    </div>
                </Well>
                <div>
                    {body.map((obj) => <ContributionTalk key={obj.Priority} talk={obj} editMode={false}/>)}
                </div>
            </div>
        )
    }
}

Frame.propTypes = {
    title: PropTypes.string,
    body: PropTypes.array,
    tagList: PropTypes.array,
}
