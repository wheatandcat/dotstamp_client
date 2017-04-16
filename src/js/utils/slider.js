import PropTypes from "prop-types"
import React, { Component } from "react"
import Slick from "react-slick"
import {Overlay, Image, Popover, Form , FormGroup} from "react-bootstrap"
import UtitsImage from "./image"
import {getUploadUrl} from "./common"

const DISPLAY_ICON_NUM_MIN = 1
const DISPLAY_ICON_NUM_MAX = 5

var self

window.addEventListener("keydown", function(event) {
    if (self == undefined) {
        return
    }

    if (!event.shiftKey) {
        return
    }

    if (event.keyCode == 39) {
        self.refs.slider.slickGoTo(self.state.key + 1)
    }
    if (event.keyCode == 37) {
        self.refs.slider.slickGoTo(self.state.key - 1)
    }

    if (!event.altKey) {
        if (event.keyCode == 38) {
            let item = self.props.list[self.state.key]
            self.setState({
                tip: true,
                overImage:{
                    src: getUploadUrl() + "character/" + item.FileName,
                }
            })
        }

        if (event.keyCode == 40) {
            self.setState({tip: false})
        }
    }
})


class NextArrow extends React.Component {
    render() {
        return (
            <div {...this.props} style={{display: "block"}}></div>
        )
    }
}

class PrevArrow extends React.Component {
    render() {
        return (
            <div {...this.props} style={{display: "block"}}></div>
        )
    }
}

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
            overImage:{},
            tip: false,
            key: 0,
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

        self = this

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
                self.change(currentSlide)
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
    getTip() {
        return (
            <Popover id="tooltip" title="拡大表示" onClick={this.click.bind(this)}>
                <Image src={this.state.overImage.src} width={120}/>
            </Popover>
        )
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
                <UtitsImage fileName={fileName} imageDisplayType={ImageType} onClick={this.click.bind(this)}/>
            </div>
        )
    }
    /**
     * 画像変更する
     *
     * @param  {number} key キー
     */
    change(key) {
        let item = this.props.list[key]
        this.setState({
            key: key,
            overImage:{
                src: getUploadUrl() + "character/" + item.FileName,
            }
        })
    }
    /**
     * クリックする
     *
     * @param  {object} e エレメント
     */
    click(e) {
        this.setState({
            tip: !this.state.tip,
            overImage:{
                src: e.target.src,
            }
        })
    }
    /**
     * マウスオーバーする
     *
     * @param  {object} e エレメント
     */
    over(e) {
        let target = e.target.getBoundingClientRect()

        this.setState({
            over: true,
            overImage:{
                src: e.target.src,
                x: target.left,
                y: target.top,
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
        if (this.props.list.length <= DISPLAY_ICON_NUM_MIN) {
            return (
                <div>
                    {this.getList()}
                </div>
            )
        }

        return (
            <div ref="target">
                <Overlay show={this.state.tip} target={this.refs.target} placement="top">
                    {this.getTip()}
                </Overlay>
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
