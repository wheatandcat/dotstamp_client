import * as types from "../../../constants/ActionTypes"
import reducer from "../../../character/reducers/list"

describe("character/reducers/list", () => {
  it("リストを取得する", () => {
    const result = reducer(undefined, {
      type: types.GET_CHARACTER_LIST,
      response: {
        Image: [
          {
            ID: 1,
            FileName: "test.png"
          }
        ]
      },
      receiveParam: {
        imageType: 2
      }
    })

    expect(result).toEqual({
      list: [
        {
          ID: 1,
          FileName: "test.png",
          imageType: 2,
        }
      ],
      icon: {
        id: 1,
        fileName: "test.png",
        select: 0,
      },
      imageType: 2,
      load: true,
      VoiceType:{},
      DefaultIcon: false,
    })
  })

})
