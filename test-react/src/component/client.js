import React from "react";

import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
    render() {
        const title = "welcome ryoma"
        return (
        <>
            <Header title={title}></Header>
            <Footer></Footer>
        </>
        )
    }
}
