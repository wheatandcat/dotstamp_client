/*global module*/
import {configure} from "@kadira/storybook"

function loadStories() {
    require("../src/js/utils/parts/stories.js")
}

configure(loadStories, module)
