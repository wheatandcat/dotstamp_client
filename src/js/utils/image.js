/*global UPLOAD_PATH*/

import React, { Component, PropTypes } from "react"
import { Image } from "react-bootstrap"

import { UserIcon } from "./../../css/user"
import { TalkIcon, TalkImage } from "./../../css/talk"
import { FormIcon } from "./../../css/form"
import { MainIcon } from "./../../css/character"

// 表示タイプ
export const IMAGE_DISPLAY_TYPE_NONE = 0
export const IMAGE_DISPLAY_TYPE_TALK_IMAGE = 1
export const IMAGE_DISPLAY_TYPE_CHARACTER = 2
export const IMAGE_DISPLAY_TYPE_CHARACTER_TALK = 3
export const IMAGE_DISPLAY_TYPE_CHARACTER_FORM = 4
export const IMAGE_DISPLAY_TYPE_CHARACTER_MAIN = 5


var imageDisplayTypeList

export default class Images extends Component {
    componentWillMount () {
        imageDisplayTypeList = {}

        imageDisplayTypeList[IMAGE_DISPLAY_TYPE_TALK_IMAGE] = {
            src: (fileName) => {
                return this.getUploadSrc("talk/", fileName)
            },
            className: TalkImage,
            option: {},
        }
        imageDisplayTypeList[IMAGE_DISPLAY_TYPE_CHARACTER] = {
            src: (fileName) => {
                return this.getUploadSrc("character/", fileName)
            },
            className: UserIcon,
            option: {
                circle: true,
            },
        }
        imageDisplayTypeList[IMAGE_DISPLAY_TYPE_CHARACTER_TALK] = {
            src: (fileName) => {
                return this.getUploadSrc("character/", fileName)
            },
            className: TalkIcon,
            option: {},
        }
        imageDisplayTypeList[IMAGE_DISPLAY_TYPE_CHARACTER_FORM] = {
            src: (fileName) => {
                return this.getUploadSrc("character/", fileName)
            },
            className: FormIcon,
            option: {
                circle: true,
            },
        }
        imageDisplayTypeList[IMAGE_DISPLAY_TYPE_CHARACTER_MAIN] = {
            src: (fileName) => {
                return this.getUploadSrc("character/", fileName)
            },
            className: MainIcon + " center-block",
            option: {},
        }
    }
    /**
     * アップロード画像ファイルパス取得する
     *
     * @param  {string} dirName ディレクトリ名
     * @param  {string} fileName 画像ファイル名
     * @return {string}  画像ファイルパス
     */
    getUploadSrc (dirName, fileName) {
        return UPLOAD_PATH + dirName + fileName
    }
    /**
     * 画像取得する
     *
     * @return {object}  html
     */
    getImg () {
        let setting = imageDisplayTypeList[this.props.imageDisplayType]

        return (
            <Image src={setting.src(this.props.fileName)} className={setting.className} {...setting.option} />
        )
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <span>{this.getImg()}</span>
        )
    }
}

Images.propTypes = {
    imageClassName: PropTypes.string,
    fileName: PropTypes.string,
    imageDisplayType: PropTypes.number,
}
