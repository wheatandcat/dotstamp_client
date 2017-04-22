/*global process*/
import request from "superagent"

var host = (typeof (process.env.BASE_URL) == "undefined") ? "http://192.168.33.10:8080/" : process.env.BASE_URL

export default class Http {
  /**
   * 通信を送信する
   *
   * @param  {string} url URL
   * @param  {object} sendList パラメータ
   * @return {object} レスポンス
   */
  static postApi (url, sendList = null) {
    return new Promise(function (resolve, reject) {
      request.post(host + url).type("form").send(sendList).end((err, res) => {
        if (!err) {
          resolve(res)
        } else {
          reject(JSON.parse(res.text))
        }
      })
    })
  }
  /**
   * 画像を送信する
   *
   * @param  {string} url URL
   * @param  {object} sendList パラメータ
   * @return {object} レスポンス
   */
  static postImageApi (url, sendList = null) {
    return new Promise(function (resolve, reject) {
      request.post(host + url).send(sendList).end((err, res) => {
        if (!err) {
          resolve(res)
        } else {
          reject(err)
        }
      })
    })
  }
}
