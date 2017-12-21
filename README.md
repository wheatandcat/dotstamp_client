# dotstamp_client

[![Build Status](https://api.travis-ci.org/wheatandcat/dotstamp_client.svg?branch=master)](https://travis-ci.org/wheatandcat/dotstamp_client)
[![Code Climate](https://codeclimate.com/github/wheatandcat/dotstamp_client/badges/gpa.svg)](https://codeclimate.com/github/wheatandcat/dotstamp_client)
[![Test Coverage](https://codeclimate.com/github/wheatandcat/dotstamp_client/badges/coverage.svg)](https://codeclimate.com/github/wheatandcat/dotstamp_client/coverage)
[![Issue Count](https://codeclimate.com/github/wheatandcat/dotstamp_client/badges/issue_count.svg)](https://codeclimate.com/github/wheatandcat/dotstamp_client)
[![react storybook](https://img.shields.io/badge/react--storybook-public-green.svg)](https://wheatandcat.github.io/dotstamp_client/?selectedKind=Bllon&selectedStory=text)
[![Dependency Status](https://gemnasium.com/badges/github.com/wheatandcat/dotstamp_client.svg)](https://gemnasium.com/github.com/wheatandcat/dotstamp_client)
[![MIT License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)](LICENSE)

<img src="https://raw.githubusercontent.com/wheatandcat/dotstamp_client/master/dist/images/common/about.png" data-canonical-src="https://raw.githubusercontent.com/wheatandcat/dotstamp_client/master/dist/images/common/about.png" width="200" />

## 概要
.stampのクライアントサイド　  
webサービス：[.stamp](http://dotstamp.com/)

## projectリポジトリ一覧
* service
  * backend:[dotstamp_server](https://github.com/wheatandcat/dotstamp_server)
  * frontend：[dotstamp_client](https://github.com/wheatandcat/dotstamp_client)
  * ansibl：[dotstamp_ansible](https://github.com/wheatandcat/dotstamp_ansible)
  * deploy_script：[dotstamp_deploy_script](https://github.com/wheatandcat/dotstamp_deploy_script)
  * deploy_ansible：[dotstamp_deploy_ansible](https://github.com/wheatandcat/dotstamp_deploy_ansible)
* admin
  * backend:[dotstamp_server](https://github.com/wheatandcat/dotstamp_admin_server)
  * frontend：[dotstamp_client](https://github.com/wheatandcat/dotstamp_admin_client)

## 必要なもの
* Node.js
* yarn
* storybook
## 環境構築
* [ローカル環境構築](https://github.com/wheatandcat/dotstamp_ansible#ローカル環境構築手順-)
## 実行手順
リポジトリをclone
```
git clone git@github.com:wheatandcat/dotstamp_client.git
cd dotstamp_client
```
パッケージ取得
```
yarn
```
※ちなみに↑で落ちるときは、このいじるといいみたいです
```
ulimit -n 2048
rm -rf node_modules/ && npm cache clean && npm install
```
local開発
```
yarn start
#ブラウザでアクセス
http://localhost:3000
```
リリースビルド
```
yarn build
```
テスト & 監視
```
yarn test -- --watch
```
storybook
```
yarn storybook
```
flow
```
yarn flow
```
eslint
```
yarn eslint src
```
stylelint
```
yarn stylelint
```
sitespeed.io:local(開発環境)
```
yarn sitespeed.io:local
```
sitespeed.io:public(本番環境)
```
yarn sitespeed.io:public
```

## License
MIT
