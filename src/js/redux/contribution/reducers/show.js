import * as types from "../../../constants/ActionTypes"
import {PROBLEM_TYPE_SPAM} from "../../../constants/contribution"

// 初期ステート設定
const initialState = {
  ID: 0,
  Title: "",
  Body: [],
  TagList: [],
  User: {
    ID: 0,
    Name: "",
    ProfileImageID: 0
  },
  FollowCount: -1,
  UpdatedAt: "",
  CreatedAt: "",
  Following: false,
  Load: false,
  Problem: false,
  ProblemType: PROBLEM_TYPE_SPAM,
  AddProblem: false,
  SoundFile: false,
  Movie: {}
}

export default function Show(state = initialState, action) {
  switch (action.type) {
  case types.GET_CONTRIBUTION_SHOW:
    {
      state.ID = action.response.ID
      state.Title = action.response.Title
      state.Body = action.response.Body
      state.TagList = action.response.Tag
      state.User = action.response.User
      state.UpdatedAt = action.response.UpdatedAt
      state.CreatedAt = action.response.CreatedAt
      state.FollowCount = action.response.FollowCount
      state.Following = action.response.Following
      state.SoundFile = action.response.SoundFile
      state.Movie = action.response.Movie

      state.Load = true

      return JSON.parse(JSON.stringify(state))
    }
  case types.DELETE_FOLLOW:
    {
      state.FollowCount = action.response.FollowCount
      state.Following = false

      return JSON.parse(JSON.stringify(state))
    }
  case types.ADD_FOLLOW:
    {
      state.FollowCount = action.response.FollowCount
      state.Following = true

      return JSON.parse(JSON.stringify(state))
    }
  case types.OPEN_CONTRIBUTION_SHOW_PROBLEM:
    {
      state.AddProblem = false
      state.Problem = true

      return JSON.parse(JSON.stringify(state))
    }
  case types.CLOSE_CONTRIBUTION_SHOW_PROBLEM:
    {
      state.Problem = false

      return JSON.parse(JSON.stringify(state))
    }
  case types.SET_CONTRIBUTION_SHOW_PROBLEM_TYPE:
    {
      state.ProblemType = action.problemType

      return JSON.parse(JSON.stringify(state))
    }
  case types.ADD_CONTRIBUTION_SHOW_PROBLEM:
    {
      state.AddProblem = true

      return JSON.parse(JSON.stringify(state))
    }
  case types.DELETE_CONTRIBUTION_SHOW:
    {
      return JSON.parse(JSON.stringify({
        ID: 0,
        Title: "",
        Body: [],
        TagList: [],
        User: {
          ID: 0,
          Name: "",
          ProfileImageID: 0
        },
        FollowCount: -1,
        UpdatedAt: "",
        CreatedAt: "",
        Following: false,
        Load: false,
        Problem: false,
        ProblemType: PROBLEM_TYPE_SPAM,
        AddProblem: false,
        SoundFile: false
      }))
    }
  default:
    return state
  }
}
