import React, { Component, PropTypes } from "react"
import Http from "../../utils/http"
import ContributionTalk from "../containers/talk/main"
import {Well, Button, Label} from "react-bootstrap"
import Footer from "../../utils/parts/footer"

import { Tag } from "./../../../css/talk"


export default class Show extends Component {
    componentWillMount() {
        if (this.props.params.id == 0) {
            return
        }

        this.getDetail(this.props.params.id)
    }
    /**
     * 詳細を取得する
     *
     * @param  {number} id 投稿ID
     */
    getDetail(id) {
        Http.postApi("contribution/show/" + id).then((response) => {
            return this.props.getDetail(response.body.Title, response.body.Body, response.body.Tag)
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let body = this.props.contributionShow.body
        if (!Array.isArray(body)) {
            body = []
        }

        let tagList = this.props.contributionShow.tagList
        if (!Array.isArray(tagList)) {
            tagList = []
        }

        return (
            <div>
                <Well>
                    <h3>{this.props.contributionShow.title}</h3>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                    </p>
                    <p>
                        <Button bsStyle="primary">
                            Learn more
                        </Button>
                    </p>
                    <div>
                        {tagList.map((tag) =>
                        <Label key={tag.ID} bsStyle="info" className={Tag}>
                            {tag.Name}
                        </Label>)}
                    </div>
                </Well>
                <div>
                    {body.map((obj) => <ContributionTalk key={obj.Priority} talk={obj} editMode={false}/>)}
                </div>
                <Footer/>
            </div>
        )
    }
}

Show.propTypes = {
    params: PropTypes.object,
    getDetail: PropTypes.func,
    contributionShow: PropTypes.object,
}
