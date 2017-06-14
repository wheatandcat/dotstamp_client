/*global module*/
import { configure, addDecorator } from "@storybook/react"
import { setOptions } from "@storybook/addon-options"
import GithubCorner from "@personare/react-storybook-decorator-github-corner"
//import { checkA11y } from "storybook-addon-a11y";
import { Container } from "./container"

//addDecorator(checkA11y);
addDecorator(GithubCorner)
addDecorator(Container)

setOptions({
  downPanelInRight: true
})

const req = require.context("../src", true, /stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
