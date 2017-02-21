import React, {PropTypes, Component} from "react"
import {Media, Glyphicon} from "react-bootstrap"
import Icon from "../../parts/icon"
import Tag from "../../parts/tag"
import {Link} from "react-router"
import {DateFormat} from "../../common"

import {Strong, Gap, Dark, Thin, Full} from "../../../../css/common.css"
import {Body, Image, Follow} from "../../../../css/contribution.css"


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
    getSearchMatch() {
        let search = this.props.Search

        if (search == "") {
            return ""
        }

        let index = search.indexOf(this.props.searchMatch)
        let len = search.length

        let start = (index < 11)? 0 : index - 10
        let end = (len < index + 60)? len : index + 60


        return (
            <div className={Thin}>
                {this.replaceMatchText(search.substring(start, end) + "...", this.props.searchMatch)}
            </div>
        )
    }
    /**
     * 改行を変換する
     *
     * @param  {string} text テキスト
     * @return {string} 改行変換後テキスト
     */
    replaceMatchText (text, search) {
        let regex = new RegExp(search + "(.*?)", "g")

        return text.split(regex).map(function (line, i) {
            if (line == "" && i > 0){
                return (
                    <span key={i} className={Dark}>
                        {search}
                    </span>
                )
            } else {
                return line
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
            <Media className={Full}>
                <Media.Left className={Image}>
                    <Icon imageId={this.props.User.ProfileImageID} />
                </Media.Left>
                <Media.Body className={Body}>
                    {this.props.User.Name}&nbsp;さんが {DateFormat(this.props.UpdatedAt)}に投稿
                    <Media.Heading>
                        <Link to={this.getShowPath(this.props.ID)} className={Strong}>
                            {this.props.Title}
                        </Link>
                        <div className={Gap}>
                            <Tag list={this.props.Tag} />
                        </div>
                    </Media.Heading>
                    {this.getSearchMatch()}
                </Media.Body>
                <Media.Right className={Follow}>
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
    Search: PropTypes.string,
    searchMatch: PropTypes.string,
}
