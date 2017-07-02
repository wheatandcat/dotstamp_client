// prettier-ignore
/* eslint-disable */
const host = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "http://192.168.33.10:8080/"

module.exports = {
  run(context) {
    return context.runWithDriver(driver => {
      // Go to Wikipedias login URL
      return driver.get(host + "login/input").then(() => {
        // You need to find the form, the login input fields and the
        // password field. Just add you name and password and submit the form
        // For more docs, checkout the NodeJS Selenium version
        // http://seleniumhq.github.io/selenium/docs/api/javascript/index.html
        // we fetch the selenium webdriver from context
        const webdriver = context.webdriver
        // and get hold of some goodies we want to use
        const until = webdriver.until
        const By = webdriver.By

        // before you start, make your username and password
        const userName = "dotstamp@gmail.com"
        const password = "testabc123456789"

        driver.wait(until.elementLocated(By.id("user")))
        driver.wait(until.elementLocated(By.id("password")))
        driver.wait(until.elementLocated(By.id("submit")))
        driver.findElement(By.id("user")).sendKeys(userName)
        driver.findElement(By.id("password")).sendKeys(password)
        driver.findElement(By.id("submit")).click()
        // we wait for something on the page that verifies that we are logged in
        return driver.wait(until.urlIs(host))
      })
    })
  }
}
