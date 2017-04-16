import React from "react"
import {shallow} from "enzyme"
import UserMypage from "../../../redux/user/components/mypage"

function setup() {
  const props = {
    userMypage: {
      User: {
        ID: 1,
        Name: "abc",
        ProfileImageID: 1,
      }

    },
    getUser: jest.fn(),
    uploadFile: jest.fn(),
    changeUserName: jest.fn(),
  }

  const enzymeWrapper = shallow(<UserMypage {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("contribution/components/list", () => {
  it("マイページを表示する", () => {
    const {props, enzymeWrapper} = setup()
    expect(enzymeWrapper.find("Icon").props().imageId).toBe(1)
    expect(enzymeWrapper.find("input").at(1).props().value).toBe("abc")

    expect(props.getUser.mock.calls.length).toBe(1)
    expect(props.changeUserName.mock.calls.length).toBe(0)

  })
})
