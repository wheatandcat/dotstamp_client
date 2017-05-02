# dotstamp_client

[![Build Status](https://api.travis-ci.org/wheatandcat/dotstamp_client.svg?branch=master)](https://travis-ci.org/wheatandcat/dotstamp_client)
[![Code Climate](https://codeclimate.com/github/wheatandcat/dotstamp_client/badges/gpa.svg)](https://codeclimate.com/github/wheatandcat/dotstamp_client)
[![Test Coverage](https://codeclimate.com/github/wheatandcat/dotstamp_client/badges/coverage.svg)](https://codeclimate.com/github/wheatandcat/dotstamp_client/coverage)
[![Issue Count](https://codeclimate.com/github/wheatandcat/dotstamp_client/badges/issue_count.svg)](https://codeclimate.com/github/wheatandcat/dotstamp_client)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![react storybook][https://img.shields.io/badge/react--storybook-public-green.svg](https://wheatandcat.github.io/dotstamp_client/?selectedKind=Bllon&selectedStory=text)

<img src="https://raw.githubusercontent.com/wheatandcat/dotstamp_client/master/dist/images/common/about.png" data-canonical-src="https://raw.githubusercontent.com/wheatandcat/dotstamp_client/master/dist/images/common/about.png" width="200" />

## 概要
.stampのクライアントサイド　  
webサービス：[.stamp](http://dotstamp.com/)

## projectリポジトリ一覧
* サーバーサイド:[dotstamp_server](https://github.com/wheatandcat/dotstamp_server)
* クライアントサイド：[dotstamp_client](https://github.com/wheatandcat/dotstamp_client)
* 環境構築：[dotstamp_ansible](https://github.com/wheatandcat/dotstamp_ansible)
* デプロイスクリプト：[dotstamp_deploy_script](https://github.com/wheatandcat/dotstamp_deploy_script)
* デプロイ環境構築：[dotstamp_deploy_ansible](https://github.com/wheatandcat/dotstamp_deploy_ansible)

## 必要なもの
* Node.js
* webpack
* Jest
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
npm install
```
※ちなみに↑で落ちるときは、このいじるといいみたいです
```
ulimit -n 2048
rm -rf node_modules/ && npm cache clean && npm install
```
ビルド
```
webpack
```
ビルド & 監視
```
webpack --watch
```
リリースビルド
```
NODE_ENV=production  webpack
```
## その他コマンド
テスト & 監視
```
jest --watch
```
 (※このコマンドは、まだ作成途中)クライアントのみ実行
```
webpack-dev-server --inline --watch
#ブラウザでアクセス
http://192.168.33.10:3000
```
## ライセンス
BSDライセンス
