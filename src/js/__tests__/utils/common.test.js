import {DateFormat} from "../../utils/common"

describe("UtilsCommon", () => {
    it("整形した日時を取得する", () => {
        const result = DateFormat("2012-01-01 10:00:00")

        expect(result).toEqual("2012/01/01 10:00:00")
    })
})
