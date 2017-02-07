import React, { Component, PropTypes } from "react"
import Http from "../../utils/http"
import FormHeader from "../containers/form/header"

export default class New extends Component {
    componentWillMount () {
        // TODO:既に持っていたら取らないようにする
        this.getList()
    }
    /**
     * リストを取得する
     */
    getList () {
        Http.postApi("characterImage/list/").then((response) => {
            console.log (response.body)
            this.props.setCharacterImageList(response.body)

            if (response.body.Image.length > 0) {
                this.props.changeCharacter(response.body.Image[0])
            }
        })
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
