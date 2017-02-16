import React from "react"
import {shallow} from "enzyme"
import LoginLogin from "../../../login/components/login"

function setup() {
    const props = {
        loginCheck: jest.fn(),
    }

    const enzymeWrapper = shallow(<LoginLogin {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe("login/components/login", () => {
    it("表示する", () => {
        const {props, enzymeWrapper} = setup()

        expect(props.loginCheck.mock.calls.length).toBe(0)

        expect(enzymeWrapper.find("input").at(0).props().name).toBe("user")
    })
})
