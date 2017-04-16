/*global module*/
import {configure} from "@kadira/storybook"
import {setOptions} from "@kadira/storybook-addon-options"

setOptions({
  downPanelInRight: true
})

const req = require.context("../src", true, /stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
