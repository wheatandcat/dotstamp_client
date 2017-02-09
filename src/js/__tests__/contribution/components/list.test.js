jest.dontMock("../../../contribution/components/list")

import React from "react"
import {shallow} from "enzyme"
import ContributionList from "../../../contribution/components/list"

function setup() {
    const props = {
        contributionList: {
            order: 0
        },
        getList: jest.fn(),
        showError: jest.fn(),
    }

    const enzymeWrapper = shallow(<ContributionList {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe("ContributionComponentsList", () => {
    it("リストを表示する", () => {
        const {enzymeWrapper, props} = setup()

        expect(props.showError.mock.calls.length).toBe(0)
        expect(props.getList.mock.calls.length).toBe(0)
    })
})
