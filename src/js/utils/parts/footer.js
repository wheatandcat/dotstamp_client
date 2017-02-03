import React from "react"
import { Breadcrumb } from "react-bootstrap"

import { FooterInfo } from "./../../../css/common"

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
                    <Breadcrumb.Item href="#">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                        問い合わせ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Data
                    </Breadcrumb.Item>
                </Breadcrumb>
            </footer>
        )
    }
}
