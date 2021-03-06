// @flow
/* global process*/
import fetch from "isomorphic-fetch"
import invariant from "assert"
import * as types from "../constants/ActionTypes"

// ホスト
const BASE_URL = process.env.BASE_URL
invariant(BASE_URL)

const host: string =
  typeof process.env.BASE_URL === "undefined"
    ? "http://localhost:3000/api/"
    : `${BASE_URL}api/`

const staticHost: string =
  typeof process.env.BASE_URL === "undefined"
    ? "http://localhost:3000"
    : BASE_URL

// 通信状態リスト
const fetchStateList: Object = {}

/**
 * 通信するか判定する
 *
 * @param  {string} url URL
 * @return {bool} 通信フラグ
 */
function shouldFetchPosts(url: string): boolean {
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
function receiveResponse(
  url: string,
  type: string,
  response: Object,
  receiveParam = {}
): Object {
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
function receiveErrorResponse(url: string, response: Object) {
  fetchStateList[url].isFetching = false
  const { message, errCode } = response

  return {
    type: types.SHOW_ERROR_MESSAGE,
    message,
    errCode,
    show: true,
    receivedAt: Date.now()
  }
}

/**
 * 通信する(GET)
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} レスポンス
 */
function fetchGets(url: string, type: string, receiveParam: Object) {
  const requestParams = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }

  return dispatch =>
    fetch(host + url, requestParams)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      })
}

/**
 * 必要な場合は通信しテキストを取得する
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchGetsIfNeeded(
  url: string,
  type: string,
  receiveParam: Object
): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      return dispatch(fetchGets(url, type, receiveParam))
    }

    return Promise.resolve()
  }
}

/**
 * 通信する(DELETE)
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} レスポンス
 */
function fetchDelete(url: string, type: string, receiveParam: Object) {
  const requestParams = {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }

  return dispatch =>
    fetch(host + url, requestParams)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      })
}

/**
 * 必要な場合は通信しテキストを取得する
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchDeleteIfNeeded(
  url: string,
  type: string,
  receiveParam: Object
): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      return dispatch(fetchDelete(url, type, receiveParam))
    }

    return Promise.resolve()
  }
}

/**
 * 通信する(POST)
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} レスポンス
 */
function fetchPosts(
  url: string,
  type: string,
  paramas: Object,
  receiveParam: Object
) {
  const requestParams = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paramas)
  }

  return dispatch =>
    fetch(host + url, requestParams)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      })
}

/**
 * 必要な場合はPOST通信を行う
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchPostsIfNeeded(
  url: string,
  type: string,
  paramas: Object = {},
  receiveParam: Object = {}
): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      // thunkからthunkを呼び出せる！
      return dispatch(fetchPosts(url, type, paramas, receiveParam))
    }
    // 下記コードを呼び、wait forには何もないことを知らせる
    return Promise.resolve()
  }
}

/**
 * 通信する(PUT)
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} レスポンス
 */
function fetchPuts(
  url: string,
  type: string,
  paramas: Object,
  receiveParam: Object
) {
  const requestParams = {
    method: "PUT",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paramas)
  }

  return dispatch =>
    fetch(host + url, requestParams)
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      })
}

/**
 * 必要な場合はPOST通信を行う
 *
 * @param  {string} url URL
 * @param  {string} type タイプ
 * @param  {object} paramas パラメータ
 * @param  {object} receiveParam 返しパラメータ
 * @return {object} アクション
 */
export function fetchPutsIfNeeded(
  url: string,
  type: string,
  paramas: Object = {},
  receiveParam: Object = {}
): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      return dispatch(fetchPuts(url, type, paramas, receiveParam))
    }

    return Promise.resolve()
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
function fetchUpload(
  url: string,
  type: string,
  paramas: Object,
  receiveParam: Object
) {
  const requestParams = {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json, */*"
    },
    body: paramas
  }

  return dispatch =>
    fetch(host + url, {
      ...requestParams
    })
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      })
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
export function fetchUploadIfNeeded(
  url: string,
  type: string,
  paramas: Object,
  receiveParam: Object = {}
): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      return dispatch(fetchUpload(url, type, paramas, receiveParam))
    }

    return Promise.resolve()
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
export function fetchTextIfNeeded(
  url: string,
  type: string,
  receiveParam: Object
): Object {
  return dispatch => {
    if (shouldFetchPosts(url)) {
      // thunkからthunkを呼び出せる！
      return dispatch(fetchText(url, type, receiveParam))
    }
    // 下記コードを呼び、wait forには何もないことを知らせる
    return Promise.resolve()
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
function fetchText(url: string, type: string, receiveParam: Object) {
  return dispatch =>
    fetch(staticHost + url)
      .then(response =>
        response.text().then(json => ({
          status: response.status,
          json
        }))
      )
      .then(({ status, json }) => {
        if (status >= 400) {
          return dispatch(receiveErrorResponse(url, json))
        }

        dispatch(receiveResponse(url, type, json, receiveParam))
      })
}
