import React, {PropTypes, Component} from "react"
import Slick from "react-slick"
import {Thumbnail, Form , FormGroup} from "react-bootstrap"
import {Absolute} from "../../css/common.css"

import Image from "./image"

const DISPLAY_ICON_NUM_MIN = 1
const DISPLAY_ICON_NUM_MAX = 5


var NextArrow = React.createClass({
    render: function () {
        return (
            <div {...this.props} style={{display: "block"}}></div>
        )
    }
})

var PrevArrow = React.createClass({
    render: function () {
        return (
            <div {...this.props} style={{display: "block"}}></div>
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
    componentWillMount () {
        this.setState({
            over: false,
            overImage:{}
        })
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
            showNum = this.props.list.length
        }

        if (showNum % 2 == 0) {
            showNum--
        }

        var self = this

        const setting = {
            className: "center",
            centerPadding: "0px",
            centerMode: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: showNum,
            slidesToScroll: 1,
            focusOnSelect: true,
            pauseOnHover: true,
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
                <Image fileName={fileName} imageDisplayType={ImageType} onMouseOver={this.over.bind(this)} onMouseOut={this.out.bind(this)}/>
            </div>
        )
    }
    /**
     * マウスオーバーする
     *
     * @param  {object} e エレメント
     */
    over(e) {
        this.setState({
            over: true,
            overImage:{
                src: e.target.src,
                x: e.pageX,
                y: e.pageY,
            }
        })
    }
    /**
     * マウスアウトする
     */
    out() {
        this.setState({
            over: false,
            overImage:{}
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {

        let magnification = ""
        if (this.state.over) {
            let style = {
                top: "-60px",
                left: (this.state.overImage.x - 30) + "px",
                width: "100px",
                zIndex: 9999,
            }

            magnification = (
                <Thumbnail src={this.state.overImage.src} className={Absolute} style={style}/>
            )
        }

        if (this.props.list.length <= DISPLAY_ICON_NUM_MIN) {
            return (
                <div>
                    {magnification}
                    {this.getList()}
                </div>
            )
        }

        return (
            <div>
                {magnification}
                {this.getSlider()}
            </div>
        )
    }
}

Slider.propTypes = {
    list: PropTypes.array,
    handleClick: PropTypes.func,
    initialSlide: PropTypes.number,
    over: PropTypes.bool,
    overImage: PropTypes.object,
}

Slider.defaultProps = {
    over: false,
    overImage: {},
}
