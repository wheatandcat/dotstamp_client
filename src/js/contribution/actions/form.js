export default {
    /**
     * 本文を追加する
     *
     * @param {string} body 本文
     * @param {object} character キャラクター
     * @param {number} directionType 方向タイプ
     * @param {number} talkType 会話タイプ
     * @return {object} アクション
     */
    addBody: (body, character, directionType, talkType) => {
        return {
            type: "ADD_CONTRIBUTION_BODY",
            character: character,
            body: body,
            directionType: directionType,
            talkType: talkType
        }
    },
    /**
     * 本文を編集する
     *
     * @param {string} body 本文
     * @param {object} character キャラクター
     * @param {number} directionType 方向タイプ
     * @param {number} priority 優先度
     * @return {object} アクション
     */
    editBody: (body, character, directionType, priority) => {
        return {
            type: "EDIT_CONTRIBUTION_BODY",
            character: character,
            body: body,
            directionType: directionType,
            priority: priority
        }
    },
    /**
     * キャラクターを変更する
     *
     * @param  {object} character キャラクター
     * @return {object} アクション
     */
    changeCharacter(character) {
        return {
            type: "CHANGE_CONTRIBUTION_CHARACTER",
            character: character
        }
    },
    /**
     * 本文を変更する
     *
     * @param  {string} body 本文
     * @return {object} アクション
     */
    changeBody(body) {
        return {
            type: "CHANGE_CONTRIBUTION_BODY",
            body: body
        }
    },
    /**
     * タイトルを変更する
     *
     * @param  {string} title タイトル
     * @return {object} アクション
     */
    changeTitle(title) {
        return {
            type: "CHANGE_CONTRIBUTION_TITLE",
            title: title
        }
    },
    /**
     * タグを変更する
     *
     * @param  {string} title タイトル
     * @return {object} アクション
     */
    changeTag(tag) {
        return {
            type: "CHANGE_CONTRIBUTION_TAG",
            tag: tag
        }
    },
    /**
     * windowの高さ変更する
     *
     * @param  {number} height 高さ
     * @return {object} アクション
     */
    changeHeight(height) {
        return {
            type: "CHANGE_CONTRIBUTION_HEIGHT",
            height: height
        }
    }
}
