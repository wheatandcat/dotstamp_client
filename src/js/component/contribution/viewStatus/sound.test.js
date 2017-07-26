// @flow
import React from "react"
import { shallow } from "enzyme"
import Sound from "./sound"

function setup(params: {
  contributionId?: number,
  created: boolean,
  experience: boolean
}) {
  const props = {
    contributionId: params.contributionId,
    addSound: jest.fn(),
    created: params.created,
    experience: params.experience
  }

  const enzymeWrapper = shallow(<Sound {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/viewStatus/private", () => {
  it("no contributionId", () => {
    setup({ created: true, experience: true })
  })

  it("contributionId 1", () => {
    setup({ contributionId: 1, created: true, experience: true })
  })

  it("created false and experience:false", () => {
    setup({ contributionId: 1, created: false, experience: false })
  })

  it("on click ", () => {
    const { props, enzymeWrapper } = setup({
      contributionId: 1,
      created: false,
      experience: false
    })
    enzymeWrapper.find("Button").simulate("click")
    expect(props.addSound).toHaveBeenCalled()
  })
})
