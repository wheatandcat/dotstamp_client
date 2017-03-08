import React from "react"
import {shallow} from "enzyme"
import LoginAuth from "../../../login/components/auth"

function setupNologin() {
    const props = {
        loginAuth: {
            Login: false,
            Name: "",
        },
        logout: jest.fn(),
        auth: jest.fn(),
    }

    const enzymeWrapper = shallow(<LoginAuth {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

function setuplogin() {
    const props = {
        loginAuth: {
            Login: true,
            Name: "abc",
        },
        logout: jest.fn(),
        auth: jest.fn(),
    }

    const enzymeWrapper = shallow(<LoginAuth {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe("login/components/auth", () => {
    it("ログインなし時を表示する", () => {
        const {props, enzymeWrapper} = setupNologin()
        expect(enzymeWrapper.find("LinkContainer").at(0).props().to).toBe("/login/new")

        expect(props.auth.mock.calls.length).toBe(1)
    })

    it("ログイン時を表示する", () => {
        const {props, enzymeWrapper} = setuplogin()
        expect(enzymeWrapper.find("NavDropdown").props().title).toBe("abc")

        expect(props.logout.mock.calls.length).toBe(0)

        it("ログアウトする", (enzymeWrapper) => {
            enzymeWrapper.find("MenuItem").at(5).simulate("click")
            expect(props.logout.mock.calls.length).toBe(1)
        })
    })
})
