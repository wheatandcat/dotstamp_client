// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link as Footer } from "../../../component/footer/"
import { Page } from "../../../component/mypage/"

export default class Mypage extends Component {
  componentWillMount() {
    this.props.getUser()
  }
  handleChangeFile(e: Object) {
    const fileList = e.target.files
    this.uploadFile([fileList[0]])
  }
  uploadFile(fileList: Array<Object>) {
    const formData = new FormData()
    formData.append("file", fileList[0])

    this.props.upload(formData)
  }
  save() {
    this.props.save({
      name: this.props.userMypage.User.Name
    })
  }
  render() {
    return (
      <div>
        <Page
          name={this.props.userMypage.User.Name}
          onChangeeName={this.props.changeUserName.bind(this)}
          imageID={this.props.userMypage.User.ProfileImageID}
          onChangeImage={this.handleChangeFile.bind(this)}
          onSave={this.save.bind(this)}
        />
        <Footer />
      </div>
    )
  }
}

Mypage.propTypes = {
  getUser: PropTypes.func,
  upload: PropTypes.func,
  changeUserName: PropTypes.func,
  userMypage: PropTypes.object,
  save: PropTypes.func
}
