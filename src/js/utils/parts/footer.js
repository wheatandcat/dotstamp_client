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
                    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                        問い合わせ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={getTopUrl() + "#/about"}>
                        .stampとは
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="http://192.168.33.10:8080/#/about?_k=sbqb4v">
                        ブログ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="http://192.168.33.10:8080/#/about?_k=sbqb4v">
                        git
                    </Breadcrumb.Item>
                </Breadcrumb>
            </footer>
        )
    }
}
