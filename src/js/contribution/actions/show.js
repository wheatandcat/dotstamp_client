export default {
    /**
     * 詳細を取得する
     *
     * @param  {[string]} title タイトル
     * @param  {[string]} body 本文
     * @param  {{[]string}} tagList タグリスト
     * @return {[object]}  アクション
     */
    getDetail: (title, body, tagList) => {
        return {
            type: "GET_CONTRIBUTION_SHOW",
            title: title,
            body: body,
            tagList: tagList,
        }
    }
}
