// @flow
import React from "react"
import {shallow} from "enzyme"
import {Menu} from "./"

function setup() {
  const props = {
    voiceList:[
      {
        type: 1,
        name: "ボイス1",
      },
      {
        type: 2,
        name: "ボイス2",
      },
      {
        type: 3,
        name: "ボイス3",
      },
    ],
    voiceType: 1,
    voiceLabel: "voice1",
    fileName: "0.png",
    IconId: 1,
    onDelete: jest.fn(),
    onVoiceType: jest.fn(),
    onSave: jest.fn(),
  }

  const enzymeWrapper = shallow(<Menu {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("ccomponents/character/menu", () => {
  it("表示", () => {
    setup()
  })
})
