import fetch from "isomorphic-fetch"

/**
 * 初期設定する
 *
 * @return {[type]} [description]
 */
export function initList() {
    return {type: "GET_CONTRIBUTION_LIST", list: [], order: 0}
}

/**
 * リストを取得する
 *
 * @param  {array[]} list リスト
 * @param  {bool} init 初期アクセス
 * @return {object}  アクション
 */
export function getList(list, init) {


    return {type: "GET_CONTRIBUTION_LIST", list: list, init: init}
}

/**
 * 次のページを表示する
 *
 * @return {object}  アクション
 */
export function next() {
    return {type: "GET_CONTRIBUTION_LIST_NEXT"}
}

/**
 * アイテムを追加する
 *
 * @param  {object} response レスポンス
 * @return {object}  アクション
 */
export function addItem(response) {
    return {type: "ADD_CONTRIBUTION_LIST_ITEM", response: response}
}

/**
 * アイテムを削除する
 *
 * @param  {number} id 投稿ID
 * @return {object}  アクション
 */
export function deleteItem(id) {
    return {type: "DELETE_CONTRIBUTION_LIST_ITEM", id: id}
}
export const REQUEST_POSTS = "REQUEST_POSTS"
function requestPosts(reddit) {
    return {type: REQUEST_POSTS, reddit}
}

export const RECEIVE_POSTS = "RECEIVE_POSTS"
function receivePosts(reddit, json) {
    console.log (json)
    return {
        type: RECEIVE_POSTS,
        reddit,
        json: json,
        receivedAt: Date.now()
    }
}

function fetchPosts(reddit, paramas) {
    console.log("fetchPosts")
    const requestParams = {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }

    return dispatch => {
        dispatch(requestPosts(reddit))
        return fetch("http://192.168.33.10:8080/contribution/list/", {...requestParams},...paramas)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(reddit, json)))
    }
}

function shouldFetchPosts(state, reddit) {
    console.log ("shouldFetchPosts")
    console.log (state)
    const posts = state[reddit].fetch
    if (!posts.isFetching) {
        return true
    } else if (posts.isFetching) {

        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(reddit, paramas) {

    // Note: この関数が返すfunctionは、次にdispatchする関数を決めるgetState()も受け取る。
    // Redux ThunkミドルウェアがdispatchとgetStateを渡す。

    // キャッシュしている値が既にあるのであれば、
    // ネットワークリクエストを避けるのに使える。

    return (dispatch, getState) => {
        console.log ("q1111")
        console.log (dispatch)
        console.log (getState())
        console.log (reddit)
        if (shouldFetchPosts(getState(), reddit)) {
            // thunkからthunkを呼び出せる！
            console.log ("通信")
            return dispatch(fetchPosts(reddit, paramas))
        } else {
            // 下記コードを呼び、wait forには何もないことを知らせる
            return Promise.resolve()
        }
    }
}
