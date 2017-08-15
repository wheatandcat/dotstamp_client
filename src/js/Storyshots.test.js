// @flow
import initStoryshots from "@storybook/addon-storyshots"
import "./test-utils/storyshotsPatch"
import Dates from "./test-utils/dates"

Dates.setTimezoneOffset(540)
// $FlowDisableLine
Date.now = jest.fn(() => 1482363367071)

jest.mock("react-slick/lib/mixins/helpers")
jest.mock("react-bootstrap/lib/Modal")

initStoryshots({
  framework: "react"
})
