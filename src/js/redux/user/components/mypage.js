// @flow
import React, { Component } from "react"
import { Link as Footer } from "../../../component/footer/"
import { Page } from "../../../component/mypage/"
import type { State as UserMypage } from "../reducers/mypage"

type Props = {
  getUser: () => void,
  upload: (formData: any) => void,
  changeUserName: () => void,
  userMypage: UserMypage,
  save: ({ name: string }) => void
}
export default class Mypage extends Component {
  componentWillMount() {
    this.props.getUser()
  }
  props: Props
  handleChangeFile(e: Object) {
    const files = e.target.files
    this.uploadFile([files[0]])
  }
  uploadFile(files: Array<Object>) {
    const formData = new FormData()
    formData.append("file", files[0])

    this.props.upload(formData)
  }
  save() {
    this.props.save({
      name: this.props.userMypage.user.name
    })
  }
  render() {
    const { name, profileImageID } = this.props.userMypage.user
    return (
      <div>
        <Page
          name={name}
          onChangeeName={this.props.changeUserName.bind(this)}
          imageID={profileImageID}
          onChangeImage={this.handleChangeFile.bind(this)}
          onSave={this.save.bind(this)}
        />
        <Footer />
      </div>
    )
  }
}
