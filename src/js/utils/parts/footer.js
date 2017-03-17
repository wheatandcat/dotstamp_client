import React from "react"
import {Breadcrumb} from "react-bootstrap"
import {FooterInfo} from "./../../../css/common.css"
import {getTopUrl} from "../../utils/common"

export default class Footer extends React.Component {
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <footer className={FooterInfo}>
                <Breadcrumb>
                    <Breadcrumb.Item href={getTopUrl()}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={getTopUrl() + "#/question"}>
                        問い合わせ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={getTopUrl() + "#/about"}>
                        .stampとは
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={getTopUrl() + "#/information/terms"}>
                        利用規約
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="http://wheatandcat.hatenablog.com/" target="_blank">
                        ブログ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="https://github.com/wheatandcat/dotstamp_ansible" target="_blank">
                        git
                    </Breadcrumb.Item>
                </Breadcrumb>
            </footer>
        )
    }
}
