/*global process*/
import fetch from "isomorphic-fetch"
import * as types from "../constants/ActionTypes"

// ホスト
var host = (typeof (process.env.BASE_URL) == "undefined") ? "http://localhost:3000/api/" : process.env.BASE_URL + "api/"
var staticHost = (typeof (process.env.BASE_URL) == "undefined") ? "http://localhost:3000" : process.env.BASE_URL

// 通信状態リスト
var fetchStateList = []

/**
 * 必要な場合はPOST通信を行う
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchPostsIfNeeded(url, type, paramas = {}, receiveParam = {}) {
  return (dispatch) => {
    if (shouldFetchPosts(url)) {
      // thunkからthunkを呼び出せる！
      return dispatch(fetchPosts(url, type, paramas, receiveParam))
    } else {
      // 下記コードを呼び、wait forには何もないことを知らせる
      return Promise.resolve()
    }
  }
}

/**
 * 通信するか判定する
 *
 * @param  {string} url URL
 * @return {bool} 通信フラグ
 */
function shouldFetchPosts(url) {
  if (fetchStateList[url] == undefined) {
    fetchStateList[url] = {
      isFetching: false
    }
  }

  if (!fetchStateList[url].isFetching) {
    return true
  }

  return false
}

/**
 * レスポンスを返す
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} response レスポンス
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
function receiveResponse(url, type, response, receiveParam = {}) {
  fetchStateList[url].isFetching = false

  return {
    type,
    url,
    response,
    receivedAt: Date.now(),
    receiveParam
  }
}

/**
 * エラーレスポンスを返す
 *
 * @param  {string} url URL
 * @param  {object} response レスポンス
 * @return {object} アクション
 */
function receiveErrorResponse(url, response) {
  fetchStateList[url].isFetching = false

  return {
    type: types.SHOW_ERROR_MESSAGE,
    message: response.Message,
    errCode: response.ErrCode,
    show: true,
    receivedAt: Date.now(),
  }
}

/**
 * 通信する
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} レスポンス
 */
function fetchPosts(url, type, paramas, receiveParam) {

  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: Object.keys(paramas).map(function(key){ return key+"="+ paramas[key] }).join("&"),
  }

  return dispatch => {
    return fetch(host + url, requestParams)
    .then(response =>
      response.json().then(json => ({
        status: response.status,
        json
      })
    ))
    .then(
      ({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      }
    )
  }
}

/**
 * 必要な場合はアップロード通信を行う
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchUploadIfNeeded(url, type, paramas, receiveParam = {}) {
  return (dispatch) => {
    if (shouldFetchPosts(url)) {
      // thunkからthunkを呼び出せる！
      return dispatch(fetchUpload(url, type, paramas, receiveParam))
    } else {
      // 下記コードを呼び、wait forには何もないことを知らせる
      return Promise.resolve()
    }
  }
}

/**
 * アップロードする
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} レスポンス
 */
function fetchUpload(url, type, paramas, receiveParam) {
  const requestParams = {
    method: "POST",
    credentials: "include",
    headers: {
      "Accept": "application/json, */*",
    },
    body: paramas,
  }

  return dispatch => {
    return fetch(host + url, {
      ...requestParams
    })
    .then(response =>
      response.json().then(json => ({
        status: response.status,
        json
      })
    ))
    .then(
      ({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      }
    )
  }
}


/**
 * 必要な場合は通信しテキストを取得する
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchTextIfNeeded(url, type, receiveParam) {
  return (dispatch) => {
    if (shouldFetchPosts(url)) {
      // thunkからthunkを呼び出せる！
      return dispatch(fetchText(url, type, receiveParam))
    } else {
      // 下記コードを呼び、wait forには何もないことを知らせる
      return Promise.resolve()
    }
  }
}

/**
 * テキストを取得する
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} レスポンス
 */
function fetchText(url, type, receiveParam) {

  return dispatch => {
    return fetch(staticHost + url)
    .then(response =>
      response.text().then(json => ({
        status: response.status,
        json
      })
    ))
    .then(
      ({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      }
    )
  }
}
