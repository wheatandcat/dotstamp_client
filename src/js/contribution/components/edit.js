import React, {PropTypes, Component} from "react"
import Http from "../../utils/http"
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
        Http.postApi("contribution/edit/" + id).then((response) => {
            return this.props.getDetail(id, response.body.Title, response.body.Body, response.body.Tag)
        })
        Http.postApi("characterImage/list/").then((response) => {
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
    render() {
        return (
            <FormHeader
                title = {this.props.contributionEdit.title}
                contributionId = {this.props.contributionEdit.id}
                contributionTalk = {this.props.contributionTalk}
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
