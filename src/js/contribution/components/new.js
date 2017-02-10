import React, { Component, PropTypes } from "react"
import FormHeader from "../containers/form/header"

export default class New extends Component {
    componentWillMount () {
        this.getList()
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
    contributionTalk: PropTypes.array,
    setCharacterImageList: PropTypes.func,
    changeCharacter: PropTypes.func,
}
