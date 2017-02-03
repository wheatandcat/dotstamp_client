export default {
    /**
     * 初期リスト
     */
    initList: () => {
        return {
            type: "GET_CONTRIBUTION_LIST",
            list: [],
            order: 0,
        }
    },
    /**
     * リストを取得する
     *
     * @param  {array[]} list リスト
     * @param  {bool} init 初期アクセス
     * @return {object}  アクション
     */
    getList: (list, init) => {
        return {
            type: "GET_CONTRIBUTION_LIST",
            list: list,
            init: init,
        }
    },
    /**
     * 次のページを表示する
     * @return {object}  アクション
     */
    next: () => {
        return {
            type: "GET_CONTRIBUTION_LIST_NEXT",
        }
    },
    /**
     * アイテムを追加する
     * @param  {object} response レスポンス
     * @return {object}  アクション
     */
    addItem: (response) => {
        return {
            type: "ADD_CONTRIBUTION_LIST_ITEM",
            response: response,
        }
    },
    /**
     * アイテムを削除する
     * @param  {number} id 投稿ID
     * @return {object}  アクション
     */
    deleteItem: (id) => {
        return {
            type: "DELETE_CONTRIBUTION_LIST_ITEM",
            id: id,
        }
    },
}
