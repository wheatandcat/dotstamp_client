import { abridgement, DateFormat, DateTimeFormat, formatTime } from "./common"

describe("UtilsCommon", () => {
  describe("DateFormat", () => {
    it("整形した日を取得する", () => {
      const result = DateFormat("2012-01-01")

      expect(result).toEqual("2012/01/01")
    })
  })

  describe("DateFormat", () => {
    it("整形した日時を取得する", () => {
      const result = DateTimeFormat("2012-01-01 10:00")

      expect(result).toEqual("2012年01月01日 10:00:00")
    })
  })

  describe("abridgement", () => {
    it("省略しない", () => {
      const result = abridgement("あいうえお", 5)

      expect(result).toEqual("あいうえお")
    })
  })

  describe("formatTime", () => {
    it("整形した時間 60秒以下", () => {
      const result = formatTime(30)

      expect(result).toEqual("00分30秒")
    })

    it("整形した時間 60秒以上", () => {
      const result = formatTime(150)

      expect(result).toEqual("02分30秒")
    })
  })
})
