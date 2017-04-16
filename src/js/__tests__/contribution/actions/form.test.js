import {addBody, editBody, changeCharacter, changeBody, changeTitle, changeTag} from "../../../contribution/actions/form"
import * as types from "../../../constants/ActionTypes"

describe("contribution/actions/form", () => {
  it("本文を追加する", () => {
    const result = addBody(
      "aaaa",
      {
        ID: 1,
        FileName: "abc"
      },
      1,
      1
    )

    expect(result).toEqual({
      type: types.ADD_CONTRIBUTION_FORM_BODY,
      character: {
        ID: 1,
        FileName: "abc"
      },
      body: "aaaa",
      directionType: 1,
      talkType: 1
    })
  })

  it("本文を編集する", () => {
    const result = editBody(
      "aaaa",
      {
        ID: 1,
        FileName: "abc"
      },
      1,
      1
    )

    expect(result).toEqual({
      type:  types.EDIT_CONTRIBUTION_FORM_BODY,
      character: {
        ID: 1,
        FileName: "abc"
      },
      body: "aaaa",
      directionType: 1,
      priority: 1
    })
  })

  it("キャラクターを変更する", () => {
    const result = changeCharacter(
      {
        ID: 1,
        FileName: "abc"
      }
    )

    expect(result).toEqual({
      type: types.CHANGE_CONTRIBUTION_FORM_CHARACTER,
      character: {
        ID: 1,
        FileName: "abc"
      }
    })
  })

  it("本文を変更する", () => {
    const result = changeBody("abc")

    expect(result).toEqual({
      type: types.CHANGE_CONTRIBUTION_FORM_BODY,
      body: "abc",
    })
  })

  it("タイトルを変更する", () => {
    const result = changeTitle("abc")

    expect(result).toEqual({
      type: types.CHANGE_CONTRIBUTION_FORM_TITLE,
      title: "abc"
    })
  })

  it("タグを変更する", () => {
    const result = changeTag("abc")

    expect(result).toEqual({
      type: types.CHANGE_CONTRIBUTION_FORM_TAG,
      tag: "abc"
    })
  })
})
