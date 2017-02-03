export default {
    /**
     * エラーを表示する
     *
     * @param  {[object]} error エラー
     * @return {[object]} アクション
     */
    showError: (error) => {
        return {
            type: "SHOW_ERROR_MESSAGE",
            message: error.Message,
            errCode: error.ErrCode,
            show: true
        }
    },
    /**
     * エラーを閉じる
     *
     * @return {[object]} アクション
     */
    closeError: () => {
        return {
            type: "CLOSE_ERROR_MESSAGE",
            show: false
        }
    }
}
