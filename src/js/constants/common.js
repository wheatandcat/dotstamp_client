/** アップロード 最大ファイル容量*/
export const UPLOAD_FILE_SIZE_MAX = 600000

/** パスワードの最小文字数*/
export const PASSWORD_LENGTH_MIN = 8

/** ボイスタイプ*/
export const VOICE_TYPE = [
    {
        type: 1,
        name: "女性音声-普通(mei_normal)",
    },
    {
        type: 2,
        name: "女性音声-怒ってる(mei_angry)",
    },
    {
        type: 3,
        name: "女性音声-恥ずかしい(mei_bashful)",
    },
    {
        type: 4,
        name: "女性音声-嬉しい(mei_happy)",
    },
    {
        type: 5,
        name: "女性音声-悲しい(mei_sad)",
    },
    {
        type: 6,
        name: "男性音声-普通(m100)",
    },
    /*
    {
        type: 7,
        name: "ゆっくり-普通(AquesTalk)",
    }
    */
]

/** ボイスタイプマップ*/
export const VOICE_TYPE_MAP = {
    0: "女性音声-普通(mei_normal)",
    1: "女性音声-普通(mei_normal)",
    2: "女性音声-怒ってる(mei_angry)",
    3: "女性音声-恥ずかしい(mei_bashful)",
    4: "女性音声-嬉しい(mei_happy)",
    5: "女性音声-悲しい(mei_sad)",
    6: "男性音声-普通(m100)",
    //7: "ゆっくり-普通(AquesTalk)",
}
