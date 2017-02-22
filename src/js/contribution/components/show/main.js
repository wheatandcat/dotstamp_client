import React, { Component, PropTypes } from "react"
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
        this.props.getDetail(id)
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
                    title = {this.props.contributionShow.Title}
                    body = {this.props.contributionShow.Body}
                    tagList = {this.props.contributionShow.TagList}
                    user = {this.props.contributionShow.User}
                    updatedAt = {this.props.contributionShow.UpdatedAt}
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
