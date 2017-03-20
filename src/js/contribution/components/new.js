import React, { Component, PropTypes } from "react"
import FormHeader from "../containers/form/header"

export default class New extends Component {
    componentWillMount () {
        let hash = location.hash

        this.props.init((hash.indexOf("contribution/experience") > -1))

        if (hash.indexOf("contribution/experience") == -1) {
            this.getList()
        } else {
            this.props.setDefaultList()
        }
    }
    /**
     * リストを取得する
     */
    getList () {
        this.props.setCharacterImageList()
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <FormHeader title="" contributionId={null} contributionTalk={this.props.contributionTalk} />
        )
    }
}

New.propTypes = {
    init: PropTypes.func,
    contributionTalk: PropTypes.array,
    setCharacterImageList: PropTypes.func,
    changeCharacter: PropTypes.func,
    setDefaultList: PropTypes.func,
}
