import PropTypes from "prop-types"
import React, { Component } from "react"
import FormHeader from "../containers/form/header"

export default class Edit extends Component {
    componentWillMount() {
        this.edit(this.props.params.id)
    }
    /**
     * 編集する
     *
     * @param  {number} id 投稿ID
     */
    edit(id) {
        this.props.getDetail(id)
        this.props.setCharacterImageList()
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <FormHeader
                title = {this.props.contributionEdit.title}
                viewStatus = {this.props.contributionEdit.ViewStatus}
                contributionId = {this.props.contributionEdit.id}
                contributionTalk = {this.props.contributionTalk}
                sound = {this.props.contributionEdit.Sound}
            />
        )
    }
}

Edit.propTypes = {
    params: PropTypes.object,
    contributionEdit: PropTypes.object,
    contributionTalk: PropTypes.array,
    getDetail: PropTypes.func,
    setCharacterImageList: PropTypes.func,
    changeCharacter: PropTypes.func,
}
