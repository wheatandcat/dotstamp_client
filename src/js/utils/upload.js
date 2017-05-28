import Http from "./http"

export default class Upload {
  /**
   * static - description
   *
   * @param  {type} fileList description
   * @param  {type} url    description
   * @return {type}      description
   */
  static imageFileList(fileList, url) {
    return new Promise(resolve => {
      const formData = new FormData()
      fileList.forEach(f => {
        formData.append("file", f)
        Http.postImageApi(url, formData).then(response => {
          resolve(response)
        })
      })
    })
  }
}
