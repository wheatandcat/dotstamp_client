export default {
    /**
     * 詳細を取得する
     *
     * @param  {[number]} id  ID
     * @param  {[string]} title タイトル
     * @param  {[string]} body 本文
     * @param  {{array}} tagList タグリスト
     * @return {object} アクション
     */
    getDetail: (id, title, body, tagList) => {
        return {
            type: "GET_CONTRIBUTION_EDIT",
            id: id,
            title: title,
            body: body,
            tagList: tagList
        }
    }
}
