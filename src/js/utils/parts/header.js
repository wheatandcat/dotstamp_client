import React from "react"
import {Image, Navbar, FormGroup, FormControl, Button, Glyphicon, InputGroup} from "react-bootstrap"

import LoginAuth from "./../../login/containers/auth"
import {Link} from "react-router"

import {Stamp, Narrowly} from "./../../../css/common.css"
import {Top} from "./../../../css/header.css"

export default class Header extends React.Component {
    search() {
        var search = this.input.value.trim()
        if(search == ""){
            return
        }

        location.href = "/#/contribution/search/" + search + "/1/1"
        return
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <Navbar className={Narrowly + " " + Stamp}>
                <Navbar.Header>
                    <Navbar.Brand className={Top}>
                        <Link to="/">
                            <Image src="/static/images/common/top.png" rounded />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text"  inputRef={ref => { this.input = ref }} placeholder="Search"/>
                                <InputGroup.Button>
                                    <Button onClick={() => this.search()}>
                                        <Glyphicon glyph="search"/>
                                    </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Navbar.Form>
                    <LoginAuth/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
