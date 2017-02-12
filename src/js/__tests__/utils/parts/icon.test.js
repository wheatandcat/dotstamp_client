import React from "react"
import {shallow} from "enzyme"
import Icon from "../../../utils/parts/icon"

function setup() {
    const props = {
        imageId: 1
    }

    const enzymeWrapper = shallow(<Icon {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe("contribution/components/list", () => {
    it("アイコンをデフォルト画像で表示する", () => {
        const enzymeWrapper = shallow(<Icon imageId={0}/>)
        expect(enzymeWrapper.find("Images").props().fileName).toBe("profile/default.png")
    })

    it("アイコンを画像を指定して表示する", () => {
        const {enzymeWrapper} = setup()
        expect(enzymeWrapper.find("Images").props().fileName).toBe("1.jpg")
    })
})
