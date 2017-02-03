export default {
    /**
     * 認証する
     *
     * @return {[object]} アクション
     */
    auth: (user) => {
        return {
            type: "SET_LOGIN_AUTH",
            Login: user.Login,
            Name: user.Name
        }
    }
}
