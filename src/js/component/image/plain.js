// @flow
/* global process*/

function uploadDir(): string {
  return process.env.UPLOAD_PATH == undefined
    ? "test/files/"
    : process.env.UPLOAD_PATH
}

function imageDir(): string {
  return process.env.IMAGE_PATH == undefined
    ? "images/"
    : process.env.IMAGE_PATH
}

export function getFileName(
  fileName: string,
  dir: string,
  upload?: boolean
): string {
  const root = upload ? uploadDir() : imageDir()

  return root + dir + fileName
}
