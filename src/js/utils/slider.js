import React, {PropTypes, Component} from "react"
import Slick from "react-slick"
import {Form , FormGroup} from "react-bootstrap"

import Image from "./image"

const DISPLAY_ICON_NUM_MIN = 1
const DISPLAY_ICON_NUM_MAX = 4


var NextArrow = React.createClass({
    render: function () {
        return (
            <div {...this.props} style={{display: "block", background: "red"}}></div>
        )
    }
})

var PrevArrow = React.createClass({
    render: function () {
        return (
            <div {...this.props} style={{display: "block", background: "red"}}></div>
        )
    }
})

export default class Slider extends Component {
    constructor (props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }
    next () {
        this.refs.slider.slickNext()
    }
    previous () {
        this.refs.slider.slickPrev()
    }
    /**
     * 描写更新後に実行する
     */
    componentDidUpdate () {
        if (this.props.list.length <= DISPLAY_ICON_NUM_MIN) {
            return
        }

        if (this.props.initialSlide != undefined) {
            this.refs.slider.slickGoTo(this.props.initialSlide)
        }
    }
    /**
     * 設定を取得する
     *
     * @return {object} 設定
     */
    getSetting () {
        let showNum = DISPLAY_ICON_NUM_MAX
        if (this.props.list.length < DISPLAY_ICON_NUM_MAX) {
            if (this.props.list.length % 2 == 1) {
                showNum = this.props.list.length - 1
            } else {
                showNum = this.props.list.length
            }
        }

        var self = this
        var setting = {
            dots: true,
            Form : "slider center",
            centerMode: true,
            infinite: true,
            initialSlide: 0,
            slidesToShow: showNum,
            focusOnSelect: true,
            touchMove: true,
            draggable: true,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            afterChange: function (currentSlide) {
                self.handleClick(currentSlide)
            }
        }

        return setting
    }
    /**
     * スライダーを取得する
     *
     * @return {objet} html
     */
    getSlider () {
        return (
            <Slick {...this.getSetting()} ref="slider">
                {Object.keys(this.props.list).map((key) =>
                    this.getImage(this.props.list[key].FileName, this.props.list[key].imageType, this.props.list[key].ID, key)
                 )}
            </Slick>
        )
    }
    /**
     * リストを取得する
     *
     * @return {objet} html
     */
    getList () {
        return (
            <Form inline>
                <FormGroup bsClass="center-block">
                    {Object.keys(this.props.list).map((key) =>
                        this.getImage(this.props.list[key].FileName, this.props.list[key].imageType, this.props.list[key].ID, key)
                     )}
                </FormGroup>
            </Form>
        )
    }
    /**
     * 選択する
     *
     * @param  {int} key 選択キー
     */
    handleClick (key) {
        this.props.handleClick(this.props.list[key])
    }
    /**
     * 画像を取得する
     *
     * @param  {string} fileName    画像名
     * @param  {int} ImageType      画像タイプ
     * @param  {int} id             id
     * @param  {int} key            key
     * @return {object} html
     */
    getImage (fileName, ImageType, id, key) {
        return (
            <div key={key}>
                <Image fileName={fileName} imageDisplayType={ImageType} />
            </div>
        )
    }

    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        if (this.props.list.length <= DISPLAY_ICON_NUM_MIN) {
            return this.getList()
        }

        return this.getSlider()
    }
}

Slider.propTypes = {
    list: PropTypes.array,
    handleClick: PropTypes.func,
    initialSlide: PropTypes.number,
}
