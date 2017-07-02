// @flow
import fs from "fs"
import yml from "js-yaml"

const host = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "http://192.168.33.10:8080/"

const target = yml.safeLoad(fs.readFileSync("sitespeed/target.yml", "utf8"))
const list = target.urls.map(url => host + url)

fs.writeFileSync("sitespeed/url.txt", list.join("\n"))
