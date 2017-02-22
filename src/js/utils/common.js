import dateFormat from "dateformat"

/**
 * 整形した日時を取得する
 *
 * @param  {string} data 日付
 * @return {string} 日付
 */
export function DateTimeFormat(data) {

    return dateFormat(data, "yyyy年m月d日 hh:MM:ss")
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
