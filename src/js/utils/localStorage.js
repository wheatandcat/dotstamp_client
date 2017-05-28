export default class LocalStorage {
  /**
   * 取得する
   *
   * @param  {string} key キー
   * @return {string} 値
   */
  static get(key) {
    const value = window.localStorage.getItem(key)

    return value
  }
  /**
   * JSON変換して取得する
   *
   * @param  {string} key キー
   * @return {object} 値
   */
  static getJSON(key) {
    const value = window.localStorage.getItem(key)
    if (value == null) {
      return {}
    }

    return JSON.parse(value)
  }
}
