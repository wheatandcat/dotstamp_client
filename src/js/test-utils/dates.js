// Fix the time zone of the test
//
// source : http://unageanu.hatenablog.com/entry/2015/05/10/151024
/* eslint-disable */
import DateWithOffset from "date-with-offset";

const defaultTimezoneOffset = new Date().getTimezoneOffset() * -1;

export default class Dates {
  static date(iso8601String) {
    if (process.env.NODE_ENV == "test") {
      const date = new DateWithOffset(iso8601String, this.getTimezoneOffset());
      // material-ui: DatePicker
      // Mock toDateString
      // https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js#L130
      const ds = date.toString().split(" ");
      date.toDateString = jest.fn(() => `${ds[0]} ${ds[1]} ${ds[2]} ${ds[3]}`);

      return date;
    }

    return new Date(iso8601String);
  }

  static getTimezoneOffset() {
    return this.timezoneOffset != null
      ? this.timezoneOffset
      : defaultTimezoneOffset;
  }
  static setTimezoneOffset(timezoneOffset) {
    this.timezoneOffset = timezoneOffset;
  }
  static resetTimezoneOffset() {
    this.timezoneOffset = null;
  }
}
