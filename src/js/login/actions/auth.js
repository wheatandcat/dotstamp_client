export default {
    /**
     * 認証する
     *
     * @param  {[object]} user ユーザ
     * @return {[object]} アクション
     */
    auth: (user) => {
        return {
            type: "SET_LOGIN_AUTH",
            Login: user.Login,
            Name: user.Name
        }
    },
    /**
     * ログアウトする
     * 
     * @return {[object]} アクション
     */
    logout: () => {
        return {
            type: "LOGOUT_LOGIN_AUTH",
        }
    }
}
