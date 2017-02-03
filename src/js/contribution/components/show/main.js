import React, { Component, PropTypes } from "react"
import Http from "../../../utils/http"
import ContributionShowFrame from "./frame"
import Footer from "../../../utils/parts/footer"

export default class Main extends Component {
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
        return (
            <div>
                <ContributionShowFrame
                    title = {this.props.contributionShow.title}
                    body = {this.props.contributionShow.body}
                    tagList = {this.props.contributionShow.tagList}
                />
                <Footer/>
            </div>
        )
    }
}

Main.propTypes = {
    params: PropTypes.object,
    getDetail: PropTypes.func,
    contributionShow: PropTypes.object,
}
