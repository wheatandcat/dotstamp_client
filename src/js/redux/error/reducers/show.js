import * as types from "../../../constants/ActionTypes"

const initialState = {
    Message: "",
    ErrCode: 0,
    Show: false,
    BugReport: false,
    BugReported: false,
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.SHOW_ERROR_MESSAGE: {
        state.Message = action.message
        state.ErrCode = action.errCode
        state.Show = action.show

        return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_ERROR_MESSAGE: {
        state.Show = action.show

        return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_ERROR_BUG_REPORT: {
        state.BugReport = action.bugReport

        return JSON.parse(JSON.stringify(state))
    }
    case types.ADD_ERROR_BUG_REPORT: {
        state.BugReported = true

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
