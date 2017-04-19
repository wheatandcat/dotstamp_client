import React from "react"
import {shallow} from "enzyme"
import ContributionList from "../../../redux/contribution/components/list"

function setup() {
  const props = {
    contributionList: {
      order: 0,
      init: true,
      list: [
        {
          ID: 1,
          Tag:[
            {
              ID: 1,
              Name: "abc",

            }
          ],
          Body: null,
          FewDaysAgoMessage: "",
          Title: "def",
          Updated: "2017-01-01T12:00:00Z",
          Created: "2017-01-01T12:00:00Z",
          User:{
            ID: 1,
            Name: "test",
          }
        }
      ],
      itemMap: {},
    },
    getList: jest.fn(),
  }

  const enzymeWrapper = shallow(<ContributionList {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("contribution/components/list", () => {
  it("リストを表示する", () => {
    const {props, enzymeWrapper} = setup()
    expect(enzymeWrapper.find("Link").props().to).toBe("/about")

    expect(props.getList.mock.calls.length).toBe(1)
  })
})
