export default {
    /**
     * リストを取得する
     *
     * @param  {[array[]]} list リスト
     * @param  {int} imageType 画像タイプ
     * @return {[object]}  アクション
     */
    getList: (list, imageType) => {
        return {
            type: "GET_CHARACTER_LIST",
            list: list,
            imageType: imageType
        }
    },
    /**
     * アイコンを設定する
     * @param {[int]} id アイコンID
     * @return {[object]}  アクション
     */
    setIcon: (id) => {
        return {
            type: "SET_CHARACTER_ICON",
            icon: id
        }
    }
}
