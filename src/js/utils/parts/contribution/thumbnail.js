import React, {PropTypes, Component} from "react"
import {Media, Glyphicon} from "react-bootstrap"
import Icon from "../../parts/icon"
import Tag from "../../parts/tag"
import {Link} from "react-router"
import {DateFormat} from "../../common"

import {Strong, Gap} from "../../../../css/common.css"

export default class Thumbnail extends Component {
    /**
     * 詳細画面リンクを取得する
     *
     * @param  {number} id 投稿ID
     * @return {string} 詳細画面リンク
     */
    getShowPath(id) {
        return "/contribution/show/" + id
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        console.log (this.props)
        return (
            <Media>
                <Media.Left>
                    <Icon imageId={this.props.User.ProfileImageID} />
                </Media.Left>
                <Media.Body>
                    {this.props.User.Name}&nbsp;さんが {DateFormat(this.props.UpdatedAt)}に投稿
                    <Media.Heading>
                        <Link to={this.getShowPath(this.props.ID)} className={Strong}>
                            {this.props.Title}
                        </Link>
                        <div className={Gap}>
                            <Tag list={this.props.Tag} />
                        </div>
                    </Media.Heading>
                </Media.Body>
                <Media.Right>
                    <Glyphicon glyph="thumbs-up"/>
                    <span>3</span>
                </Media.Right>
            </Media>
        )
    }
}

Thumbnail.propTypes = {
    Title: PropTypes.string,
    ID:  PropTypes.number,
    User:  PropTypes.object,
    UpdatedAt:  PropTypes.string,
    Tag:  PropTypes.array,
}
