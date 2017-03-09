/*global BASE_URL*/
import dateFormat from "dateformat"

/**
 * 整形した日時を取得する
 *
 * @param  {string} data 日付
 * @return {string} 日付
 */
export function DateTimeFormat(data) {

    return dateFormat(data, "yyyy年mm月dd日 hh:MM:ss")
}

/**
 * 整形した日を取得する
 *
 * @param  {string} data 日付
 * @return {string} 日付
 */
export function DateFormat(data) {

    return dateFormat(data, "yyyy/mm/dd")
}


/**
 * ランダムな文字列を取得する
 *
 * @param  {number} myStrong ランダム値
 * @return {string} ランダム文字列
 */
export function getUniqueStr(myStrong) {
    let strong = 1000

    if (myStrong) {
        strong = myStrong
    }

    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}

/**
 * トップURLを取得する
 *
 * @return {string} URL
 */
export function getTopUrl() {
    return BASE_URL
}

/**
 * 省略する
 *
 * @param  {string} str 文字
 * @param  {number} maxNumber 最大文字数
 * @return {string} 省略文字
 */
export function abridgement(str, maxNumber) {
    if (str.length <= maxNumber) {
        return str
    }

    return str.substring(0 ,maxNumber) + "..."
}
