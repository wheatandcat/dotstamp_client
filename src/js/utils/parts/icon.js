import React, {Component, PropTypes} from "react"
import Images, {IMAGE_DISPLAY_TYPE_ICON} from "../image"

const IMAGE_ID_DEFAULT = 0

export default class Icon extends Component {
    /**
     * 画像を取得する
     *
     * @return {object} html
     */
    getImage() {
        if (this.props.imageId == IMAGE_ID_DEFAULT) {
            return (
                <Images fileName="profile/default.png" />
            )
        }

        var fileName = this.props.imageId + ".jpg"

        return (
            <Images fileName={fileName} imageDisplayType={IMAGE_DISPLAY_TYPE_ICON} />
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <div>
                {this.getImage()}
            </div>
        )
    }
}

Icon.propTypes = {
    imageId: PropTypes.number,
}
