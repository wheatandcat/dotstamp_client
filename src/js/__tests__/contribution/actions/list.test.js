import * as types from "../../../constants/ActionTypes"

import { next, deleteItem } from "../../../redux/contribution/actions/list"

describe("contribution/actions/list", () => {
  it("次のページを表示する", () => {
    const expected = {
      type: types.GET_CONTRIBUTION_LIST_NEXT
    }

    const result = next()

    expect(result).toEqual(expected)
  })

  it("アイテムを削除する", () => {
    const id = 1
    const expected = {
      type: types.DELETE_CONTRIBUTION_LIST_ITEM,
      id
    }

    const result = deleteItem(id)

    expect(result).toEqual(expected)
  })
})
