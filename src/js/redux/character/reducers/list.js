// @flow
import * as types from "../../../constants/ActionTypes"

type Character = {
  characterID: number,
  fileName: string,
  id: number,
  priority: number,
  voiceType: number
}

type Icon = {
  id: number,
  fileName: string,
  select: number
}

export type State = {
  list: Array<Character>,
  icon: Icon,
  load: boolean,
  voiceType: Object,
  defaultIcon: boolean
}

// 初期ステート設定
const initialState: State = {
  list: [],
  icon: {
    id: 0,
    fileName: "default1.png",
    select: 0
  },
  load: false,
  voiceType: {},
  defaultIcon: false
}

/**
 * アイコンを指定した状態を取得する
 *
 * @param  {object} state 状態
 * @param  {number} id  ID
 * @return {object} 状態
 */
function getSelectIconState(state, id): State {
  let count = 0
  for (const value of state.list) {
    if (value.id == id) {
      state.icon = {
        id: value.id,
        fileName: value.fileName,
        select: count
      }
    }
    count++
  }
  return state
}

/**
 * デフォルメキャラクターリストを取得する
 *
 * @return {array[]} キャラクターリスト
 */
function getDefaultCharacterList() {
  const hash = location.pathname
  if (
    hash.indexOf("contribution/new") == -1 &&
    hash.indexOf("contribution/experience") == -1 &&
    hash.indexOf("contribution/edit") == -1
  ) {
    return []
  }

  const list = []
  const max = 9

  for (let i = 1; i < max; i++) {
    list.push({
      characterID: 0,
      fileName: `default${i}.png`,
      id: i,
      priority: 0,
      voiceType: 0
    })
  }

  return list
}

export default function List(state: State = initialState, action: any) {
  switch (action.type) {
    case types.INIT_CHARACTER_LIST: {
      return JSON.parse(JSON.stringify(initialState))
    }
    case types.SET_CHARACTER_LIST_DEFAULT: {
      const tmp = []

      const image = getDefaultCharacterList()

      for (const value of image) {
        tmp.push(value)

        state.voiceType[value.id] = value.voiceType
      }

      state.defaultIcon = true
      state.list = tmp
      state.load = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CHARACTER_LIST:
    case types.GET_CHARACTER_LIST: {
      if (!Array.isArray(action.response.images)) {
        action.response.images = []
      }

      if (action.response.images.length == 0) {
        action.response.images = getDefaultCharacterList()
        state.defaultIcon = true
      } else {
        state.defaultIcon = false
      }

      const tmp = []

      for (const value: Object of action.response.images) {
        value.imageType = action.receiveParam.imageType
        tmp.push(value)

        state.voiceType[value.id] = value.voiceType
      }

      state.list = tmp
      state.load = true

      // アイコンの初期位置を取得
      if (action.response.images.length > 0) {
        state = getSelectIconState(state, action.response.images[0].id)
      }

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CHARACTER_LIST: {
      state = getSelectIconState(state, action.icon)

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CHARACTER_VOICE_TYPE: {
      state.voiceType[state.icon.id] = action.voiceType

      return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_CHARACTER_LIST: {
      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
