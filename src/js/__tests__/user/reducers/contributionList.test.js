import * as types from "../../../constants/ActionTypes"
import reducer from "../../../user/reducers/contributionList"
import {VIEW_STATUS_PRIVATE} from "../../../constants/contribution"


describe("user/reducers/contributionList", () => {
  it("投稿リストを取得する", () => {
    const result = reducer(undefined, {
      type: types.GET_USER_CONTRBUTION_LIST,
      response: {
        PrivteList: [
          {
            ID: 1
          }, {
            ID: 2
          }
        ],
        List: [
          {
            ID: 1
          }, {
            ID: 2
          }
        ],
        Count: 2,
        TitleList: ["aa", "bb"]

      }
    })

    expect(result).toEqual({
      ContributionId: 1,
      List: [
        {
          ID: 1
        }, {
          ID: 2
        }
      ],
      All: [
        {
          ID: 1
        }, {
          ID: 2
        }
      ],
      TitleList: [
        "aa", "bb"
      ],
      Count: 2,
      SearchTitle: "",
      Load: true,
      ViewStatus: VIEW_STATUS_PRIVATE,
      DeleteConfirm: false,
    })
  })
})
