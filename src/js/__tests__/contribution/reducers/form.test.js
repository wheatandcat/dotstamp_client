import * as types from "../../../constants/ActionTypes"
import reducer from "../../../redux/contribution/reducers/form"
import { DIRECTION_LEFT } from "../../../redux/contribution/actions/talk"
import { VIEW_STATUS_PUBLIC } from "../../../constants/contribution"

describe("contribution/reducers/form", () => {
  it("本文を編集する", () => {
    const result = reducer(undefined, {
      type: types.EDIT_CONTRIBUTION_FORM_BODY
    })

    expect(result).toEqual({
      edit: false,
      tag: "",
      tagList: [],
      title: "",
      body: "",
      priority: null,
      character: {
        FileName: ""
      },
      directionType: DIRECTION_LEFT,
      height: 450,
      boardScroll: false,
      Warning: false,
      Message: "",
      viewStatus: VIEW_STATUS_PUBLIC,
      EditTmp: {
        Body: ""
      },
      Experience: false,
      help: false
    })
  })
})
