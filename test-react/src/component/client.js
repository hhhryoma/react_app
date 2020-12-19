import React from "react";

import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
    constructor() {
        super()
        this.name = "tutomu"
    }
    render() {
        return (
        <>
            <Header></Header>
            <Footer></Footer>
        </>
        )
    }
}
