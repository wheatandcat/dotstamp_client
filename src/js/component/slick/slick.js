import PropTypes from "prop-types"
import React, { Component } from "react"
import Slider from "react-slick"
import { Overlay, Image, Popover } from "react-bootstrap"
import { Character } from "../image/"
import { getUploadUrl } from "../../utils/common"
import styles from "./styles.css"

const DISPLAY_ICON_NUM_MAX = 5

let self

function action(event) {
  if (self == undefined) {
    return
  }

  if (!event.shiftKey) {
    return
  }

  if (event.keyCode == 39) {
    self.slider.slickGoTo(self.state.key + 1)
  } else if (event.keyCode == 37) {
    self.slider.slickGoTo(self.state.key - 1)
  }

  if (event.altKey) {
    return
  }

  if (event.keyCode == 38) {
    const item = self.props.list[self.state.key]
    self.setState({
      tip: true,
      balloonImage: {
        src: `${getUploadUrl()}character/${item.FileName}`
      }
    })
  } else if (event.keyCode == 40) {
    self.setState({ tip: false })
  }
}

window.addEventListener("keydown", action)

export default class Slick extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.setState({
      balloon: false,
      balloonImage: {},
      tip: false,
      key: 0
    })

    self = this
  }
  componentDidUpdate() {
    if (!this.props.defaultValue) {
      return
    }

    this.slider.slickGoTo(this.props.defaultValue)
  }
  setting() {
    let showNum = DISPLAY_ICON_NUM_MAX
    if (this.props.list.length < DISPLAY_ICON_NUM_MAX) {
      showNum = this.props.list.length
    }

    if (showNum % 2 == 0) {
      showNum--
    }

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
      pauseOnHballoon: true,
      afterChange(currentSlide) {
        self.change(currentSlide)
        self.props.onClick(self.props.list[currentSlide])
      }
    }

    return setting
  }
  change(key) {
    const item = this.props.list[key]
    this.setState({
      key,
      balloonImage: {
        src: `${getUploadUrl()}character/${item.FileName}`
      }
    })
  }
  click(event) {
    this.setState({
      tip: !this.state.tip,
      balloonImage: {
        src: event.target.src
      }
    })
  }
  balloon(event) {
    const target = event.target.getBoundingClientRect()

    this.setState({
      balloon: true,
      balloonImage: {
        src: event.target.src,
        x: target.left,
        y: target.top
      }
    })
  }
  render() {
    return (
      <div
        ref={c => {
          this.target = c
        }}
        className={styles.slick}
      >
        <Overlay show={this.state.tip} target={this.target} placement="top">
          <Popover id="tooltip" title="拡大表示" onClick={this.click.bind(this)}>
            <Image src={this.state.balloonImage.src} width={120} />
          </Popover>
        </Overlay>
        <Slider
          {...this.setting()}
          ref={c => {
            this.slider = c
          }}
        >
          {this.props.list.map(data => (
            <div key={data.ID}>
              <Character
                fileName={data.FileName}
                onClick={this.click.bind(this)}
                circle
                size="small"
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

Slick.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
  defaultValue: PropTypes.number,
  balloon: PropTypes.bool,
  balloonImage: PropTypes.object
}

Slick.defaultProps = {
  balloon: false,
  balloonImage: {},
  defaultValue: 0
}
