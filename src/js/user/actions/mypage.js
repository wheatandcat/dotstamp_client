export default {
    /**
     * アイコンを変更する
     *
     * @param  {string} url URL
     * @return {object} アクション
     */
    changeIcon: (url) => {
        return {
            type: "SET_USER_ICON",
            icon: url,
        }
    },
}
