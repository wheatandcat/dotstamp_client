export default {
    // 初期設定
    initContributionList: () => {
        return {
            type: "GET_USER_CONTRBUTION_LIST",
            list: []
        }
    },
    /**
     * 投稿リストを取得する
     *
     * @param  {[array]} contributionList 投稿リスト
     * @return {[object]} アクション
     */
    getList: (contributionList) => {
        return {
            type: "GET_USER_CONTRBUTION_LIST",
            list: contributionList
        }
    },
    /**
     * 投稿IDを設定する
     *
     * @param  {[array]} contributionId 投稿ID
     * @return {[object]} アクション
     */
    setContribution: (contributionId) => {
        return {
            type: "SET_USER_CONTRBUTION",
            contributionId: contributionId
        }
    }
}
