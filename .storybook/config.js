/*global module*/
import {configure, addDecorator} from "@kadira/storybook"
import {setOptions} from "@kadira/storybook-addon-options"
import GithubCorner from "@personare/react-storybook-decorator-github-corner"

addDecorator(GithubCorner)

setOptions({
  downPanelInRight: true
})

const req = require.context("../src", true, /stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
